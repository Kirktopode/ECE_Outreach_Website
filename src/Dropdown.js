import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
	super(props);
	this.image = React.Children.toArray(props.children)[0];
    }
    render() {
	if(this.props.mode === "hover") {
	    return React.cloneElement(
		this.image,
		this.props,
		null);
	} else if(this.props.mode === "expand") {
	    return React.cloneElement(
		this.image,
		this.props,
		null);
	}
    }
}

export default Dropdown;
