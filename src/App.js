import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

{/* App component */}
function App() {
  {/** 1. Create New State */}
  const [todoList, setTodoList] = useState([]);

  const onAddTodo = (value) => {
    var newTodoList = [{title : value, objectId: Date.now()}]   
    setTodoList(newTodoList)
  };

  const addTodo = (value) => {
    var newTodoList = [{title : value, objectId: Date.now()}]   
    setTodoList([...todoList, ...newTodoList])
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
                <AddTodoForm addTodo={addTodo} />
                {/** 2. Pass state as a props */} 
                <TodoList todoList={todoList} />
              </div> 
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default App;
