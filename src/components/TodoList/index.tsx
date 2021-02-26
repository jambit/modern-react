import React, { useContext, useState } from 'react';

import { TodoListEntry } from './TodoListEntry';
import './style.scss';
import { TodoContext } from '../../mobx/TodoListState';
import { observer } from 'mobx-react-lite';

export const TodoList = observer(() => {
    const [label, setLabel] = useState('');
    const todos = useContext(TodoContext);
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        todos.add(label);
        setLabel('');
    };
    return (
        <ul className='todo-list'>
            {todos.items.map((item) => (
                <TodoListEntry
                    item={item}
                    removeItem={todos.remove}
                    key={item.id}
                />
            ))}
            <li>
                <form className='todo-list-form' onSubmit={onSubmit}>
                    <input
                        className='todo-list-new-entry'
                        placeholder='Add a new entry...'
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                    />
                    <button>+</button>
                </form>
            </li>
        </ul>
    );
});
