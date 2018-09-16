import React from 'react';

const SmartParagraph = props => {
    const paragraphs = props.text.split("\n").map((p, i) => <p key={ i }>{ p }</p>);
    return <div className="smart_paragraph"> { paragraphs } </div>;
}

export default SmartParagraph;
