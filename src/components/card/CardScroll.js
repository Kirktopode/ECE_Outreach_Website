import React from 'react';

class CardScroll extends React.Component {
    constructor(props) {
	super(props);
	this.children = React.Children.toArray(this.props.children);
	this.content = this.children
	    .map((child, i) => (
		<li className="card_scroll_entry" key={i}
		    onClick={() => { // correctly scroll to element, accounting for topbar
			const element = document.getElementById("project_"+i);
			const offset = 100;
			
			window.scrollTo({
			    top: element.getBoundingClientRect().top
				- document.body.getBoundingClientRect().top
				- offset,
			    behavior: 'smooth'
			});

		    }}>
		    {new child.type(child.props).title}
		</li>
	    ));
    }
    
    render() {
	return (
	    <div className="card_scroll_wrapper">
		<div className="card_scroll_align">
		    <ul className="card_scroll_designator">
			{this.content}
		    </ul>
		</div>
		<div className="card_scroll_browser">
		    {this.children.map((child, i) =>
			React.cloneElement(child, {id: "project_"+i})
		    )}
		</div>
	    </div>
	);
    }
}

export default CardScroll;
