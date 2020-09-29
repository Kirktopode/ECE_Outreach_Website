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
		    <Icon>
			<img alt="Spark"
			     src={require('./images/spark.png')}
			/>
		    </Icon>
		    <Dropdown>
			<Icon>
			    <img alt="Concepts"
				 src={require('./images/lightbulb.png')}
			    />
			</Icon>
			<Label>
			    Key Concepts
			</Label>
		    </Dropdown>
		    <Dropdown>
			<Icon>
			    <img alt="Math"
				 src={require('./images/math.png')}
			    />
			</Icon>
			<Label>
			    Math Ideas
			</Label>
		    </Dropdown>
		    <Dropdown>
			<Icon>
			    <img alt="History"
				 src={require('./images/globe.png')}
			    />
			</Icon>
			<Label>
			    History of the Project
			</Label>
		    </Dropdown>
		    <Dropdown>
			<Icon>
			    <img alt="News"
				 src={require('./images/newspaper.png')}
			    />
			</Icon>
			<Label>
			    Applications in the News
			</Label>
		    </Dropdown>
		    <Dropdown>
			<Icon>
			    <img alt="Lessons"
				 src={require('./images/classroom.png')}
			    />
			</Icon>
			<Label>
			    Takeaway Lessons
			</Label>
		    </Dropdown>
		</Card>
		<Card>
		    <Icon>
			<img alt="Light"
			     src={require('./images/lights.jpg')}
			/>
		    </Icon>
		    <Dropdown>
			<Icon>
			    <img alt="Math"
				 src={require('./images/math.png')}
			    />
			</Icon>
			<Label>
			    Math Ideas
			</Label>
		    </Dropdown>
		    <Dropdown>
			<Icon>
			    <img alt="Concepts"
				 src={require('./images/lightbulb.png')}
			    />
			</Icon>
			<Label>
			    Key Concepts
			</Label>
		    </Dropdown>
		    <Dropdown>
			<Icon>
			    <img alt="Lessons"
				 src={require('./images/classroom.png')}
			    />
			</Icon>
			<Label>
			    Takeaway Lessons
			</Label>
		    </Dropdown>
		    <Dropdown>
			<Icon>
			    <img alt="History"
				 src={require('./images/globe.png')}
			    />
			</Icon>
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
