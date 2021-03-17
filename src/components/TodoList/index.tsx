import React from 'react';

import TodoListEntry from './TodoListEntry';
import './style.scss';

export default () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };
    return (
        <ul className="todo-list">
            <TodoListEntry label="Make cookies" checked={false} />
            <TodoListEntry label="Go to Christmas party" checked={false} />
            <TodoListEntry label="Wish everyone a merry Christmas" checked={false} />
            <TodoListEntry label="Dress up like Santa" checked />
            <TodoListEntry label="Ignore 1-3" checked />
            <TodoListEntry label="Steal Christmas" checked />
            <li>
                <form className="todo-list-form" onSubmit={onSubmit}>
                    <input className="todo-list-new-entry" placeholder="Add a new entry..." />
                    <button>+</button>
                </form>
            </li>
        </ul>
    );
};
