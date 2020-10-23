import React from 'react';

class Label extends React.Component {
    constructor(props) {
	super(props);
	this.content = props.children;
    }
    render() {
	return this.content;
    }
}

export default Label;
