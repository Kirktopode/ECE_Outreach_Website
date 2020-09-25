import React from 'react';
import './App.css';

class Card extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    hovering: false,
	    open: false
	};
	// Set up
	const degmax = 150;
	let arr = React.Children.toArray(this.props.children);
	this.elements = [];
	for(let i=0; i<arr.length; ++i) {
	    let angle = i/arr.length*360;
	    let angle_open;
	    if(arr.length%2===1) {
		if(i<arr.length/2) {
		    angle_open = (i+1+Math.floor(arr.length/2))/(arr.length+1)*2*degmax-degmax;
		} else {
		    angle_open = (i-Math.floor(arr.length/2))/(arr.length+1)*2*degmax-degmax+360;
		}
	    } else {
		if(i<=arr.length/2) {
		    angle_open = (i+arr.length/2)/(arr.length+1)*2*degmax-degmax;
		} else {
		    angle_open = (i+arr.length/2-arr.length)/(arr.length+1)*2*degmax-degmax+360;
		}
	    }
	    this.elements[i] = React.cloneElement(arr[i], {
		style: {"--angle": (angle-90) + "deg",
			"--angle-open": (angle_open-90) + "deg"},
		onClick:() => this.setState({open: true})}, null);
	}
    }
    
    render() {
	let elements = [];
	for(let i=0; i<this.elements.length; ++i) {
	    elements[i] = React.cloneElement(this.elements[i], {
		className: ("hover " + (this.state.hovering ? "breathing hovering " : "")
			    + (this.state.open ? "open" : ""))
	    }, null);
	}
	return (<div className="card"
		     onMouseLeave={() => {this.setState({hovering: false});
					  this.setState({open: false})}}>
		    <img alt="Something interesting"
			 className={`card_center ${this.state.hovering ? "" : "breathing"}`}
			 onMouseEnter={() => this.setState({hovering: true})}
			 src={require('./images/center.jpg')}
		    />
		    {elements}
		</div>);
    }
}

function App() {
    return (
	<div className="App">
	    <header className="App-header">
		<Card>
		    <img alt="Hover"
			 src={require('./images/lightbulb.png')}
		    />
		    <img alt="Hover"
			 src={require('./images/math.png')}
		    />
		    <img alt="Hover"
			 src={require('./images/globe.png')}
		    />
		    <img alt="Hover"
			 src={require('./images/newspaper.png')}
		    />
		    <img alt="Hover"
			 src={require('./images/classroom.png')}
		    />
		</Card>
	    </header>
	</div>
    );
}

export default App;
