import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { setTodoChecked } from '../../../redux/todos';

interface TodoListEntryProps {
    id: number;
    label: string;
    checked: boolean;
}

export default({ id, label, checked }: TodoListEntryProps) => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(setTodoChecked(id, !checked));
    return (
        <li className={`todo-list-entry${checked ? ' checked' : ''}`} onClick={onClick}>
            <span className="icon">{checked ? '☑' : '☐'}</span> <span className="label">{label}</span>
            <button className="remove">x</button>
        </li>
    );
};
