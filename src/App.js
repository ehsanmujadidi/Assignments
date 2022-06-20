import logo from './logo.svg';
import './App.css';
import './style.css';

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

{/* Navbar of the page */}
function Navbar() {
  return (
    <nav className='navbar navbar-light navbar-custom'>
      <img src="/hacker.png" alt="image" width='50' />
    </nav>
  )
}

{/* Sidebar of the page */}
function Sidebar() {
  return(
    <div className="col-2 col-xl-2 col-md-2 col-sm-12 sidebar p-2">
      <div class="list-group" id="list-tab" role="tablist">
        <a class="list-group-item-custom list-group-item-action active-link" href="#">Home</a>
        <a class="list-group-item-custom list-group-item-action disabled" href="#">Profile</a>
      </div>
    </div>
  )
}

{/* App component */}
function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="mt-3 container-fluid">
        <div className="content-wrapper">
          <div className="row px-3">
            <Sidebar />
            <div className="col-10 col-xl-10 col-md-10 col-sm-12 content border p-2 py-3 card">
              <div className='sub-header'><span className="pb-3">Page Title</span></div>
              <div className="main-content p-3">
                <p>This part is inside a .container class.</p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
