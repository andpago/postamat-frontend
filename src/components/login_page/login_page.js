import React from 'react';
import './login_page.css';

import { setCookie, getCookie } from "../../misc/cookies";
import { update } from '../../misc/objects';

class LoginPage extends React.Component {
   	constructor(props) {
		super(props);

		this.state = {
            username: "",
            password: "",
        };

        this.onSubmit = this.onSubmit.bind(this);
		this.validate = this.validate.bind(this);
		this.typeUsername = this.typeUsername.bind(this);
		this.typePassword = this.typePassword.bind(this);
		this.send = this.send.bind(this);
	}

	send() {
        const data = {
            username: this.state.username,
            password: this.state.password,
        };

        const xhr = new XMLHttpRequest();
        xhr.open("POST", document.forms.login.action);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(data));

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;

            const resp = JSON.parse(xhr.response);
            if (xhr.status !== 200 || !resp.hasOwnProperty("token")) {
                console.log("failed to log in");
            } else {
                document.cookie = "token=" + resp.token;
                document.location = '/';
                console.log("logged in as " + this.state.username);
            }
        }
    }

	typeUsername(e) {
	    const username = e.target.value;

        this.setState(state => update(state, {username}));
    }

    typePassword(e) {
        const password = e.target.value;

        this.setState(state => update(state, {password}));
    }

	validate() {
	    const elementsOk = {
	        username: this.state.username !== "",
            password: this.state.password !== "",
        };

	    const ok = Object.values(elementsOk).reduce((ok, curr) => (ok && curr));
	    return {
	        ok,
            elementsOk,
        };
    }

    onSubmit(e) {
        e.preventDefault();
        const valid = this.validate();

        if (!valid.ok) {
            for (let key in valid.elementsOk) {
                if (!valid.elementsOk[key]) {
                    console.log("bad " + key);
                }
            }
        } else {
            this.send();
        }
    }

	render() {
		return (
			<div className="login_page">
                <h2>Login form</h2>
                <form action="/api/api-token-auth/" className="medium_form" method="POST" onSubmit={ this.onSubmit } name="login">
                    <div>
                        <label htmlFor="username">username</label>
                        <input id="username" type="text" value={ this.state.username } onChange={ this.typeUsername } />
                    </div>

                    <div>
                        <label htmlFor="password">password</label>
                        <input id="password" type="password" value={ this.state.password } onChange={ this.typePassword } />
                    </div>

                    <input type="submit" value="Log in" />
                </form>
			</div>
		);
	}
}

export default LoginPage;

