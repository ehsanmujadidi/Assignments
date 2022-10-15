import React from 'react';
import { useState } from "react";
import InputWithLabel from './InputWithLabel';
import style from './../App.module.css';
import { BsTrash } from "react-icons/bs";
import PropTypes from 'prop-types';
import * as Icon from 'react-bootstrap-icons';

/* Add ToDo form component */
export default function AddTodoForm(props) {

    /** Function to handle ToDo form */
    const handleAddTodo = (event) => {
        event.preventDefault();
        const newTodoTitle = event.target.todoTitle.value;
        props.addTodo(newTodoTitle)
    }

    return (
        /** Add ToDo form: start */
        <form className="mt-3" onSubmit={handleAddTodo} id="addTodoForm">
            <div className="row">
                <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="form-group row">
                        <InputWithLabel type='text' name='todoTitle' id='' placeholder='Title' value={props.todoTitle} isFocused='' >
                            Title:
                        </InputWithLabel>
                    </div>
                </div>
                <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <button type="submit" className='btn btn-sm btn-success mx-2' id='submit'> Add </button>
                    <button type="reset" className='btn btn-sm btn-warning'>Reset</button>
                </div>
            </div>
        </form>
        /** Add ToDo form: end */
    )
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func
};