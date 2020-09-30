import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
	super(props);
	this.dropdown = React.Children.toArray(this.props.children)
	    .filter((child) => child.type.name === "Icon")[0];
	this.label = React.Children.toArray(this.props.children)
	    .filter((child) => child.type.name === "Label")[0];
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
			<div className={"card_title_wrapper" + (folded ? " folded" : "")}>
			    <div className={"card_title_mover" + (folded ? " folded" : "")}>
				<p>
				    {this.label}
				</p>
			    </div>
			    <div className={"card_dropdown_content" + (folded ? " folded" : "")}>
				Lorem ipsum is some sample text that is just here for
				to check that padding is okay
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
