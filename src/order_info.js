import React from 'react';

const SENDER = "Sender"
const RECIVER = "Receiver"
const ADDRESS = "Address"
const TRANSPORT_DOCUMENT = "Transport document"
const WEIGHT = "Weight"

//in questo momento sto usando dei placeholder ma non è correttissimo
//disable or readOnly??
const OrderInfoCard = function (props) {
    const reciver = props['order']
    return (
        <form style={props['showOrderDetail'] ? {} : { display: "none" }}>

            <div className="form-group">
                <label htmlFor="mittente" className="col-sm-2 control-label">{SENDER}</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="sender" placeholder={props.order['sender']} disabled />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="destinatario" className="col-sm-2 control-label">{RECIVER}</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="reciver" placeholder={props.order['reciver']} disabled />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="indirizzo" className="col-sm-2 control-label">{ADDRESS}</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="address" placeholder={props.order['address']} readOnly disabled />
                </div>
            </div>

            <div className="form-row container-fluid">
                <div className="form-group col-sm-5">
                    <label htmlFor="bolla" className="control-label">{TRANSPORT_DOCUMENT}</label>
                    <input type="text" className="form-control" id="transport_document" placeholder={props.order['transport_doc_n']} readOnly disabled />
                </div>
                <div className="form-group col-sm-5">
                    <label htmlFor="peso" className="control-label">{WEIGHT}</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">kg</span>
                        </div>
                        <input type="number" className="form-control" id="weight" placeholder={props.order['weight']} readOnly disabled></input>
                    </div>
                </div>
            </div>

        </form>
    );
};


export default OrderInfoCard;
