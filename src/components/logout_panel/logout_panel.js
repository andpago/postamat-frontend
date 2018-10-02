import React from 'react';
import './logout_panel.css';
import {getCookie, setCookie} from "../../misc/cookies";
import FunctionalButton from "../functional_button/functional_button";
import { USER_DETAILS_URL } from "../../settings.js";

class LogoutPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: null,
		}
	}

	componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", USER_DETAILS_URL);
        xhr.setRequestHeader("Content-type", "application/json");

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return;

            const resp = JSON.parse(xhr.response);
            console.log(xhr.response);
            if (xhr.status !== 200 || !resp.hasOwnProperty("user")) {
                console.log("failed to obtain user data");
            } else {
            	console.log('obtained user details');
            	this.setState(state => ({
					user: resp.user,
				}));
            }
        };

        xhr.send(JSON.stringify({token: getCookie("token")}));
	}

	render() {
		const userData = (this.state.user === null) ? (<div className="user_data">
				<span>failed to log in</span>
			</div>
		) : (<div className="user_data">
				<span>@{ this.state.user.username }</span>
				<div className="avatar_micro">
                    <img className="avatar_micro" src={ this.state.user.avatar } />
				</div>
		</div>);

		return (
			<div className="logout_panel">
				{ userData }
                <FunctionalButton action={ () => {setCookie("token", "");document.location = document.location; } } text="Log out" />
			</div>

		);
	}
}

export default LogoutPanel;

