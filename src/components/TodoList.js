import React, {useState} from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

/** ToDo list component */
export default function TodoList(props) {
    /** Set default value for x */
    let x = 0;
    return (
        <div className='row col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-3 mx-3'>
            <span className='list-group list-group-flush mt-1' style={{width:'100%'}}>
                <table className='table table-hover' style={{width:'100%'}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th style={{width:'100px'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        props.todoList.map((item) => {    
                            x+=1;
                            return (
                                <TodoListItem item={item} onRemoveTodo={props.onRemoveTodo} key={Math.random() * 300} number={x} />
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