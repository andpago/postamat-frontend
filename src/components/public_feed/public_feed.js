import React from 'react';
import FeedItem from '../feed_item/feed_item.js';

import './public_feed.css';

const LOREM = ` Lorem ipsum dolor sit amet, consectetur a

Lorem ipsum dolor sit amet, consectetur adipiscing elit.  vitae facilisis vitae, volutpat eget magna. Sed a nulla sit amet massa fermentum tempor. Morbi lacinia vestibulum quam eget venenatis. Nullam id fermentum arcu. Nullam velit velit, aliquam id diam vitae, ultricies congue purus. Morbi faucibus sapien tortor, id sagittis diam rutrum eget. Integer orci orci, aliquet vel diam interdum, hendrerit ornare est. `;

class PublicFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed_items: [],
        };

        this.load_next = this.load_next.bind(this);
        console.log("constructor");
        console.log(this);
    }

    load_next() {
        let items = [];

        for (let i = this.state.feed_items.length; i < this.props.limit; i++) {
            items.push(<FeedItem
                title="Hello World"
                text={ LOREM }
                username="admin"
                key={ i } />);
        }

        this.setState(state => ({
            feed_items: state.feed_items.concat(items),
        }));
    }

    componentDidMount() {
        this.load_next();
    }

    componentDidUpdate() {
        if (this.state.feed_items.length < this.props.limit) {
            this.load_next();
        }
    }

    render() {
        console.log("render");

        return (
            <div className="public_feed">
                { this.state.feed_items }
            </div>
        );
    }
}

export default PublicFeed;
