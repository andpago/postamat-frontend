import React from "react";
import { render } from "react-dom";
import Header from "./components/header/header.js";
import PublicFeed from "./components/public_feed/public_feed.js";
import FunctionalButton from "./components/functional_button/functional_button.js";

import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed_limit: 5,
        };
        this.load_more = this.load_more.bind(this);
    }

    load_more() {
        this.setState(state => ({feed_limit: state.feed_limit + 5}));
    }

    render(){
      return (
        <div>
          <Header />
          <PublicFeed limit={ this.state.feed_limit } />
          <FunctionalButton action={ this.load_more } text={ `load more` } />
        </div>
      )
    }
}

render(<App />, document.getElementById("app"));
