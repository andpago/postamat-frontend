import React from 'react';

import './header.css';
import LoginPanel from '../login_panel/login_panel.js';
import FunctionalButton from "../functional_button/functional_button";
import {setCookie} from "../../misc/cookies";

class Header extends React.Component {
	render() {
	    let panel = <FunctionalButton action={ () => {setCookie("token", "");document.location = document.location; } } text="Log out" />;

	    console.log(this.props.user);

	    if (!this.props.user) {
	        panel = <LoginPanel />;
        }

		return (
			<div className="header">
                <div className="header_left">
                    <a href={'/'} className="header_link">
                        <h1 className="header_brand">Postamat</h1>
                    </a>
                </div>
                <div className="header_right">
                    { panel }
                </div>
			</div>
		);
	}
}

export default Header;
