import { Procedure, getSavedProcedures } from "./procedure"
import * as path from "path";

jest.setTimeout(30000)

const timeout = 2000
const APPLICATION_NAME = path.basename(__filename)

const PROC_1 = "PROC1_sync_async_sync"
test(PROC_1, done => {
    console.log('---- TEST 1 ----')
    let a = new Procedure(APPLICATION_NAME, PROC_1)
    let res = []
    a.addProcedureSteps(
        [{
            f: (params) => { console.log(params.p); res.push(params.p) },
            params: { p: "step1" },
            isAsync: false
        },
        {
            f: (params) => {
                return new Promise((resolve, reject) => {
                    console.log(params.p)
                    res.push(params.p)
                    resolve()
                })
            },
            params: { p: "step2" },
            isAsync: true
        },
        {
            f: (params) => { console.log(params.p); res.push(params.p) },
            params: { p: "step3" },
            isAsync: false
        },]
    )
    a.execute()

    setTimeout(() => {
        console.log('test 1 fine')
        expect(res).toEqual(['step1', 'step2', 'step3'])
        done()
    }, timeout);
})

const PROC_2 = "PROC2_sync_async(failure)_sync_redo_from_the_beginnig"
test(PROC_2, done => {

    console.log('---- TEST 2 ----')

    let a = new Procedure(APPLICATION_NAME, PROC_2)
    let res = []

    a.addProcedureSteps(
        [{
            f: function (params) {
                console.log(params.p)
                params.res.push(params.p)
            },
            params: { p: "step1", res: res },
            isAsync: false
        },
        {
            f: function (params) {
                return new Promise((resolve, reject) => {
                    if (params.firstTime) {
                        console.log('params.firstTime', params.firstTime)
                        reject('First Time')
                    } else {
                        console.log(params.p)
                        params.res.push(params.p)
                        resolve()
                    }
                })
            },
            params: { p: "step2", firstTime: true, res: res },
            isAsync: true
        },
        {
            f: function (params) {
                console.log(params.p)
                params.res.push(params.p)
            },
            params: { p: "step3", res: res },
            isAsync: false
        }]
    )

    a.execute()

    setTimeout(() => {
        const savedProcedures = getSavedProcedures(APPLICATION_NAME)
        console.log('test3 ---- Redo Procedure ', savedProcedures)
        for (let i = 0; i < savedProcedures.length; i++) {
            let p = savedProcedures[i]
            let b = new Procedure(p.app_id, p.proc_name, true)
            p.steps.forEach(s => {
                console.log('reset res in params')
                s.params.res = res
            })
            p.steps[1].params.firstTime = false
            b.addProcedureSteps(p.steps)
            b.execute()
        }
    }, timeout);

    setTimeout(() => {
        console.log('fine test 2')
        let keys = Object.keys(window.localStorage)
        console.log('test 2 keys', keys)
        expect(res).toEqual(['step1', 'step1', 'step2', 'step3'])
        done()
    }, timeout * 3);
})

const PROC_3 = "PROC3_sync_async_sync(failure)_redo_from_the_beginning"
test(PROC_3, done => {
    let a = new Procedure(APPLICATION_NAME, PROC_3)
    let res = []

    console.log('---- TEST 3 ----')
    a.addProcedureSteps(
        [{
            f: function (params) {
                console.log(params.p)
                params.res.push(params.p)
            },
            params: { p: "step1", res: res },
            isAsync: false
        },
        {
            f: function (params) {
                return new Promise((resolve, reject) => {
                    console.log(params.p)
                    params.res.push(params.p)
                    resolve()
                })
            },
            params: { p: "step2", res: res },
            isAsync: true
        },
        {
            f: function (params) {
                if (!params.firstTime) {
                    console.log(params.p)
                    params.res.push(params.p)
                } else {
                    throw "First Time"
                }
            },
            params: { p: "step3", firstTime: true, res: res },
            isAsync: false
        }]
    )

    a.execute()

    setTimeout(() => {
        const savedProcedures = getSavedProcedures(APPLICATION_NAME)
        for (let i = 0; i < savedProcedures.length; i++) {
            let p = savedProcedures[i]
            console.log('Redo Procedure ', p.app_id)
            let b = new Procedure(p.app_id, p.proc_name, true)
            p.steps.forEach(s => {
                console.log('reset res in params')
                s.params.res = res
            })
            p.steps[2].params.firstTime = false
            b.addProcedureSteps(p.steps)
            b.execute()
        }
    }, timeout);

    setTimeout(() => {
        expect(res).toEqual(['step1', 'step2', 'step1', 'step2', 'step3'])
        done()
    }, timeout * 3);
})

