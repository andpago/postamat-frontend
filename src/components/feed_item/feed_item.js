import React from 'react';
import SmartParagraph from '../smart_paragraph/smart_paragraph.js';

import './feed_item.css';

export default props => (
    <div className="feed_item">
        <div className="feed_item_top_section">
            <h1 className="feed_item_title">
                { props.title }
            </h1>
        </div>
        <div className="feed_item_bottom_section">
            <div className="feed_item_text_section">
                <SmartParagraph text={ props.text } />
            </div>
            <div className="feed_item_meta_section">
                { props.username }
            </div>
        </div>
    </div>
);
