import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

{/** Custom Hook Component */}
const useSemiPersistentState = () =>{
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList])

  return [todoList, setTodoList]
}

{/* App Component */}
function App() {
  
  const [todoList, setTodoList] = useSemiPersistentState();
  const addTodo = (value) => {
    setTodoList([
      ...todoList, 
      {
        title : value, 
        objectId: Date.now()
      }
    ])
};

  return (
    <>
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
    </>
  )
}
export default App;
