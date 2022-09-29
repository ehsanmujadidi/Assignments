import React from 'react';
import style from './TodoListItem.module.css'
import PropTypes from 'prop-types';
import * as Icon from 'react-bootstrap-icons';

export default function TodoListItem(props) {
    if(props.item.title !== ""){
        return (
            <tr>
                <td>
                    <span className={style.ListItem}>{props.item.title}</span>
                </td>
                <td>
                    <span className={style.ListItem}>
                        {props.item.priority==0 ? 'Low' : ''}
                        {props.item.priority==1 ? 'Medium' : ''}
                        {props.item.priority==2 ? 'High' : ''}
                    </span>
                </td>
                <td>
                    <span className={style.ListItem}>{props.item.status}</span>
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