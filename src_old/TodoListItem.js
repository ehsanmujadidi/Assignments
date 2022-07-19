import React from 'react';

export default function TodoListItem(value) {    
    if(value !== ""){
        return (
            <li>
                <span className='h6'>{JSON.parse(value)}</span>
            </li>
        )
    }
}