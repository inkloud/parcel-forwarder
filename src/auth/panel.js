import React from 'react';
import AuthStore from './store.js';
import Model from './model.js';


class AuthForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {login: '', password: '', error: false};
        this.onChange = this.onChange.bind(this);
    }

    onChange (key) {
        return (function (e) {
            e.persist();
            this.setState(function (prevState) {
                const res = {login: prevState['login'], password: prevState['password']};
                res[key] = e.target.value;
                return res;
            });
        }).bind(this);
    }

    onClick (e) {
        e.preventDefault();
        Model.login(this.state['login'], this.state['password']).then((function (res) {
            AuthStore.setValue(res);
            if (this.props.setIsAuthenticated !== undefined)
                this.props.setIsAuthenticated(true);
        }).bind(this), (function () {
            this.setState({error: true});
        }).bind(this));
    }

    render () {
        const roles = AUTH.ROLES.map((function (role, i) {
            if (i === AUTH.ROLES.length -1)
                return <span key={role}><em>{role}</em></span>;
            return <span key={role}><em>{role}</em> o </span>;
        }).bind(this));

        return (
            <form>
                <div className="form-group">
                    <input autoFocus type="email" className="form-control form-control-lg" aria-describedby="emailHelp" placeholder="username" value={this.state['login']} onChange={this.onChange('login')} />
                    <small className="form-text text-muted">Devi autenticarti come {roles}</small>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="password" value={this.state['password']} onChange={this.onChange('password')} />
                </div>
                {this.state['error'] && <div className="alert alert-danger" role="alert">Errore di autenticazione</div>}
                <button type="submit" className="btn btn-lg btn-primary" onClick={this.onClick.bind(this)}>Entra</button>
            </form>
        );
    }
}


export default AuthForm;
