import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store.js';
import Panel from './panel.js';
import Model from './model.js';


const useAuthentication = function () {
    const [isAuthenticated, setIsAuthenticated] = React.useState(null);
    React.useEffect(function () {
        const token = Store.getValue();
        if (token !== null) {
            Model.decode(token['jwt']).then(function () {
                setIsAuthenticated(true);
            }).catch(function () {
                setIsAuthenticated(false);
            });
        }
        else
            setIsAuthenticated(false);
    }, []);

    return [isAuthenticated, setIsAuthenticated, isAuthenticated ? Store.getValue() : null];
};


const Authify = function (Main, logoutButtonEl) {
    return function (props) {
        const [isAuthenticated, setIsAuthenticated, token] = useAuthentication();

        let mainComponent;
        if (isAuthenticated === null)
            mainComponent = <div className="spinner-grow" role="status"><span className="sr-only">Loading...</span></div>;
        if (isAuthenticated === false)
            mainComponent = <Panel setIsAuthenticated={setIsAuthenticated} />;
        if (isAuthenticated === true)
            mainComponent = <Main {...props} token={token} />;

        return <React.Fragment><LogoutButton el={logoutButtonEl} token={token} />{mainComponent}</React.Fragment>;
    };
};


const LogoutButton = function ({ token, el }) {
    let res = null;
    if (token !== null) {
        const onClick = function (e) {
            e.preventDefault();
            Store.removeValue();
            window.location = window.location.href.split('?')[0];
        };
        /*<form className="form-inline">
            <span className="navbar-text" style={{marginRight: '10px'}}>{token['name']} <sub>{token['role']}</sub></span>
            <button className="btn btn-outline-danger my-2 my-sm-0" onClick={onClick}>Logout</button>
    </form>*/

        res = (
            <form className="form-inline">
                <span className="navbar-text" style={{ marginRight: '10px' }}>{token['name']} <sub>{token['role']}</sub></span>
                <button className="btn btn-outline-danger my-2 my-sm-0" onClick={onClick}>Logout</button>
            </form>
        );
    }
    return ReactDOM.createPortal(res, el);
};


export default { Authify };
