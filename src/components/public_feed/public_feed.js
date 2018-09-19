import React from 'react';
import FeedItem from '../feed_item/feed_item.js';
import { PAGE_SIZE } from '../../settings.js';

import './public_feed.css';

const LOREM = ` Lorem ipsum dolor sit amet, consectetur a

Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
vitae facilisis vitae, volutpat eget magna. Sed a nulla sit amet massa fermentum tempor. 
Morbi lacinia vestibulum quam eget venenatis. Nullam id fermentum arcu. Nullam velit velit, 
aliquam id diam vitae, ultricies congue purus. Morbi faucibus sapien tortor, id sagittis diam rutrum eget. 
Integer orci orci, aliquet vel diam interdum, hendrerit ornare est. `;

class PublicFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed_items: [],
            max_items: undefined,
        };

        this.load_next = this.load_next.bind(this);
        this.fetch_next = this.fetch_next.bind(this);
    }

    fetch_next(offset, limit) {
        limit -= offset;
        const url = "/api/posts/public/?format=json&offset=" + offset + "&limit=" + limit;

        fetch(url, {method: "GET"}).then(response => {
           if (response.ok) {
               response.json().then(json => {
                   this.load_next(json.results);
                   if (this.state.max_items === undefined) {
                       this.setState(state => ({
                           feed_items: state.feed_items,
                           max_items: json.count,
                       }));
                   }
               });
           }
        });
    }

    load_next(items) {
        const item_nodes = items.map((item, i) =>
            <FeedItem
                title={item.title}
                key={this.state.feed_items.length + i}
                text={item.text}
                username={item.author}
                id={item.id} />);

        this.setState(state => ({
            feed_items: state.feed_items.concat(item_nodes),
        }));
    }

    componentDidMount() {
        this.fetch_next(0, PAGE_SIZE);
    }

    componentDidUpdate() {
        const max_items = this.state.max_items || 999;

        if (this.state.feed_items.length < Math.min(this.props.limit, max_items)) {
            this.fetch_next(this.state.feed_items.length, this.props.limit);
        }
    }

    render() {
        return (
            <div className="public_feed">
                { this.state.feed_items }
            </div>
        );
    }
}

export default PublicFeed;
