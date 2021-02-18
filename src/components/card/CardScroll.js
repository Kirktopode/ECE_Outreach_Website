import React from 'react';
import Icon from './Icon.js';

function lookupIconPath(name) {
    return process.env.PUBLIC_URL+'/card_floats/'+name + ".png";
}

class CardScroll extends React.Component {
    static topbar_offset = 100;
    constructor(props) {
		super(props);
		this.state = {
			highlight: 0
		};
		this.children = React.Children.toArray(this.props.children);
		this.content = this.children
			.map((child, i) => (
			<li className="card_scroll_entry" key={i}
				onClick={() => { // correctly scroll to element, accounting for topbar
				const element = document.getElementById("project_"+i);
				
				window.scrollTo({
					top: element.getBoundingClientRect().top
					- document.body.getBoundingClientRect().top
					- CardScroll.topbar_offset,
					behavior: 'smooth'
				});

				}}>
				{new child.type(child.props).title}
			</li>
			));
		window.onscroll = () => {
			this.setHighlight()
		};
	}
	
	componentDidMount = () => {
		this.setHighlight()
	}
	
	setHighlight = () => {
		let highlight = this.children.map((_, i) => {
			const element = document.getElementById("project_"+i);
			if (element) {
				let document_center =
					Math.max(document.documentElement.clientHeight || 0,
						window.innerHeight || 0)
					/2;
				let item_center =
					(element.getBoundingClientRect().top +
					element.getBoundingClientRect().bottom)
					/2;
				return [i, Math.abs(document_center-item_center)];
			}
			return [i, 0]
		}).sort((e, f) => e[1]-f[1])[0][0];

		if(highlight !== this.state.highlight) {
		    this.setState({highlight: highlight});
		}

	}

    render() {
	return (
	    <div className="card_scroll_wrapper">
		<div className="card_scroll_align">
		    <div className="card_scroll_stickwrap">
			<div className="card_scroll_title">
			    Our Projects
			</div>
			<ul className="card_scroll_designator">
			    {this.content.map
			     ((child, i) =>
				 React.cloneElement
				 (child, {className: child.props.className
					  + (this.state.highlight === i
					     ? " highlighted"
					     : "")})
			     )}
			</ul>
		    </div>
		    <div className="stickwrap_legend">
			<h3>
			    Legend
			</h3>
			<ul className="legend_ul">
			    <li style={{"--url": `url(${lookupIconPath("lightbulb")})`}}>
				Applicable Areas
			    </li>
			    <li style={{"--url": `url(${lookupIconPath("globe")})`}}>
				Applications
			    </li>
			    <li style={{"--url": `url(${lookupIconPath("classroom")})`}}>
				Lesson Points
			    </li>
			    <li style={{"--url": `url(${lookupIconPath("math")})`}}>
				Math
			    </li>
			    <li style={{"--url": `url(${lookupIconPath("newspaper")})`}}>
				Research
			    </li>
			</ul>
		    </div>
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
