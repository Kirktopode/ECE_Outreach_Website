import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
	super(props);
	this.dropdown = React.Children.toArray(this.props.children)
	    .filter((child) => {
		if (child.type.name.length > 2)
		    return child.type.name === "Icon"
		else
		    return child.props.src
	    })[0];
	this.content = React.Children.toArray(this.props.children)
	    .filter((child) => {
		if (child.type.name.length > 2)
		    return child.type.name === "Content"
		else
		    return child.props.dangerouslySetInnerHTML
	    })[0];
	this.label = React.Children.toArray(this.props.children)
	    .filter((child) => {
		if (child.type.name.length > 2 )
		    return child.type.name === "Label"
		else
		    return child.props.children
	    })[0];
    }
    render() {
	let folded = this.props.folded === "true";
	return (<div className={"card_dropdown " + (folded ? "folded " : " ") + this.props.className.split(" ").filter(e => e!=="breathing").join(" ")}
		     style={this.props.style}
		     onClick={this.props.onClick}>
		    {React.cloneElement(this.dropdown,
					{className: this.props.className.split(" ").includes("breathing") ? "breathing" : ""},
					{})}
		    <div className={"card_title_wrapper" + (folded ? " folded" : "")}>
			<div className={"card_title_mover" + (folded ? " folded" : "")}>
			    <div className="card_title_align">
				{this.label}
			    </div>
			</div>
			{/*<div className={"card_dropdown_mover" + (folded ? " folded" : "")}>
			    <div className={"card_dropdown_content_wrapper" + (folded ? " folded" : "")}>
				<div className={"card_dropdown_content" + (folded ? " folded" : "")}>
				    {this.content}
				</div>
			    </div>
			    </div>*/}
		    </div>
		</div>
	       );
    }
}

export default Dropdown;
