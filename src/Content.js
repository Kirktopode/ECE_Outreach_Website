import React from 'react';

class Content extends React.Component {
    constructor(props) {
	super(props);
	this.content = props.children;
    }
    render() {
	return this.content;
    }
}

export default Content;
