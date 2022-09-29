import React, {useState} from 'react';
import TodoListItem from './TodoListItem';
import style from './../App.module.css';
import PropTypes from 'prop-types';

{/* TodoList Component */}
export default function TodoList(props) {
    return (
        <div className='row col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-3 mx-3'>
            <span className='list-group list-group-flush mt-3' style={{width:'100%'}}>
                <table className='table table-hover' style={{width:'100%'}}>
                    <thead>
                        <tr>
                            <th style={{width:'300px'}}>Title</th>
                            <th style={{width:'150px'}}>Priority</th>
                            <th style={{width:'150px'}}>Status</th>
                            <th style={{width:'100px'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        props.todoList.map((item) => {    
                            return (
                                <TodoListItem item={item} onRemoveTodo={props.onRemoveTodo} key={Math.random() * 300} />
                            );
                        })
                    }
                    </tbody>
                </table>
            </span>
        </div>
    )
}

TodoList.propTypes = {
    onAddTodo: PropTypes.func
};