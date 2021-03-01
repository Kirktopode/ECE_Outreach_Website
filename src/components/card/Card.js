import React from 'react';

import Icon from './Icon.js';
import Label from './Label.js';
import Content from './Content.js';
import Dropdown from './Dropdown.js';
import CardScroll from './CardScroll.js';

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
    static degmin = -50; // how far the hover elements move out of the way
    static degmax = -220;
    static actual_baseheight_em = 33;
    constructor(props) {
	super(props);
	this.ref = React.createRef();
	this.state = {
	    open: null,
	    opening_wait: false,
	    id: this.props.id,
	    clientHeight: [],
	    wrapperHeight: 0,
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
	this.center = React.cloneElement(this.center, {
	    className: "card_center"
	}, this.center.props.children);

	this.hover_elements = [];
	for(let i=0; i<this.dropdown_elements.length; ++i) {
	    let angle = this.calc_hover_angle(i);
	    this.hover_elements[i] = React.cloneElement(this.dropdown_elements[i], {
		style: {"--angle": angle + "deg"},
		onClick: () => {
		    const element = this.ref.current;
		    
		    window.scrollTo({
			top: element.getBoundingClientRect().top
			    - document.body.getBoundingClientRect().top
			    - CardScroll.topbar_offset,
			behavior: 'smooth'
		    });
		    
		    this.setState({opening_wait: true});
		    this.setState({open: i});
		},
	    }, this.dropdown_elements[i].props.children);
	}
    }

    calc_hover_angle(index) {
	return Card.degmin + (Card.degmax-Card.degmin)/(this.dropdown_elements.length-1)*index;
    }

    componentDidMount() {
	this.setState({wrapperHeight: this.ref.current.clientHeight});
	this.setState({clientHeight:
		       [...this.ref.current.querySelectorAll('.card_dropdown_content')]
			.map(e => e.clientHeight)});
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
					      )) + "deg",
			"--offset-height": this.state.wrapperHeight + "px"},
		className: ((this.state.open !== i ? "breathing " : "")
			    + (this.state.open === i ? "open" : "")),
	    }, this.hover_elements[i].props.children);
	}
	return (
	    <div id={this.state.id}>
		<TrackVisibility>
		    {({ isVisible }) => {
			if(!isVisible && this.state.open !== null && this.state.opening_wait === false) {
			    if(this.ref.current.getBoundingClientRect().top - CardScroll.topbar_offset < 0 ) {
				// currently below the element about to retract, correct so scrolling isn't thrown off
				let scroll_offset = this.state.clientHeight[this.state.open]+10
				    +this.state.wrapperHeight-230;
				setTimeout(() =>
				    window.scrollBy({
					top: -scroll_offset,
					left: 0,
					behavior : "smooth"
				    }), 900);
			    }
			    
			    this.setState({open: null});
			}
			if(isVisible && this.state.opening_wait === true) {
			    setTimeout(() =>
				this.setState({opening_wait: false}),
				100);
			}
			return (<div ref={this.ref}
				     className={"card_wrapper" +
						(this.state.open !== null ? " open" : "")}
				     style={{"--base-height": ("calc(" + 
							       Card.actual_baseheight_em + "em + " +
							       (this.state.open !== null ?
								this.state.clientHeight[this.state.open]
								+ 10 // a little extra padding to make things look nice
								: 0)
							       + "px)"
							      ),
					     "--offset-height": this.state.wrapperHeight + "px",
					    }}>
				    <div className="card">
					{this.center}
					{hover_elements}
				    </div>
				    <div className="card_title">
					{this.title}
				    </div>
				    <div className="card_description">
					{this.description}
					<br/>
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
