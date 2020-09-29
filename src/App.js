import React from 'react';
import Card from './Card.js';
import Icon from './Icon.js';
import Label from './Label.js';
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
		    </Dropdown>
		    <Dropdown>
			<Icon alt="Math"
			      src={require('./images/math.png')}
			/>
			<Label>
			    Math Ideas
			</Label>
		    </Dropdown>
		    <Dropdown>
			<Icon alt="History"
			      src={require('./images/globe.png')}
			/>
			<Label>
			    History of the Project
			</Label>
		    </Dropdown>
		    <Dropdown>
			<Icon alt="News"
			      src={require('./images/newspaper.png')}
			/>
			<Label>
			    Applications in the News
			</Label>
		    </Dropdown>
		    <Dropdown>
			<Icon alt="Lessons"
			      src={require('./images/classroom.png')}
			/>
			<Label>
			    Takeaway Lessons
			</Label>
		    </Dropdown>
		</Card>
		<Card>
		    <Icon alt="Light"
			  src={require('./images/lights.jpg')}
		    />
		    <Dropdown>
			<Icon alt="Math"
			      src={require('./images/math.png')}
			/>
			<Label>
			    Math Ideas
			</Label>
		    </Dropdown>
		    <Dropdown>
			<Icon alt="Concepts"
			      src={require('./images/lightbulb.png')}
			/>
			<Label>
			    Key Concepts
			</Label>
		    </Dropdown>
		    <Dropdown>
			<Icon alt="Lessons"
			      src={require('./images/classroom.png')}
			/>
			<Label>
			    Takeaway Lessons
			</Label>
		    </Dropdown>
		    <Dropdown>
			<Icon alt="History"
			      src={require('./images/globe.png')}
			/>
			<Label>
			    History of the Project
			</Label>
		    </Dropdown>
		</Card>
	    </header>
	</div>
    );
}

export default App;
