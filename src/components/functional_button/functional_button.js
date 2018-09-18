import React from 'react';

import './functional_button.css';

class FunctionalButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<button className="functional_button" onClick={ this.props.action }> { this.props.text } </button>);
    }
}

export default FunctionalButton;
