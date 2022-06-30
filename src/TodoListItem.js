import React from 'react';

export default function TodoListItem(props) {
    return (
        <li key={props.objectId}>
            <span className='h6'>{props.title}</span>
        </li>
    )
}