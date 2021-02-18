import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './auth';
import OrderInfoCard from './order_info';
import Utils from './utils';
import { PluginCard as PluginTemplate } from "./IT/TEMPLATE/plugin";
import { checkIsASmartphone } from "./utils/window_dimension";
import { COUNTRY, USE_WAREHOUSE_WORKER_LOGIN } from "./country_settings";
const storage = window.localStorage
const plugin_div_id = "Plugin"


const WH_USER_ID_PLACEHOLDER = "User id"
const WH_USER_ID_INPUT_ID = " WH_USER_ID_INPUT_ID"

const WH_ORDER_ID_INPUT = "WH_ORDER_ID_INPUT"
const WH_ORDER_ID_PLACEHOLDER = "Order id"

const SEARCH_ORDER_BUTTON_ID = "search_order_button_id"

const COMPONENT_ID = 'OrderDetailsCard'
const FORM_ID = 'form_id'

const REDO_PENDING_PROCEDURE_MINUTES = 2

const OrderDetailsCard = function (props) {
    const [order, setOrder] = React.useState({})
    const [wh_userAuthenticated, setWh_userAuthenticated] = React.useState(false)
    const [showOrderDetail, setShowOrderDetail] = React.useState(false)
    const [wh_user_id, setWh_user_id] = React.useState("")
    const [error, setError] = React.useState(null)
    const orderIdInput = React.useRef(null)
    const wh_userIdInput = React.useRef(null)

    React.useEffect(function () {
        redoAllPendingProcedureFromPlugin(props['token']['jwt'])
        if (USE_WAREHOUSE_WORKER_LOGIN) {
            wh_userIdInput.current.focus()
            document.getElementById(SEARCH_ORDER_BUTTON_ID).disabled = true

        } else {
            orderIdInput.current.focus()
        }


    }, []);

    const onBlurWhUserIdInput = function (e) {
        if (!wh_userAuthenticated) {
            e.preventDefault()
            wh_userIdInput.current.focus();
        }
    }

    const onKeyDownWhUserIdInput = function (e) {
        if (e.key == 'Enter') {
            e.preventDefault()
            Utils.checkWhUserIdCorrect(wh_userIdInput.current.value, props['token']['jwt']).then(
                (isAuthenticated) => {
                    if (isAuthenticated) {
                        setWh_userAuthenticated(true)
                        setWh_user_id(wh_userIdInput.current.value)
                        orderIdInput.current.focus()
                        document.getElementById(SEARCH_ORDER_BUTTON_ID).disabled = false
                        document.getElementById(WH_USER_ID_INPUT_ID).classList.remove("is-invalid")
                        document.getElementById(WH_USER_ID_INPUT_ID).classList.add("is-valid")
                        document.getElementById(WH_USER_ID_INPUT_ID).readOnly = true
                    } else {
                        document.getElementById(WH_USER_ID_INPUT_ID).classList.add("is-invalid")
                    }
                }).catch((err) => {
                    console.log(err)
                })
        }
    }

    const search = function (e) {
        e.preventDefault();
        setOrder({})
        ReactDOM.unmountComponentAtNode(document.getElementById(plugin_div_id))
        fetch(GET_ORDER.replace("-1", orderIdInput.current.value) + `?jwt=${props['token']['jwt']}`).then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    let parsedOrder = Utils.parseOrder(data)
                    setOrder(parsedOrder)
                    setShowOrderDetail(true)

                    import(`./${COUNTRY}/courier_${parsedOrder['courier']}/plugin`).then((pluginCard) => {
                        const Plugin = pluginCard.default.PluginCard
                        console.log(props['token'])
                        ReactDOM.render(<Plugin order={data} token={props['token']} wh_user_id={wh_user_id} ></Plugin>, document.getElementById(plugin_div_id))
                    }).catch((err) => {
                        console.log(err)
                        console.log('---- plugin not found ----')
                        console.log(`${COUNTRY}/courier_${parsedOrder['courier']}/plugin`)
                        const Plugin = PluginTemplate
                        ReactDOM.render(<Plugin order={data} token={props['token']}></Plugin>, document.getElementById(plugin_div_id))
                    })

                })
            }
        }).catch(() => { console.log('error') })
    }

    return (
        <div id={COMPONENT_ID}>
            <div className="card">
                <div className="card-body">
                    <form id={FORM_ID} className="form-row container-fluid" onSubmit={search}>
                        {USE_WAREHOUSE_WORKER_LOGIN ?
                            <div className="col-md-4 mt-1">
                                <input type="text" className="form-control" id={WH_USER_ID_INPUT_ID}
                                    placeholder={WH_USER_ID_PLACEHOLDER} onKeyDown={onKeyDownWhUserIdInput} onBlur={onBlurWhUserIdInput}
                                    ref={wh_userIdInput} />
                            </div> : null}
                        <div className="col-md-4 mt-1">
                            <input type="number" min="0" step="1" id={WH_ORDER_ID_INPUT} className="form-control" placeholder={WH_ORDER_ID_PLACEHOLDER} ref={orderIdInput} />
                        </div>
                        <div className="col-md-2 mt-1">
                            <button type="submit" className="btn btn-primary btn-block" style={checkIsASmartphone() ? {} : { display: "none" }} id={SEARCH_ORDER_BUTTON_ID} >Search</button>
                        </div>
                    </form>
                    <hr />
                    <OrderInfoCard showOrderDetail={showOrderDetail} order={order} />
                </div>
            </div>
            <div className="mt-1" id={plugin_div_id}></div>
        </div>
    );
};

function redoAllPendingProcedureFromPlugin(jwt) {
    console.log('--- REDO PROCEDURE FROM PLUGIN ---')
    let keys = Object.keys(storage)
    keys.filter(k => {
        return k.match(/courier_\d/) != null
    }).flatMap(e => {
        return e.substring(0, 9)
    }).forEach(courier => {
        import(`./${COUNTRY}/${courier}/plugin`).then((plugin) => {
            try {
                plugin.default.redoProcedure(jwt)
            } finally {
                console.log(`${courier} redo the procedure`)
            }

        })
    });
}

const MainPanel = function (props) {
    return <React.Fragment><OrderDetailsCard token={props.token} /><div style={{ marginTop: '1em' }}></div></React.Fragment>;
};

const Body = Auth.Authify(MainPanel, document.getElementById('logout-button'));


ReactDOM.render(<Body />, document.getElementById('main'));
