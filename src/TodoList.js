import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

{/* TodoList Component */}
export default function TodoList(props) {
    return (
        <div className='row col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-3 mx-3'>
            <div className='row col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 sub-header' style={{background: "#0879ea3d"}}>
                <span className='text-dark'>Todo List</span>
            </div>
            <ul className='list-group list-group-flush mt-3'>
                {
                    props.todoList.map((item) => {    
                        return (
                            <TodoListItem item={item} onRemoveTodo={props.onRemoveTodo} />
                        );
                    })
                }
            </ul>
        </div>
    )
}