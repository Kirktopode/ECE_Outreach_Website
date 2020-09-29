import React from 'react';

class Card extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    hovering: false,
	    open: null,
	};
	// Set up
	const degmax = 150;
	this.dropdown_elements = React.Children.toArray(this.props.children)
	    .filter((child) => child.type.name === "Dropdown");

	let center = React.Children.toArray(this.props.children)
	    .filter((child) => child.type.name === "Icon")[0];
	this.center = React.cloneElement(center, {
	    onMouseEnter:() => {
		if(!this.state.hovering) {
		    this.setState({open: null});
		    this.setState({hovering: true});
		}
	    }
	}, React.Children.toArray(center.props.children));

	this.hover_elements = [];
	for(let i=0; i<this.dropdown_elements.length; ++i) {
	    let angle = i/this.dropdown_elements.length*360;
	    let angle_open;
	    if(this.dropdown_elements.length%2===1) {
		if(i<this.dropdown_elements.length/2) {
		    angle_open = (i+1+Math.floor(this.dropdown_elements.length/2))/(this.dropdown_elements.length+1)*2*degmax-degmax;
		} else {
		    angle_open = (i-Math.floor(this.dropdown_elements.length/2))/(this.dropdown_elements.length+1)*2*degmax-degmax+360;
		}
	    } else {
		if(i<=this.dropdown_elements.length/2) {
		    angle_open = (i+this.dropdown_elements.length/2)/(this.dropdown_elements.length+1)*2*degmax-degmax;
		} else {
		    angle_open = (i+this.dropdown_elements.length/2-this.dropdown_elements.length)/(this.dropdown_elements.length+1)*2*degmax-degmax+360;
		}
	    }
	    this.hover_elements[i] = React.cloneElement(this.dropdown_elements[i], {
		style: {"--angle": (angle-90) + "deg",
			"--angle-open": (angle_open-90) + "deg"},
		onClick:() => this.setState({open: i}),
		mode: "hover"}, this.dropdown_elements[i].props.children);
	}
    }
    
    render() {
	let dropdown_elements = [];
	for(let i=0; i<this.dropdown_elements.length; ++i) {
	    dropdown_elements[i] = React.cloneElement(this.dropdown_elements[i], {
		mode: "expand",
		folded: (this.state.open !== i || !this.state.hovering).toString(),
	    }, this.dropdown_elements[i].props.children);
	}
	
	let hover_elements = [];
	for(let i=0; i<this.hover_elements.length; ++i) {
	    hover_elements[i] = React.cloneElement(this.hover_elements[i], {
		className: ("hover " + (this.state.hovering ? " hovering " : "")
			    + (this.state.open !== i ? " breathing" : "")
			    + (this.state.open !== null ? " open" : "")),
	    }, this.hover_elements[i].props.children);
	}
	let center = React.cloneElement(this.center, {
	    className: ("card_center " + (this.state.hovering ? "" : "breathing"))
	}, this.center.props.children);
	return (<div className="card"
		     onMouseLeave={() => {this.setState({hovering: false});
					  setTimeout(() => {
					      if(!this.state.hovering)
						  this.setState({open: null});
					  }, 500)}}>
		    {center}
		    {hover_elements}
		    {dropdown_elements}
		</div>);
    }
}

export default Card;
