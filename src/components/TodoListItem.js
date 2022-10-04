import React from 'react';
import style from './TodoListItem.module.css'
import PropTypes from 'prop-types';
import * as Icon from 'react-bootstrap-icons';

export default function TodoListItem(props) {
    if(props.item.title !== ""){
        return (
            <tr>
                <td>{props.number}</td>
                <td>
                    <span>{props.item.title}</span>
                </td>
                <td>
                    <Icon.Trash size={36} className={style.Cursor} onClick={() => props.onRemoveTodo(props.item.objectId)} />
                </td>
            </tr>
        )
    }
}

TodoListItem.propTypes = {
    onAddTodo: PropTypes.func
};