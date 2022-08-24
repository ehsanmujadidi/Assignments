import React from 'react';

export default function TodoListItem(props) {
    if(props.item.title !== ""){
        return (
            <span key={props.item.objectId} style={{width:'100%'}}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <span className='h6' style={{width:'250px'}}>{props.item.title}</span>
                                <input type='button' className='btn btn-sm btn-danger' value='Remove' onClick={() => props.onRemoveTodo(props.item.objectId)} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </span>
        )
    }
}