const PROC_4 = "PROC4_sync_async(failure)_sync"
test(PROC_4, done => {

    console.log('---- TEST 4 ----')

    let a = new Procedure(APPLICATION_NAME, PROC_4, { redo_from_beginning: false })
    let res = []

    a.addProcedureSteps(
        [{
            f: function (params) {
                console.log(params.p)
                params.res.push(params.p)
            },
            params: { p: "step1", res: res },
            isAsync: false
        },
        {
            f: function (params) {
                return new Promise((resolve, reject) => {
                    if (params.firstTime) {
                        console.log('params.firstTime', params.firstTime)
                        reject('First Time')
                    } else {
                        console.log(params.p)
                        params.res.push(params.p)
                        resolve()
                    }
                })
            },
            params: { p: "step2", firstTime: true, res: res },
            isAsync: true
        },
        {
            f: function (params) {
                console.log(params.p)
                params.res.push(params.p)
            },
            params: { p: "step3", res: res },
            isAsync: false
        }]
    )

    a.execute()

    setTimeout(() => {
        const savedProcedures = getSavedProcedures(APPLICATION_NAME)
        console.log('test4 ---- Redo Procedure ', savedProcedures)
        for (let i = 0; i < savedProcedures.length; i++) {
            let p = savedProcedures[i]
            let b = new Procedure(p.app_id, p.proc_name, true)
            p.steps.forEach(s => {
                console.log('reset res in params')
                s.params.res = res
            })
            p.steps[0].params.firstTime = false
            b.addProcedureSteps(p.steps)
            b.execute()
        }
    }, timeout);

    setTimeout(() => {
        expect(res).toEqual(['step1', 'step2', 'step3'])
        done()
    }, timeout * 3);
})

const PROC_5 = "PROC4_sync_async(failure)_sync_no_saved"
test(PROC_5, done => {

    console.log('---- TEST 5 ----')

    let a = new Procedure(APPLICATION_NAME, PROC_5, { saveProcedure: false })
    let res = []

    a.addProcedureSteps(
        [{
            f: function (params) {
                console.log(params.p)
                params.res.push(params.p)
            },
            params: { p: "step1", res: res },
            isAsync: false
        },
        {
            f: function (params) {
                return new Promise((resolve, reject) => {
                    if (params.firstTime) {
                        console.log('params.firstTime', params.firstTime)
                        reject('First Time')
                    } else {
                        console.log(params.p)
                        params.res.push(params.p)
                        resolve()
                    }
                })
            },
            params: { p: "step2", firstTime: true, res: res },
            isAsync: true
        },
        {
            f: function (params) {
                console.log(params.p)
                params.res.push(params.p)
            },
            params: { p: "step3", res: res },
            isAsync: false
        }]
    )

    a.execute()

    setTimeout(() => {
        const savedProcedures = getSavedProcedures(APPLICATION_NAME)
        for (let i = 0; i < savedProcedures.length; i++) {
            let p = savedProcedures[i]
            let b = new Procedure(p.app_id, p.proc_name, true)
            p.steps.forEach(s => {
                console.log('reset res in params')
                s.params.res = res
            })
            p.steps[0].params.firstTime = false
            b.addProcedureSteps(p.steps)
            b.execute()
        }
    }, timeout);

    setTimeout(() => {
        expect(res).toEqual(['step1'])
        done()
    }, timeout * 3);
})


const PROC_6 = "PROC6_procedureEndCallback"
test(PROC_6, done => {
    let res = []
    let procedureEndCallback = { done: false }
    let a = new Procedure(APPLICATION_NAME, PROC_6, {}, () => {
        procedureEndCallback.done = true
    })
    a.addProcedureSteps(
        [{
            f: (params) => { console.log(params.p); res.push(params.p) },
            params: { p: "step1" },
            isAsync: false
        },
        {
            f: (params) => {
                return new Promise((resolve, reject) => {
                    console.log(params.p)
                    res.push(params.p)
                    resolve()
                })
            },
            params: { p: "step2" },
            isAsync: true
        },
        {
            f: (params) => { console.log(params.p); res.push(params.p) },
            params: { p: "step3" },
            isAsync: false
        },]
    )
    a.execute()

    setTimeout(() => {
        console.log('test 1 fine')
        expect(res).toEqual(['step1', 'step2', 'step3'])
        expect(procedureEndCallback.done).not.toBeFalsy()
        done()
    }, timeout);
})


