import React from 'react';
import { useState } from "react";
import InputWithLabel from './InputWithLabel';
import style from './../App.module.css';
import { BsTrash } from "react-icons/bs";
import PropTypes from 'prop-types';
import * as Icon from 'react-bootstrap-icons';

{/* Add Form component */}
export default function AddTodoForm(props) {
    
    const handleAddTodo = (event) => {
        event.preventDefault();
        const newTodoTitle = event.target.todoTitle.value;
        props.addTodo(newTodoTitle)
    }

    return (
        <form className='mt-3' onSubmit={handleAddTodo}>
            <div className="row">
                <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="form-group">
                        <InputWithLabel type='text' name='todoTitle' id='todoTitle' placeholder='Title' value={props.todoTitle} isFocused='' >
                            Title:
                        </InputWithLabel>
                    </div>
                </div>
                <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="form-group">
                        <label htmlFor="addTodoForm" className='px-0'>Priority:</label>
                        <select className='form-control' id="addTodoForm">
                            <option value="Low">Select...</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                </div>
                <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <button type="submit" className='btn btn-sm btn-success mx-2 mt-4' id='submit'> Add </button>
                    <button type="reset" className='btn btn-sm btn-warning mt-4'>Reset</button>
                </div>
            </div>
        </form>
    )
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func
};