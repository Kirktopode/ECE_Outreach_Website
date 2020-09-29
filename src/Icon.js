import React from 'react';

class Icon extends React.Component {
    render() {
	return React.cloneElement(
	    (<img alt=""/>),
	    this.props,
	    null);
    }
}

export default Icon;
