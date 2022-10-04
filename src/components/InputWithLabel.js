import React from 'react';
import PropTypes from 'prop-types';

/** Reusable Input */
export default function InputWithLabel(props){
    const inputRef = React.useRef();
    React.useEffect(() => {
        if(props.isFocused){
            inputRef.current.focus();
        }
    }, [props.isFocused]);
    return(
        <>
            <label htmlFor={props.id} className="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-form-label">{props.children}</label>
            <div className="col-12 col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} value={props.value} className='form-control' ref={inputRef} />
            </div>
        </>
    )
}

InputWithLabel.propTypes = {
    onAddTodo: PropTypes.func
};