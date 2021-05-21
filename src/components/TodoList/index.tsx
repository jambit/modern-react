import React, { useEffect, useState } from 'react';

import TodoListEntry from './TodoListEntry';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, loadTodos, removeTodo, selectTodos, setTodoChecked } from '../../redux';

export default () => {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    const [input, setInput] = useState('');
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addTodo.start(input));
        setInput('');
    };
    return (
        <ul className="todo-list">
            {todos.map((item) => (
                <TodoListEntry
                    key={item.id}
                    label={item.label}
                    checked={item.checked}
                    onToggle={() => dispatch(setTodoChecked.start(item.id, !item.checked))}
                    onRemove={() => dispatch(removeTodo.start(item.id))}
                />
            ))}
            <li>
                <form className="todo-list-form" onSubmit={onSubmit}>
                    <input
                        className="todo-list-new-entry"
                        placeholder="Add a new entry..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button>+</button>
                </form>
            </li>
        </ul>
    );
};
