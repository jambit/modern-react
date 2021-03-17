import React from 'react';
import './style.scss';

interface TodoListEntryProps {
    label: string;
    checked: boolean;
    onToggle: () => void;
    onRemove: () => void;
}

export default ({ label, checked, onToggle, onRemove }: TodoListEntryProps) => {
    return (
        <li className={`todo-list-entry${checked ? ' checked' : ''}`}>
            <span className="icon" onClick={onToggle}>
                {checked ? '☑' : '☐'}
            </span>{' '}
            <span className="label" onClick={onToggle}>
                {label}
            </span>
            <button className="remove" onClick={onRemove}>
                x
            </button>
        </li>
    );
};
