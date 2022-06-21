import logo from './logo.svg';
import './App.css';
import './style.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

{/* Navbar Component */}
function Navbar() {
  return (
    <nav className='navbar navbar-light navbar-custom'>
      <img src="/hacker.png" alt="image" width='50' />
    </nav>
  )
}

{/* Sidebar Component */}
function Sidebar() {
  return(
    <div className="col-2 col-xl-2 col-md-2 col-sm-12 sidebar p-2">
      <div class="list-group" id="list-tab" role="tablist">
        <a class="list-group-item-custom list-group-item-action active-link" href="#">Home</a>
        <a class="list-group-item-custom list-group-item-action disabled" href="#">....</a>
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
              <div className='sub-header'><span className="pb-3">ToDo</span></div>
              <div className="main-content p-3">
                <AddTodoForm />
                <TodoList />
              </div> 
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default App;
