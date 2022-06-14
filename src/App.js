import logo from './logo.svg';
import './App.css';

{/* Application Title */}
const title = "Hacker Stories"

{/* List */}
const list = [
  {
    title: 'The Road to React',
    category: 'Programming',
    url: 'https://www.roadtoreact.com/',
    author: 'Robin Wieruch',
    objectId: 0
  },
  {
    title: 'Zero to One',
    category: 'Startups & Bussines',
    url: 'https://www.roadtoreact.com/',
    author: 'Peter Thiel & Blake Masters',
    objectId: 1
  },
]

{/* App component */}
function App() {
  const listItems = list.map(function(item){
    return (
      <li key={item.objectId}>
        <a href={item.url} target="_blank">{item.title}</a>
      </li>
    );
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          {title}
        </h3>
        <ul>
          {listItems}
        </ul>
      </header>
    </div>
  );
}

export default App;
