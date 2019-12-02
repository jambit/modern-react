import React from 'react';

import TodoListEntry from './TodoListEntry';
import './style.scss';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todos';

export default () => {
    const todos = useSelector(selectTodos);
    return (
        <ul className="todo-list">
            {todos.map((todo) => <TodoListEntry label={todo.label} checked={todo.checked} key={todo.id} />)}
            <li><input className="todo-list-new-entry" placeholder="Add a new entry" /><button>+</button></li>
        </ul>
    );
};
