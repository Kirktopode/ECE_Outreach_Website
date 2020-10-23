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
		if(this.props.mode === "hover") {
			return React.cloneElement(
			this.dropdown,
			this.props,
			this.dropdown.props.children);
		} else if(this.props.mode === "expand") {
			let folded = this.props.folded === "true";
			return (<>
				<div className={"card_dropdown" + (folded ? " folded" : "")}>
					<div className={"card_title_wrapper" + (folded ? " folded" : "")}>
					<div className={"card_title_mover" + (folded ? " folded" : "")}>
						<p>
						{this.label}
						</p>
					</div>
					</div>
					{React.cloneElement(
					this.dropdown,
					this.props,
					this.dropdown.props.children)}
				</div>
				<div className={"card_dropdown" + (folded ? " folded" : "")}
					 style={{"zIndex": "2"}}>
					<div className={"card_title_wrapper" + (folded ? " folded" : "")}>
					<div className={"card_title_mover" + (folded ? " folded" : "")} style={{visibility: "hidden"}}>
						<p>
						{this.label /* phantom for alignment */}
						</p>
					</div>
					<div className={"card_dropdown_mover" + (folded ? " folded" : "")}>
						<div className={"card_dropdown_content_wrapper" + (folded ? " folded" : "")}>
						<div className={"card_dropdown_content" + (folded ? " folded" : "")}>
							{this.content}
						</div>
						</div>
					</div>
					</div>
				</div>
				</>
			   );
		}
    }
}

export default Dropdown;