const PROC_7 = "PROC7_procedureNotWorkCallback"
test(PROC_7, done => {

    let procedureNotWorkCallBack = { done: true }
    let a = new Procedure(APPLICATION_NAME, PROC_7, {}, () => { }, () => { procedureNotWorkCallBack.done = true })
    let res = []

    a.addProcedureSteps(
        [{
            f: function (params) {
                console.log(params.p)
                params.res.push(params.p)
            },
            params: { p: "step1", res: res },
            isAsync: false
        },
        {
            f: function (params) {
                return new Promise((resolve, reject) => {
                    console.log(params.p)
                    params.res.push(params.p)
                    resolve()
                })
            },
            params: { p: "step2", res: res },
            isAsync: true
        },
        {
            f: function (params) {
                if (!params.firstTime) {
                    console.log(params.p)
                    params.res.push(params.p)
                } else {
                    throw "First Time"
                }
            },
            params: { p: "step3", firstTime: true, res: res },
            isAsync: false
        }]
    )

    a.execute()

    setTimeout(() => {
        expect(procedureNotWorkCallBack.done).not.toBeFalsy()
        done()
    }, timeout * 3);
})


const PROC_8 = "PROC8_procedureEndCallback"
test(PROC_8, done => {
    let procedureEndCallback = { step: -1 }
    let a = new Procedure(APPLICATION_NAME, PROC_8, {}, (procedure) => {
        procedureEndCallback.step = procedure.currentStep
    })
    let res = []
    a.addProcedureSteps(
        [{
            f: (params) => { console.log(params.p); res.push(params.p) },
            params: { p: "step1" },
            isAsync: false
        },
        {
            f: (params) => {
                return new Promise((resolve, reject) => {
                    console.log(params.p)
                    res.push(params.p)
                    resolve()
                })
            },
            params: { p: "step2" },
            isAsync: true
        },
        {
            f: (params) => { console.log(params.p); res.push(params.p) },
            params: { p: "step3" },
            isAsync: false
        },]
    )
    a.execute()

    setTimeout(() => {
        console.log('test 1 fine')
        expect(res).toEqual(['step1', 'step2', 'step3'])
        expect(procedureEndCallback.step).toBe(3)
        done()
    }, timeout);
})

const PROC_9 = "PROC9_redo_step_async"
test(PROC_9, done => {
    let res = []
    let redoStep = { time: 0 }
    let a = new Procedure(APPLICATION_NAME, PROC_9, { saveProcedure: false }, () => { }, () => { })
    a.addProcedureSteps(
        [{
            f: (params) => { console.log(params.p); res.push(params.p) },
            params: { p: "step1" },
            isAsync: false
        },
        {
            f: (params) => {
                return new Promise((resolve, reject) => {
                    console.log(params.p)
                    res.push(params.p)
                    params.rs.time++
                    console.log("rs", params.rs)
                    throw "ERROR"
                })
            },
            params: { p: "step2", rs: redoStep },
            redo: { time: 3, timeout: 200 },
            isAsync: true
        },
        {
            f: (params) => { console.log(params.p); res.push(params.p) },
            params: { p: "step3" },
            isAsync: false
        },]
    )
    a.execute()

    setTimeout(() => {
        expect(redoStep.time).toBe(4)
        done()
    }, timeout * 2);
})


const PROC_10 = "PROC10_pass_res_as_arg"
test(PROC_10, done => {
    let res = []
    let redoStep = { time: 0 }
    let a = new Procedure(APPLICATION_NAME, PROC_9, { saveProcedure: false }, () => { }, () => { })
    a.addProcedureSteps(
        [{
            f: (params) => {
                return new Promise((resolve, reject) => {
                    resolve(params.p1 + params.p2)
                })
            },
            params: { p1: 1, p2: 1 },
            isAsync: true
        },
        {
            f: (params, prev_step_res) => {
                return new Promise((resolve, reject) => {
                    params.res[0] = prev_step_res + params.p
                })
            },
            params: { p: 1, res: res },
            isAsync: true
        }]
    )
    a.execute()

    setTimeout(() => {
        expect(res[0]).toBe(3)
        done()
    }, timeout * 2);
})


