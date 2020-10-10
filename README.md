## Cards
Extensive work has gone into making cards easy to work with. They are currently configured
using TOML (can be made to work with JSON super easily). The recommended card directory
structure is as follows:  
```
public
└─card_dir
  ├─config.toml
  ├─center.jpg
  ├─dropdown_ideas.html
  ├─dropdown_lessons.html
  └─dropdown_news.html
```
These should be put in the `public` folder of the react app. Here is a minimal example
of how to use a card with the above directory structure:  
```jsx
import React from 'react';
import Card from './Card.js';
import './App.css';

function App() {
    return (
	<div className="App">
	    <header className="App-header">
			<Card src="./card_dir" />
	    </header>
	</div>
    );
}

export default App;
```
Once compiled, the `<Card>` tag will fetch the `card_dir/config.toml` file and parse its
contents, fetching additional files as required.  

What follows is a sample `config.toml` that references the above directory structure:  
```toml
[center]
src="center.jpg"
alt="CardName"

[[dropdown]]
icon="lightbulb"
label="Ideas"
content="dropdown_ideas.html"

[[dropdown]]
icon="classroom"
label="Lessons"
content="dropdown_lessons.html"

[[dropdown]]
icon="newspaper"
label="News"
content="dropdown_news.html"
```

The contents of `dropdown_*.html` above will be literally copy-pasted into the card dropdown
box.  

Available values for `icon` are:  
- `lightbulb`
- `math`
- `globe`
- `newspaper`
- `classroom`
