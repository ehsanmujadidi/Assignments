import React from 'react';

{/* Add Form component */}
function AddTodoForm() {
    return (
        <div className="row col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12  mx-3">
            <div className='row col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 sub-header' style={{background: "#0879ea3d"}}>
                <span className='text-dark'>Todo Form</span>
            </div>
            <form className='mt-3'>
                <label htmlFor='todoTitle' className='h5'>Title: </label>
                <input type="text" name="todoTitle" id='todoTitle' placeholder="Title" className='py-1'/>
                <button type="submit" className='btn btn-sm btn-primary mx-3'><i className="bi bi-plus-square-fill"></i> add</button>
            </form>
        </div>
    )
}

export default AddTodoForm;