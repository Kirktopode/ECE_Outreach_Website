import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
	super(props);
	this.dropdown = React.Children.toArray(this.props.children)
	    .filter((child) => child.type.name === "Icon")[0];
    }
    render() {
	if(this.props.mode === "hover") {
	    return React.cloneElement(
		this.dropdown,
		this.props,
		this.dropdown.props.children);
	} else if(this.props.mode === "expand") {
	    let folded = this.props.folded === "true";
	    return (<div className={"card_dropdown" + (folded ? " folded" : "")}>
			<div className="card_title_wrapper">
			    <div className={"card_title_mover" + (folded ? " folded" : "")}>
				<p>
				    History of the Project
				</p>
			    </div>
			</div>
			{React.cloneElement(
			    this.dropdown,
			    this.props,
			    this.dropdown.props.children)}
		    </div>
		   );
	}
    }
}

export default Dropdown;
