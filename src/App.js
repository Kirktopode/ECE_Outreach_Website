import React from 'react';
import Card from './Card.js';
import './App.css';

function App() {
    return (
	<div className="App">
	    <header className="App-header">
		<Card src="./cards/spark" />
		<Card src="./cards/lights" />
	    </header>
	</div>
    );
}

export default App;
