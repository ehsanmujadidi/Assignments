import React from 'react';
import './style.css';

{/* Array of todoList */}
const todoList = [
    {
        title: 'The Road to React',
        category: 'Programming ',
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

{/* TodoList Component */}
function TodoList() {
    return (
        <div className='row col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-3 mx-3'>
            <div className='row col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 sub-header' style={{background: "#0879ea3d"}}>
                <span className='text-dark'>Todo List</span>
            </div>
            <ul className='list-group list-group-flush mt-3'>
                {
                    todoList.map((item) => {
                        return (
                            <li key={item.objectId}>
                                <span className='h6'>{item.title}</span>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;