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

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed_limit: PAGE_SIZE,
        };
        this.load_more = this.load_more.bind(this);
    }

    load_more() {
        this.setState(state => ({feed_limit: state.feed_limit + PAGE_SIZE}));
    }

    render(){
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div className="main_wrapper">
                        <Switch>
                            <Route path={`/`} exact>
                                <div className={"public_feed_page"}>
                                    <PublicFeed limit={ this.state.feed_limit } />
                                    <FunctionalButton action={ this.load_more } text={ `load more` } />
                                </div>
                            </Route>
                            <Route path={`/post/:id`} component={Post} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

render(<App />, document.getElementById("app"));
