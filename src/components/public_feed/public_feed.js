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
    }

    load_next() {
        this.setState(state => ({
            feed_items: state.feed_items.concat([<FeedItem
                title="Hello World"
                text={ LOREM }
                username="admin"
                key={ state.feed_items.length - 1 } />]),
        }));
    }

    componentDidMount() {
        this.load_next();
        this.load_next();
        this.load_next();
    }

    render() {
        return (
            <div className="public_feed">
                { this.state.feed_items }
            </div>
        );
    }
};

export default PublicFeed;
