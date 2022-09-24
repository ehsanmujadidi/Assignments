import React from 'react';
import TodoListItem from './TodoListItem';
import style from './../App.module.css';
import PropTypes from 'prop-types';

{/* TodoList Component */}
export default function TodoList(props) {
    return (
        <div className='row col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-3 mx-3'>
            <div className={`row col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ${style.subHeader}`}>
                <span className='text-dark'>Todo List</span>
            </div>
            <ul className='list-group list-group-flush mt-3'>
                {
                    props.todoList.map((item) => {    
                        return (
                            <TodoListItem item={item} onRemoveTodo={props.onRemoveTodo} key={Math.random() * 300} />
                        );
                    })
                }
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    onAddTodo: PropTypes.func
};