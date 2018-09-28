import React from 'react';
import './login_panel.css';
import { LOGIN_URL, SIGNUP_URL } from '../../settings.js';

class LoginPanel extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="login_panel">
                <a href={ LOGIN_URL }>
				    <button className="login_panel_btn">Login</button>
                </a>
                <a href={ SIGNUP_URL }>
				    <button className="login_panel_btn">Sign up</button>
                </a>
			</div>
		);
	}
}

export default LoginPanel;

