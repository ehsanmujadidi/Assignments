import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

{/* App Component */}
function App() {
  
  const [todoList, setTodoList] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  // NEW
  React.useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data :{
            todoListObj: JSON.parse(localStorage.getItem('savedTodoList'))
          }
        });
      }, 2000);
    });
    myPromise.then((result) => {
      setIsLoading(false);
      setTodoList(result.data.todoListObj);
    });

  }, [])
  
  //OLD
  React.useEffect(() => {
    if(!isLoading)
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList])
  
  
  const addTodo = (value) => {
    setTodoList([
      ...todoList, 
      {
        title : value, 
        objectId: Date.now()
      }
    ])
  };

  const removeTodo = (id) => {  
    const newTodoLists = todoList.filter(
      list => id !== list.objectId
    );
    setTodoList(newTodoLists);
  }

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
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                {isLoading ? ( <p>Loading ...</p> ) : ""}
              </div> 
            </div>
          </div>  
        </div>
      </div>
    </>
  )
}
export default App;
