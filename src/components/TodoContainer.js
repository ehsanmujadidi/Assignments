import React from 'react';
import Sidebar from '../Sidebar';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import * as Icon from 'react-bootstrap-icons';
import style from './TodoContainer.module.css';

export default function TodoContainer(props) {
 
    /** Call react hooks */
    const [todoList, setTodoList] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        /** Use API Fetch to list all records */
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
                        objectId : item.id,
                        title    : item.fields.Title,
                        priority : item.fields.Priority,
                        status   : item.fields.Status, 
                    }
                ]
                prevArray = newArray;
            })
            //alert(prevArray.title)
            prevArray.sort((objectA, objectB) => {
                if(objectA.title < objectB.title)
                    return -1
                if(objectA.title == objectB.title)
                    return 0
                if(objectA.title > objectB.title)
                    return 1
            })
            setTodoList(prevArray)
            setIsLoading(false);
        
        });
    }, [])
    
    /** Component to add form data */
    const addTodo = (value) => {
        const data = {
            "records": [{
                "fields": {
                    "Title": value,
                }
            }]
        };
        // Use API Fetch to pass data to insert
        fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
            method: 'POST',
            headers: {
                'Authorization' : 'Bearer ' + `${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });
        setTodoList([
            ...todoList, 
            {
                objectId: Date.now(),
                title : value,
            }
        ])
    };

    /** Component to remove data from ToDo list */
    const removeTodo = (id) => {  
        const data = {
            "records": [{"id": id, "deleted": true}]
        };
        /** Use API Fetch to delete record */
        fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization' : 'Bearer ' + `${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
        })
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });

        const newTodoLists = todoList.filter(
            list => id !== list.objectId
        );
        setTodoList(newTodoLists);
    }

    return (
        <div className="mt-3 container-fluid">
            <div className="content-wrapper">
                <div className="row px-3">
                    {/** Sidebar menu: start */}
                    <Sidebar />
                    {/** Sidebar menu: end */}
                    <div className="col-12 col-xl-10 col-md-10 col-sm-12">
                        <div className="row">
                            {/** ToDo form: start */}
                            <div className={`col-12 col-xl-12 col-md-12 col-sm-12 card ${style.content}`}>
                                <div className={style.subHeader}>
                                    <span className="pb-2 pt-3"><Icon.Clipboard2PlusFill /> Add Activity</span>
                                </div>
                                <div className={`p-3 pt-1 ${style.mainContent}`}>
                                    <AddTodoForm addTodo={addTodo} />
                                </div>
                            </div>
                            {/** ToDo form: end */}
                            {/** ToDo list: start */}
                            <div className={`col-12 col-xl-12 col-md-12 col-sm-12 card mt-2 ${style.content}`}>
                                <div className={style.subHeader}>
                                    <span className="pb-2 pt-3"><Icon.ListUl /> Todo List</span>
                                </div>
                                <div className={`p-3 ${style.mainContent}`}>
                                    <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                                    {isLoading ? ( <p>Loading ...</p> ) : ""}
                                </div> 
                            </div>
                            {/** ToDo form: end */}
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
