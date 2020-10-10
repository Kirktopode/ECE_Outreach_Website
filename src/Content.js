import React from 'react';

class Content extends React.Component {
    constructor(props) {
	super(props);
	if(props.children)
	    this.content = props.children;
	else
	    this.content = (<div dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}>
			    </div>);
    }
    render() {
	return this.content;
    }
}

export default Content;
