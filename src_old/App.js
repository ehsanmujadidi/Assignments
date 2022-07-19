import React from "react";
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

{/* App component */}
function App() {
  const [todoList, setTodoList] = React.useState(localStorage.getItem('savedTodoList') || ''); 
  React.useEffect(() => {
    localStorage.setItem('savedTodoList', todoList);
  }, [todoList])
  
  const addTodo = (value) => {
    var newTodoList = [{title : value, objectId: Date.now()}]   
    var updatedTodoList = [...todoList, ...newTodoList]
    setTodoList(JSON.stringify(newTodoList))
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
