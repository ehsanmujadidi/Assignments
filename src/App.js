import React from "react";
import logo from './logo.svg';
import style from './App.module.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

{/* App Component */}
export default function App() {
  
  const [todoList, setTodoList] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  // NEW
  React.useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + `${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      var prevArray = [];
      data.records.map(item =>{
        if(!prevArray.includes(item.id))
          var newArray = [
            ...prevArray, 
            {
              title : item.fields.Title, 
              objectId: item.id
            }
          ]
          prevArray = newArray;
      })
      setTodoList(prevArray)
      setIsLoading(false);
    });

    {/*const myPromise = new Promise((resolve, reject) => {
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
    */}
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
      <Router>
        <Routes>
          <Route path="/" exact />
          <Route path="/NewPage" element={<NewPage />} />
        </Routes>
      </Router>
      <Navbar />
      <div className="mt-3 container-fluid">
        <div className="content-wrapper">
          <div className="row px-3">
            <Sidebar />
            <div className={`col-10 col-xl-10 col-md-10 col-sm-12 border p-2 py-3 card ${style.content}`}>
              <div className={style.subHeader}><span className="pb-3">ToDo</span></div>
              <div className={`p-3 ${style.mainContent}`}>
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

function NewPage() {
  return <h1>New Todo List</h1>
}