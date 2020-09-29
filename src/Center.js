import React from 'react';

class Center extends React.Component {
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

export default Center;
