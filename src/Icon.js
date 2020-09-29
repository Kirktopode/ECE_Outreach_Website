import React from 'react';

class Icon extends React.Component {
    constructor(props) {
	super(props);
	this.image = React.Children.toArray(props.children)[0];
    }
    render() {
	return React.cloneElement(
	    this.image,
	    this.props,
	    null);
    }
}

export default Icon;
