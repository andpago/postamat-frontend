import React from 'react';

import './header.css';
import LoginPanel from '../login_panel/login_panel.js';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
                <div className="header_left">
                    <a href={'/'} className="header_link">
                        <h1 className="header_brand">Postamat</h1>
                    </a>
                </div>
                <div className="header_right">
                    <LoginPanel />
                </div>
			</div>
		);
	}
}

export default Header;
