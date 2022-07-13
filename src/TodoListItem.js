import React from 'react';

export default function TodoListItem(props) {
    if(props.title !== ""){
        return (
            <li key={props.objectId}>
                <span className='h6'>{props.title}</span>
            </li>
        )
    }
}