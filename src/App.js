import React from 'react';
import Card from './Card.js';
import './App.css';

function App() {
    return (
	<div className="App">
	    <header className="App-header">
		<Card>
		    <img alt="Spark"
			 src={require('./images/spark.png')}
		    />
		    <img alt="Concepts"
			 src={require('./images/lightbulb.png')}
		    />
		    <img alt="Math"
			 src={require('./images/math.png')}
		    />
		    <img alt="History"
			 src={require('./images/globe.png')}
		    />
		    <img alt="News"
			 src={require('./images/newspaper.png')}
		    />
		    <img alt="Lessons"
			 src={require('./images/classroom.png')}
		    />
		</Card>
		<Card>
		    <img alt="Light"
			 src={require('./images/lights.jpg')}
		    />
		    <img alt="Ideas"
			 src={require('./images/lightbulb.png')}
		    />
		    <img alt="Math"
			 src={require('./images/math.png')}
		    />
		    <img alt="History"
			 src={require('./images/globe.png')}
		    />
		    <img alt="News"
			 src={require('./images/newspaper.png')}
		    />
		</Card>
	    </header>
	</div>
    );
}

export default App;
