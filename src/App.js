import React from 'react';
import Card from './Card.js';
import Icon from './Icon.js';
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
		    </Dropdown>
		    <Dropdown>
			<Icon>
			    <img alt="Math"
				 src={require('./images/math.png')}
			    />
			</Icon>
		    </Dropdown>
		    <Dropdown>
			<Icon>
			    <img alt="History"
				 src={require('./images/globe.png')}
			    />
			</Icon>
		    </Dropdown>
		    <Dropdown>
			<Icon>
			    <img alt="News"
				 src={require('./images/newspaper.png')}
			    />
			</Icon>
		    </Dropdown>
		    <Dropdown>
			<Icon>
			    <img alt="Lessons"
				 src={require('./images/classroom.png')}
			    />
			</Icon>
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
			    <img alt="Ideas"
				 src={require('./images/lightbulb.png')}
			    />
			</Icon>
		    </Dropdown>
		    <Dropdown>
			<Icon>
			    <img alt="Math"
				 src={require('./images/math.png')}
			    />
			</Icon>
		    </Dropdown>
		    <Dropdown>
			<Icon>
			    <img alt="History"
				 src={require('./images/globe.png')}
			    />
			</Icon>
		    </Dropdown>
		    <Dropdown>
			<Icon>
			    <img alt="News"
				 src={require('./images/newspaper.png')}
			    />
			</Icon>
		    </Dropdown>
		</Card>
	    </header>
	</div>
    );
}

export default App;
