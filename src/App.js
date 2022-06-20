import logo from './logo.svg';
import './App.css';

{/* Application Title */}
const title = "Books"

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          {title}
        </h3>
        <List />
      </header>
    </div>
  );
}

function List(){
  return (
    <ul>
      { list.map(function(item){
        return (
          <li key={item.objectId}>
            <ul>
              <li><a href={item.url} target="_blank">{item.title}</a></li>
              <li><i>Author: {item.author}</i></li>
              <li><i>Category: {item.category}</i></li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
