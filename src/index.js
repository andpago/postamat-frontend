import React from "react";
import { render } from "react-dom";
import Header from "./components/header/header.js";
import PublicFeed from "./components/public_feed/public_feed.js";
import FunctionalButton from "./components/functional_button/functional_button.js";
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import {PAGE_SIZE} from "./settings";
import {Route, Switch} from "react-router";
import Post from './components/post/post.js';
import LoginPage from './components/login_page/login_page.js';
import SignupPage from './components/signup_page/signup_page.js';
import { getCookie } from "./misc/cookies";
import { update } from "./misc/objects";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed_limit: PAGE_SIZE,
            token: null,
            user: {},
        };
        this.load_more = this.load_more.bind(this);
        this.init = this.init.bind(this);
    }

    init() {
        const token = getCookie("token");

        if (token !== undefined) {
            this.setState(state => update(state, {token}));
        }
    }

    load_more() {
        this.setState(state => ({feed_limit: state.feed_limit + PAGE_SIZE}));
    }

    componentDidMount() {
        this.init();
    }

    render(){
        return (
            <BrowserRouter>
                <div>
                    <Header user={ this.state.token ? this.state.user : null } />
                    <div className="main_wrapper">
                        <Switch>
                            <Route path={`/`} exact>
                                <div className={"public_feed_page"}>
                                    <PublicFeed limit={ this.state.feed_limit } />
                                    <FunctionalButton action={ this.load_more } text={ `load more` } />
                                </div>
                            </Route>
                            <Route path={`/post/:id`} component={Post} />
                            <Route path={`/login/`} component={LoginPage} />
                            <Route path={`/signup/`} component={SignupPage} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

render(<App />, document.getElementById("app"));
