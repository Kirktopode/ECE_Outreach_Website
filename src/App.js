import React from 'react';
import Card from './Card.js';
import Icon from './Icon.js';
import Label from './Label.js';
import Content from './Content.js';
import Dropdown from './Dropdown.js';
import './App.css';

function App() {
    return (
	<div className="App">
	    <header className="App-header">
		<Card>
		    <Icon alt="Spark"
			  src={require('./images/spark.png')}
		    />
		    <Dropdown>
			<Icon alt="Concepts"
			      src={require('./images/lightbulb.png')}
			/>
			<Label>
			    Key Concepts
			</Label>
			<Content>
			    Here is some text about the key concepts!
			</Content>
		    </Dropdown>
		    <Dropdown>
			<Icon alt="Math"
			      src={require('./images/math.png')}
			/>
			<Label>
			    Math Ideas
			</Label>
			<Content>
			    <img alt="Spark again"
				 src={require('./images/spark.png')}
				 style={{width: "50%", float: "right", "padding-left": "0.5em"}}
			    />
			    Here is some more text, and you can generate it
			    on the fly if you want and even place images here.
			    <br/>
			    <br/>
			    It is really close to a simple text area.
			    <br/>
			    <br/>
			    And here is how it handles long text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget aliquet risus. Duis aliquam sollicitudin ornare. Mauris vitae nisi augue. Nam ultricies elemen
			</Content>
		    </Dropdown>
		    <Dropdown>
			<Icon alt="History"
			      src={require('./images/globe.png')}
			/>
			<Label>
			    History of the Project
			</Label>
			<Content>
			    Here on out will be lorem ipsum because I'm unoriginal
			</Content>
		    </Dropdown>
		    <Dropdown>
			<Icon alt="News"
			      src={require('./images/newspaper.png')}
			/>
			<Label>
			    Applications in the News
			</Label>
			<Content>
			    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget aliquet risus. Duis aliquam sollicitudin ornare. Mauris vitae nisi augue. Nam ultricies elementum nibh a dapibus. Suspendisse potenti. Vivamus pharetra feugiat lectus eget efficitur. Maecenas vitae dictum urna. Donec sed turpis justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
			</Content>
		    </Dropdown>
		    <Dropdown>
			<Icon alt="Lessons"
			      src={require('./images/classroom.png')}
			/>
			<Label>
			    Takeaway Lessons
			</Label>
			<Content>
			    Suspendisse nisi dolor, fermentum quis arcu eu, vehicula maximus tellus. Maecenas pellentesque ut odio et elementum. Phasellus bibendum turpis ac dolor convallis imperdiet. Morbi in nulla vitae erat suscipit laoreet. Sed ultrices eget dolor et faucibus. Proin faucibus mi sit amet blandit varius. Morbi eget eleifend nisl. Cras mollis augue nec enim ultricies, eu auctor quam commodo. Phasellus eu fermentum diam, id accumsan quam. Nulla finibus mauris at velit facilisis, in convallis nulla aliquam. In in nibh auctor, posuere velit a, blandit sapien.
			</Content>
		    </Dropdown>
		</Card>
		<Card src="./cards/lights" />
	    </header>
	</div>
    );
}

export default App;
