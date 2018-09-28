import React from 'react';
import './signup_page.css';

class SignupPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
            <div className="signup_page">
                <h2>Sign up</h2>
                <form action="/api/signup" className="medium_form" method="POST">
                    <div>
                        <label htmlFor="username">username</label>
                        <input id="username" type="text" />
                    </div>

                    <div>
                        <label htmlFor="password">password</label>
                        <input id="password" type="password" />
                    </div>


					<div>
                        <label htmlFor="avatar">avatar</label>
                        <input id="avatar" type="file" />
                        <button type="button" onClick={ () => {document.getElementById("avatar").click();} } className="fake_loader" >
                            load avatar
                        </button>
                    </div>

                    <input type="submit" value="Sign up" />
                </form>
            </div>
		);
	}
}

export default SignupPage;

