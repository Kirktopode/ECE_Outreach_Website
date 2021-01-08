import React from 'react';

class CardScroll extends React.Component {
    constructor(props) {
	super(props);
	this.children = React.Children.toArray(this.props.children);
	this.content = this.children
	    .map((child, i) => (
		<li className="card_scroll_entry" key={i}>
		    {new child.type(child.props).title}
		</li>
	    ));
    }
    
    render() {
	return (
	    <div className="card_scroll_wrapper">
		<div>
		    <ul className="card_scroll_designator">
			{this.content}
		    </ul>
		</div>
		<div className="card_scroll_browser">
		    {this.children}
		</div>
	    </div>
	);
    }
}

export default CardScroll;
