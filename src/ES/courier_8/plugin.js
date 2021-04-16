import React from 'react';
import Utils from '../../utils'

const N_PACKAGES = "Packages"
const BUTTON_ACTION_1 = "Deliver"
const BUTTON_ACTION_2 = "Give Courier"
const LOGO = Utils.getAssetsURL("TEMPLATE", "todo.jpg")

const COURIER = "CORREOS"


const PluginCard = function (props) {
    const nPackagesInput = React.useRef(null);

    const closeOrder = function (e) {
        e.preventDefault();
        alert('---- close order TEMPLATE ----')
        window.location.reload();

    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="media">
                    <img className="align-self-start mr-3" src={LOGO} alt="Courier logo"></img>
                    <div className="media-body">
                        <h5 className="mt-0">{COURIER}</h5>
                        <div>
                            <p>Oooops... We don't have a plugin for this courier! Plese check our rules if you want became a developer!</p>
                            <form id="print_form" onSubmit={closeOrder}>
                                <div className="form-row container-fluid">
                                    <div className="col-md-6">
                                        <input type="number" className="form-control" id="colli" placeholder={N_PACKAGES} ref={nPackagesInput} />
                                    </div>
                                    <div className="col-md-2">
                                        <button type="submit" className="btn btn-primary btn-block">{BUTTON_ACTION_1}</button>
                                    </div>
                                    <div className="col-md-2">
                                        <button type="submit" className="btn btn-primary btn-block">{BUTTON_ACTION_2}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PluginCard }