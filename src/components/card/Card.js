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
    static degmin = -60; // how far the hover elements move out of the way
    static degmax = -210;
    constructor(props) {
	super(props);
	this.state = {
	    hovering: false,
	    hover_override: false,
	    open: null,
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
	    let angle = this.calc_hover_angle(i);
	    this.hover_elements[i] = React.cloneElement(this.dropdown_elements[i], {
		style: {"--angle": angle + "deg"},
		onClick:() => this.setState({open: i}),
		}, this.dropdown_elements[i].props.children);
	}
    }

    calc_hover_angle(index) {
	return Card.degmin + (Card.degmax-Card.degmin)/(this.dropdown_elements.length-1)*index;
    }
    
    render() {
	if(!this.dropdown_elements)
	    return null;
	let hover_elements = [];
	for(let i=0; i<this.hover_elements.length; ++i) {
	    hover_elements[i] = React.cloneElement(this.hover_elements[i], {
		style: {"--angle":
			this.calc_hover_angle(((this.dropdown_elements.length-i-1)
					       +this.state.open < this.dropdown_elements.length)
					      ? (
						  (this.dropdown_elements.length-i-1)
						      +this.state.open
					      ) : (
						  -1-i+this.state.open
					      )) + "deg"},
		className: ((this.state.open !== i ? "breathing " : "")
			    + (this.state.open !== null ? "open" : "")),
	    }, this.hover_elements[i].props.children);
	}
	let center = React.cloneElement(this.center, {
	    className: ("card_center " + (this.state.hovering ? "" : "breathing"))
	}, this.center.props.children);
	console.log(hover_elements);
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
		    return (<div className="card_wrapper"
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
				<div className="card">
				    {center}
				    {hover_elements}
				</div>
				<div className="card_title">
				    {this.title}
				</div>
				<div className="card_description">
				    {this.description}
				    <a href={process.env.PUBLIC_URL + "/projects/" + this.props.src.split('/').pop()}
				       className="card_reader_link breathing subtle">
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
