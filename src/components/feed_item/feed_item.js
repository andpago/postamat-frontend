import React from 'react';
import SmartParagraph from '../smart_paragraph/smart_paragraph.js';

import './feed_item.css';
import {Link} from "react-router-dom";

export default props => (
    <div className="feed_item">
        <div className="top_section">
            <div className="top_section_left">
                <Link to={'/post/' + props.id}>
                    <h2>{ props.title }</h2>
                </Link>
            </div>
            <div className="top_section_right">
                <img src={ props.author.avatar } className="feed_item_avatar"/>
                <span>@{ props.author.username }</span>
            </div>
        </div>
        <div className="bottom-section">
            <SmartParagraph text={ props.text } />
        </div>
    </div>
);
