import React from 'react';
import './signup_page.css';
import {REGISTRATION_URL} from "../../settings";

class SignupPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
            <div className="signup_page">
                <h2>Sign up</h2>
                <form action={ REGISTRATION_URL } className="medium_form" method="POST" encType="multipart/form-data">
                    <div>
                        <label htmlFor="username">username</label>
                        <input id="username" name="username" type="text" />
                    </div>

                    <div>
                        <label htmlFor="email">email</label>
                        <input id="email" name="email" type="text" />
                    </div>

                    <div>
                        <label htmlFor="password">password</label>
                        <input id="password1" name="password1" type="password" />
                    </div>

                    <div>
                        <label htmlFor="password">repeat password</label>
                        <input id="password2" name="password2" type="password" />
                    </div>

					<div>
                        <label htmlFor="avatar">avatar</label>
                        <input id="avatar" name="avatar" type="file" />
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

