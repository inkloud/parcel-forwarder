const storage = window.localStorage
const ENCOURAGEMENT = 'The request will be saved and done as soon as possible'
const SYSTEM_ERROR = { code: 1, msg: 'System error. ' + ENCOURAGEMENT }
const REQUEST_ERROR = { code: 2, msg: 'App cannot contact the system. Check yuor connection! ' + ENCOURAGEMENT }

const checkOrderIsInStates = function (states,order_id, jwt){
    return new Promise((resolve, reject) => {
        getOrderStateHistory(order_id, jwt)
            .then(data => {
                let curr_state = data
                curr_state = curr_state[0]
                let respose = false
                states.forEach(s => {
                    respose = respose || curr_state['order_state'] == s
                });
                resolve({ 
                    res: respose, 
                    info:{
                        order_state: curr_state['order_state'], 
                        order_date_change: curr_state['order_date_change'] 
                    }
                })
            }).catch((err) => reject(err))
    })
}

const canDeliverOrder_OLD = function (order_id, jwt) {
    return new Promise((resolve, reject) => {
        getOrderStateHistory(order_id, jwt)
            .then(data => {
                let curr_state = data
                curr_state = curr_state[0]
                const response = (curr_state['order_state'] == 'READY-FOR-PICKING' || curr_state['order_state'] == 'PICKED' || curr_state['order_state'] == 'PICKING')
                resolve({ 
                    res: response, 
                    info:{
                        order_state: curr_state['order_state'], 
                        order_date_change: curr_state['order_date_change'] 
                    }
                })
            }).catch((err) => reject(err))
    })
}

function canDeliverOrder(logistic_state) {
    return logistic_state == 'PICKED' || logistic_state == 'READY-FOR-PICKING' || logistic_state == 'PICKING'
}

function canEditOrder(logistic_state) {
    return logistic_state == 'IN-TRANSIT' || logistic_state == 'LABELLED'
}

function getCurrentStateDateChange(order_id, jwt) {
    return new Promise((resolve, reject) => {
        getOrderStateHistory(order_id, jwt)
            .then(data => {
                let curr_state = data
                curr_state = curr_state[0]
                resolve({ 
                    info:{
                        order_state: curr_state['order_state'], 
                        order_date_change: curr_state['order_date_change'] 
                    }
                })
            }).catch((err) => reject(err))
    })
}

const canLabelOrder = function (order_id, jwt) {
    return checkOrderIsInStates(['READY-FOR-PICKING', 'PICKING','PICKED'], order_id, jwt)
}


const checkIfOrderIsInTransit = function (order_id, jwt) {
    return new Promise((resolve, reject) => {
        getOrderStateHistory(order_id, jwt)
            .then(data => {
                let curr_state = data
                curr_state = curr_state[0]
                const response = (curr_state['order_state'] == 'IN-TRANSIT')
                resolve({ 
                    res: response, 
                })
            }).catch((err) => reject(err))
    })
}


const getOrderStateHistory = function (order_id, jwt) {
    const request = `${GET_ORDER_STATE_HISTORY.replace("-1", order_id)}?jwt=${jwt}`

    return new Promise((resolve, reject) => {
        fetch(request)
            .then(res => {
                res.json().then((data) => {
                    resolve(data)
                }).catch((err) => reject(err))
            }).catch((err) => reject(err))
    }) 
}

const setOrderLogisticState = function (order_id, state, body, jwt) {
    body['logistic_state'] = state
    const request = `${ORDER_EDIT.replace("-1", order_id)}?jwt=${jwt}`
    const method = 'PUT'
    const headers = {
        'Content-Type': 'application/json'
    }
    return new Promise((resolve, reject) => {
        fetch(request, {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        }).then((respose) => {
            if (respose.ok) {
                resolve()
            } else {
                reject(SYSTEM_ERROR)
            }
        }).catch(() => {
            reject(REQUEST_ERROR)
        })
    })
}

const setOrderInTransit = function (order_id, box_n, jwt) {
    return setOrderLogisticState(order_id, 'IN-TRANSIT', { box_n: box_n }, jwt)
}

const setOrderInLabelled = function (order_id, box_n, jwt) {
    return setOrderLogisticState(order_id, 'LABELLED', { box_n: box_n }, jwt, true)
} 

const setOrderDelivered = function (order_id, box_n, jwt) {
    return setOrderLogisticState(order_id, 'DELIVERED', { box_n: box_n }, jwt)
}

const setWhoMakeDelivery = function(user, order_id, jwt){
    const request = `${SET_WHO_MAKE_THE_DELIVERY}?jwt=${jwt}`
    const method = 'POST'
    const headers = {
        'Content-Type': 'application/json'
    }
    const body = {
        user: user,
        order_id: order_id
    }
    return new Promise((resolve, reject) => {
        fetch(request, {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        }).then((respose) => {
            if (respose.ok) {
                resolve()
            } else {
                reject(SYSTEM_ERROR)
            }
        }).catch(() => {
            reject(REQUEST_ERROR)
        })
    })
}

const undoDeliver = function (order_id, jwt) {
    return setOrderLogisticState(order_id, 'PICKED', { box_n: 0 }, jwt)
}

const saveProcedure = function (courier_id, procedure_name, procedure_data) {
    const procedure_saved_on = Date.now()
    const id = `${COUNTRY}_${courier_id}_${procedure_saved_on}_parcel-forwarder`
    console.log(`Save id ${id}, procedure_name ${procedure_name}, procedure_data ${procedure_data}`)
    const item = JSON.stringify({
        procedure_name: procedure_name,
        procedure_data: procedure_data,
        procedure_saved_on: procedure_saved_on
    })
    storage.setItem(id, item);
}


export default { 
    canDeliverOrder_OLD, 
    setOrderDelivered, 
    saveProcedure, 
    undoDeliver,
    setWhoMakeDelivery,
    setOrderInTransit,
    checkIfOrderIsInTransit,
    canLabelOrder,
    setOrderInLabelled,
    getOrderStateHistory,
    getCurrentStateDateChange,
    canDeliverOrder,
    canEditOrder
 }

