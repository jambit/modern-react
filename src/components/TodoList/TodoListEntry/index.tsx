import React, { MouseEvent } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { setTodoCheckedStart, removeTodoStart } from '../../../redux/todos/actions';

interface TodoListEntryProps {
    id: number;
    label: string;
    checked: boolean;
}

export default({ id, label, checked }: TodoListEntryProps) => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(setTodoCheckedStart(id, !checked));
    const onRemoveClick = (e: MouseEvent) => {
        dispatch(removeTodoStart(id));
        e.preventDefault();
        e.stopPropagation();
    };
    return (
        <li className={`todo-list-entry${checked ? ' checked' : ''}`} onClick={onClick}>
            <span className="icon">{checked ? '☑' : '☐'}</span> <span className="label">{label}</span>
            <button className="remove" onClick={onRemoveClick}>x</button>
        </li>
    );
};
