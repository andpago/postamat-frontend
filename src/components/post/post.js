import React from 'react';

import './post.css';
import SmartParagraph from "../smart_paragraph/smart_paragraph";

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "loading",
            text: "",
        };

        this.load_post = this.load_post.bind(this);
    }

    load_post() {
        fetch(`/api/posts/public/` + this.props.match.params.id + '?format=json').then(resp => resp.json().then(json => {
            this.setState(state => json);
        }));
    }

    componentDidMount() {
        this.load_post();
    }
    
    render() {
        return (
            <div className="post">
                <h1 className="post_title"> { this.state.title } </h1>
                <SmartParagraph text={this.state.text}></SmartParagraph>
            </div>
        );
    }
}

export default Post;
