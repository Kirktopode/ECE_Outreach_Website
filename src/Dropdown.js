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
			    this.image,
			    this.props,
			    null)}
		    </div>
		   );
	}
    }
}

export default Dropdown;
