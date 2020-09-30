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
			    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget aliquet risus. Duis aliquam sollicitudin ornare. Mauris vitae nisi augue. Nam ultricies elementum nibh a dapibus. Suspendisse potenti. Vivamus pharetra feugiat lectus eget efficitur. Maecenas vitae dictum urna. Donec sed turpis justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
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
			<Content>
			    Phasellus enim ipsum, ultricies at turpis vitae, laoreet rhoncus quam. Cras rhoncus ante felis, eu mollis risus sodales et. Curabitur sed eros ornare, vestibulum leo eget, condimentum lacus. In nulla neque, commodo ut diam quis, facilisis luctus massa. Proin non convallis nibh, sed rutrum ipsum. Suspendisse elementum lacus tempor ex placerat, vestibulum gravida eros blandit. Cras augue risus, lobortis mattis lectus vitae, vehicula auctor dolor.
			</Content>
		    </Dropdown>
		    <Dropdown>
			<Icon alt="Concepts"
			      src={require('./images/lightbulb.png')}
			/>
			<Label>
			    Key Concepts
			</Label>
			<Content>
			    Nullam nunc libero, rutrum ac nisi in, sodales sollicitudin dolor. Sed mi mi, elementum id neque sed, tristique pulvinar sapien. Mauris fringilla odio ipsum, sed vulputate est euismod quis. Duis ut accumsan urna, eget iaculis mi. Vivamus suscipit efficitur congue. Ut enim ex, fermentum ac consectetur at, scelerisque at tortor. Pellentesque pellentesque vitae nunc in lobortis. Morbi magna urna, tempor eu nisi luctus, varius elementum justo. Proin auctor aliquam velit. Vivamus pellentesque et leo vitae commodo. Praesent gravida eu erat vitae vulputate.
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
			    Mauris ultricies odio non ante imperdiet finibus. Etiam ut porttitor nunc. Vestibulum eros ligula, tincidunt non ex in, molestie imperdiet arcu. Etiam sit amet lacus sed ligula feugiat sagittis. Aenean placerat mattis orci finibus blandit. Praesent non elit tellus. Sed vitae velit vel lectus mattis tristique. Ut ut vestibulum mauris. Sed in malesuada mauris, ut volutpat nulla. In bibendum, felis vitae commodo consectetur, quam dolor ullamcorper lorem, in cursus arcu erat efficitur dui. Donec non risus posuere, molestie ex ut, dictum tellus. Donec convallis blandit lectus at porttitor. Aenean at elit nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
			    Nulla elementum dictum quam, vel luctus eros dignissim id. Sed venenatis lacinia finibus. Cras tempor placerat rutrum. Mauris mattis bibendum pulvinar. Nullam orci nulla, convallis in nisl ut, molestie iaculis purus. Donec elit diam, sodales sit amet convallis ac, accumsan ut tortor. Phasellus sodales risus ut dignissim pulvinar. Sed sit amet leo in libero aliquet lobortis sit amet vitae justo. Nulla et leo in ex vehicula dignissim non eu elit. Sed nec bibendum libero, sit amet imperdiet metus. Nunc gravida venenatis laoreet.
			</Content>
		    </Dropdown>
		</Card>
	    </header>
	</div>
    );
}

export default App;
