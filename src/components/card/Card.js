import React from 'react';

import Icon from './Icon.js';
import Label from './Label.js';
import Content from './Content.js';
import Dropdown from './Dropdown.js';

import TrackVisibility from 'react-on-screen';

const baseURL = process.env.PUBLIC_URL + "/cards/";

const TOML = require('toml/index');

const iconBasePath = process.env.PUBLIC_URL + "/card_floats"

function lookupIconName(name) {
    return iconBasePath + "/" + name + ".png"
}

function syncGet(url) {
    var response = {}; // Fuck javascript
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.onload = function(D) { return function (e) {
	if (xhr.readyState === 4) {
	    if (xhr.status === 200) {
		response.text=xhr.responseText;
	    } else {
		console.error(xhr.statusText);
	    }
	}
    }}(response);
    xhr.onerror = function (e) {
	console.error(xhr.statusText);
    };
    xhr.send(null);

    return response.text;
}

function getTOML(title) {
    return TOML.parse(syncGet(baseURL + title + "/config.toml"));
}

function getCardItem(cardTitle, path) {
    return syncGet(baseURL + cardTitle + '/' + path);
}

class Card extends React.Component {
    static degmax = 150; // how far the hover elements move out of the way
    constructor(props) {
	super(props);
	if(!props.float)
	    throw new Error("Component Card lacking 'float' property. Help: <Card float=\"left\">");
	if(props.float !== "left" && props.float !== "right")
	    throw new Error("Component Card has invalid 'float' property. Help: <Card float=\"left\"> or <Card float=\"right\">");
	this.state = {
	    hovering: false,
	    hover_override: false,
	    open: null,
	    float_dir: props.float,
	};
	// first check if we need to load JSON or if inline is okay
	let children;
	if(this.props.src) {
	    let config = getTOML(this.props.src);
	    this.title = config.center.title;
	    this.description = config.center.description;
	    children = [
		(<Icon alt={config.center.alt}
		       src={`${baseURL+this.props.src+'/'+config.center.src}`}
		 />)];
	    config.dropdown.forEach(dropdown => {
		let content = syncGet(baseURL+this.props.src+'/'+dropdown.content);
		children.push(
		    (<Dropdown>
			 <Icon alt="" src={lookupIconName(dropdown.icon)} />
			 <Label>
			     {dropdown.label}
			 </Label>
			 <Content dangerouslySetInnerHTML={ { __html: content } }/>
		     </Dropdown>));
	    });
	} else {
	    children = this.props.children;
	}

	this.dropdown_elements = React.Children.toArray(children)
	    .filter((child) => {
		if (child.type.name.length > 2)
		    return child.type.name === "Dropdown"
		else
		    return child.props.children
	    });

	this.center = React.Children.toArray(children)
	    .filter((child) => {
		if (child.type.name.length > 2)
		    return child.type.name === "Icon"
		else
		    return !child.props.children
	    })[0];

	this.hover_elements = [];
	for(let i=0; i<this.dropdown_elements.length; ++i) {
	    let angle = i/this.dropdown_elements.length*360;
	    let angle_open;
	    if(this.dropdown_elements.length%2===1) {
		if(i<this.dropdown_elements.length/2) {
		    angle_open = (i+1+Math.floor(this.dropdown_elements.length/2))/(this.dropdown_elements.length+1)*2*Card.degmax-Card.degmax;
		} else {
		    angle_open = (i-Math.floor(this.dropdown_elements.length/2))/(this.dropdown_elements.length+1)*2*Card.degmax-Card.degmax+360;
		}
	    } else {
		if(i<=this.dropdown_elements.length/2) {
		    angle_open = (i+this.dropdown_elements.length/2)/(this.dropdown_elements.length+1)*2*Card.degmax-Card.degmax;
		} else {
		    angle_open = (i+this.dropdown_elements.length/2-this.dropdown_elements.length)/(this.dropdown_elements.length+1)*2*Card.degmax-Card.degmax+360;
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
	if(!this.dropdown_elements)
	    return null;
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
	return (
	    <div id={this.props.id}>
            <TrackVisibility>
		{({ isVisible }) => {
		    if(isVisible && this.state.hovering !== true) {
		    	this.setState({hovering: true});
		    }
		    if(!isVisible && this.state.hovering === true && !this.state.hover_override) {
			this.setState({hovering: false});
			this.setState({open: null});
		    }
		    return (<div
				 className={"card_wrapper " + (this.state.float_dir === "left" ? "cw_left" : "cw_right")}
				 onMouseLeave={() => {
				     if(this.state.hover_override) {
					 this.setState({hover_override: false});
				     }
				 }}
				 onMouseEnter={() => {
				     if(!this.state.hovering) {
					 this.setState({hovering: true});
				     }
				     if(!this.state.hover_override) {
					 this.setState({hover_override: true});
				     }
				 }}>
				<div className="card_align">
				    <div className="card">
					{center}
					{hover_elements}
					{dropdown_elements}
				    </div>
				</div>
				<div className="card_description_wrapper">
				    <div className="card_title">
					{this.title}
				    </div>
				    <div className="card_description">
					{this.description}
				    </div>
				    <a href={process.env.PUBLIC_URL + "/projects/" + this.props.src.split('/').pop()}
				       className={"card_reader_link breathing subtle" + (this.state.hovering ? " open" : "")}>
					Read Further
				    </a>
				</div>
			    </div>);
		}}
	    </TrackVisibility>
	    </div>);
    }
}

export default Card;
export {
    getTOML,
    getCardItem
};