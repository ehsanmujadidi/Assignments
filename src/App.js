import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

{/* App component */}
function App() {
  const [newTodo, setNewTodo] = useState("");

  const onAddTodo = (value) => {
    if(value!='')
      setNewTodo(value)
  };

  return (
    <div className="App">
      <Navbar />
      <div className="mt-3 container-fluid">
        <div className="content-wrapper">
          <div className="row px-3">
            <Sidebar />
            <div className="col-10 col-xl-10 col-md-10 col-sm-12 content border p-2 py-3 card">
              <div className='sub-header'><span className="pb-3">ToDo</span></div>
              <div className="main-content p-3">
                <AddTodoForm onAddTodo={onAddTodo} />
                <TodoList />
                <div className='row col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mx-3'>
                  <ul className='list-group list-group-flush mt-3'>
                    <li><p className='h6'>{newTodo}</p></li>
                  </ul>
                </div>
              </div> 
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default App;
