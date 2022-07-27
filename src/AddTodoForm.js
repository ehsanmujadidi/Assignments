import React from 'react';
import { useState } from "react";
import InputWithLabel from './InputWithLabel';

{/* Add Form component */}
function AddTodoForm(props) {
    
    const handleAddTodo = (event) => {
        event.preventDefault();
        const newTodoTitle = event.target.todoTitle.value;
        props.addTodo(newTodoTitle)
    }

    return (
        <div className="row col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12  mx-3">
            <div className='row col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 sub-header' style={{background: "#0879ea3d"}}>
                <span className='text-dark'>Todo Form</span>
            </div>
            <form className='mt-3' onSubmit={handleAddTodo}>
                <InputWithLabel type='text' name='todoTitle' placeholder='Title' value={props.todoTitle} isFocused='isFocused' >
                    <strong>Title: </strong>
                </InputWithLabel>
                    

                <button type="submit" className='btn btn-sm btn-primary mx-3'><i className="bi bi-plus-square-fill"></i> add</button>
                <button type="reset" className='btn btn-sm btn-warning'><i className="bi bi-plus-square-fill"></i> Reset</button>
            </form>
        </div>
    )
}

export default AddTodoForm;