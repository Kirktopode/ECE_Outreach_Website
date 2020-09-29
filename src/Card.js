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
	this.intake_children = React.Children.toArray(this.props.children);
	
	this.center = React.cloneElement(this.intake_children.shift(), {
	    onMouseEnter:() => {
		if(!this.state.hovering) {
		    this.setState({open: null});
		    this.setState({hovering: true});
		}
	    }
	}, null);
	
	this.hover_elements = [];
	for(let i=0; i<this.intake_children.length; ++i) {
	    let angle = i/this.intake_children.length*360;
	    let angle_open;
	    if(this.intake_children.length%2===1) {
		if(i<this.intake_children.length/2) {
		    angle_open = (i+1+Math.floor(this.intake_children.length/2))/(this.intake_children.length+1)*2*degmax-degmax;
		} else {
		    angle_open = (i-Math.floor(this.intake_children.length/2))/(this.intake_children.length+1)*2*degmax-degmax+360;
		}
	    } else {
		if(i<=this.intake_children.length/2) {
		    angle_open = (i+this.intake_children.length/2)/(this.intake_children.length+1)*2*degmax-degmax;
		} else {
		    angle_open = (i+this.intake_children.length/2-this.intake_children.length)/(this.intake_children.length+1)*2*degmax-degmax+360;
		}
	    }
	    this.hover_elements[i] = React.cloneElement(this.intake_children[i], {
		style: {"--angle": (angle-90) + "deg",
			"--angle-open": (angle_open-90) + "deg"},
		onClick:() => this.setState({open: i})}, null);
	}
    }
    
    render() {
	let dropdown_elements = [];
	for(let i=0; i<this.intake_children.length; ++i) {
	    dropdown_elements[i] = (
		<div className={"card_dropdown" + (this.state.open === i && this.state.hovering ? "" : " folded")}>
		    {this.intake_children[i]}
		    <div className="card_title_wrapper">
			<div className={"card_title_mover" + (this.state.open === i && this.state.hovering ? "" : " folded")}>
			    <p>
				History of the Project
			    </p>
			</div>
		    </div>
		</div>
	    );
	}
	
	let hover_elements = [];
	for(let i=0; i<this.hover_elements.length; ++i) {
	    hover_elements[i] = React.cloneElement(this.hover_elements[i], {
		className: ("hover " + (this.state.hovering ? " hovering " : "")
			    + (this.state.open !== i ? " breathing" : "")
			    + (this.state.open !== null ? " open" : ""))
	    }, null);
	}
	let center = React.cloneElement(this.center, {
	    className: ("card_center " + (this.state.hovering ? "" : "breathing"))
	}, null);
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
