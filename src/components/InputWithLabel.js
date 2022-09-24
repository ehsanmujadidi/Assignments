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
            <label htmlFor={props.name} className='h5'>{props.children} </label>
            <input type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} value={props.value} className='py-1' ref={inputRef} />
        </>
    )
}

InputWithLabel.propTypes = {
    onAddTodo: PropTypes.func
};