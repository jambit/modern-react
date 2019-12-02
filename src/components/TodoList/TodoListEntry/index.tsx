import React from 'react';
import './style.scss';

interface TodoListEntryProps {
    label: string;
    checked: boolean;
}

export default({ label, checked }: TodoListEntryProps) => {
    return (
        <li className={`todo-list-entry${checked ? ' checked' : ''}`}>
            <span className="icon">{checked ? '☑' : '☐'}</span> <span className="label">{label}</span>
            <button className="remove">x</button>
        </li>
    );
};
