//manca di aggiungere il redo single step in sync step


class Procedure {

    constructor(app_id, procedure_name, options, procedureEndCallback, procedureNotWorkCallback) {
        this.canAddAnotherStep = false
        this.steps = []
        this.currentStep = 0
        this.app_id = app_id
        this.procedure_name = procedure_name
        if (options == undefined)
            options = {}
        this.options = {
            saveProcedure: options.saveProcedure != undefined ? options.saveProcedure : true,
            redo_from_beginning: options.redo_from_beginning != undefined ? options.redo_from_beginning : true,
        }
        if (procedureEndCallback != undefined)
            this.procedureEndCallback = procedureEndCallback
        else
            this.procedureEndCallback = () => { }
        if (procedureNotWorkCallback != undefined) {
            this.procedureNotWorkCallback = procedureNotWorkCallback
        } else {
            this.procedureNotWorkCallback = () => { }
        }

    }

    /**
    * Add a procedure steps 
    */
    addProcedureSteps(steps) {
        this.steps = steps
    }

    /**
     * Execute a procedure
     */
    execute() {
        try {
            if (this.steps.length - this.currentStep > 0) {
                let isAsync = this.steps[this.currentStep].isAsync
                if (isAsync) {
                    this.doAnotherAsyncStep()
                } else {
                    this.doAnotherSyncStep()
                }
            } else {
                this.procedureEndCallback(this)
            }
        } catch (error) {
            console.log(error)
        }
       
    }

    doAnotherSyncStep() {
        try {
            const f = this.steps[this.currentStep].f
            const params = this.steps[this.currentStep].params
            f(params)
            this.currentStep++
            this.execute()
        } catch (error) {
            if (this.options.saveProcedure) {
                this.saveProcedure()
            }
            this.procedureNotWorkCallback(this, error)
        }
    }

    doAnotherAsyncStep() {
        const f = this.steps[this.currentStep].f
        const params = this.steps[this.currentStep].params
        const prev_step_res = this.steps[this.currentStep].prev_step_res
        const redo = this.steps[this.currentStep].redo
        const time = redo != undefined ? this.steps[this.currentStep].redo.time : undefined
        const timeout = redo != undefined ? this.steps[this.currentStep].redo.timeout : undefined
        f(params, prev_step_res).then((res) => {
            this.currentStep++
            if(this.steps[this.currentStep] != undefined){
                this.steps[this.currentStep].prev_step_res = res
            }
            this.execute()
        }).catch((err) => {
            if(redo != undefined && time > 0){
                setTimeout(() => {
                    console.log('time ', time)
                    this.steps[this.currentStep].redo.time --
                    this.doAnotherAsyncStep()   
                }, timeout);
            } else {
                if (this.options.saveProcedure) {
                    this.saveProcedure()
                }
                this.procedureNotWorkCallback(this, err)
            }
        })
    }

    saveProcedure() {
        const procedure_saved_on = Date.now()
        const id = `${this.app_id}_${this.procedure_name}_${procedure_saved_on}`
        console.log('Saving procedure', id)
        const stepsStringified = []
        let redo_from_beginning = this.options.redo_from_beginning
        let c = 0
        this.steps.forEach(s => {
            if (redo_from_beginning || c >= this.currentStep) {
                let toStringFunction = s.f.toString()
                let bodyString = toStringFunction.slice(toStringFunction.indexOf("{") + 1, toStringFunction.lastIndexOf("}"))
                let step_to_save = {
                    f: bodyString,
                    params: s.params,
                    isAsync: s.isAsync
                }
                stepsStringified.push(step_to_save)
            }
            c++
        })

        const item = JSON.stringify({
            app_id: this.app_id,
            proc_name: this.procedure_name,
            steps: stepsStringified
        })
        window.localStorage.setItem(id, item);
    }
}


const getSavedProcedures = function (application_id) {
    let keys = Object.keys(window.localStorage)
    const proc = []
    const pattern = new RegExp(application_id)
    keys.forEach(k => {
        if (k.match(pattern) != null) {
            let proc_string = window.localStorage.getItem(k)
            let parsed_proc = JSON.parse(proc_string)
            parsed_proc.steps.forEach((s) => {
                s.f = new Function('params', s.f)
            })
            proc.push(parsed_proc)
            window.localStorage.removeItem(k)
        }
    })
    return proc
}


export {
    Procedure,
    getSavedProcedures
}



