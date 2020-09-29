import React from 'react';
import Card from './Card.js';
import Center from './Center.js';
import Dropdown from './Dropdown.js';
import './App.css';

function App() {
    return (
	<div className="App">
	    <header className="App-header">
		<Card>
		    <Center>
			<img alt="Spark"
			     src={require('./images/spark.png')}
			/>
		    </Center>
		    <Dropdown>
			<img alt="Concepts"
			     src={require('./images/lightbulb.png')}
			/>
		    </Dropdown>
		    <Dropdown>
			<img alt="Math"
			     src={require('./images/math.png')}
			/>
		    </Dropdown>
		    <Dropdown>
			<img alt="History"
			     src={require('./images/globe.png')}
			/>
		    </Dropdown>
		    <Dropdown>
			<img alt="News"
			     src={require('./images/newspaper.png')}
			/>
		    </Dropdown>
		    <Dropdown>
			<img alt="Lessons"
			     src={require('./images/classroom.png')}
			/>
		    </Dropdown>
		</Card>
		<Card>
		    <Center>
			<img alt="Light"
			     src={require('./images/lights.jpg')}
			/>
		    </Center>
		    <Dropdown>
			<img alt="Ideas"
			     src={require('./images/lightbulb.png')}
			/>
		    </Dropdown>
		    <Dropdown>
			<img alt="Math"
			     src={require('./images/math.png')}
			/>
		    </Dropdown>
		    <Dropdown>
			<img alt="History"
			     src={require('./images/globe.png')}
			/>
		    </Dropdown>
		    <Dropdown>
			<img alt="News"
			     src={require('./images/newspaper.png')}
			/>
		    </Dropdown>
		</Card>
	    </header>
	</div>
    );
}

export default App;
