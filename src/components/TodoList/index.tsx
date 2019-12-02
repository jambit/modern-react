import React, { useRef, KeyboardEvent } from 'react';

import TodoListEntry from './TodoListEntry';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, addTodo } from '../../redux/todos';
import { Key } from 'ts-keycode-enum';

export default () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    const input = useRef<HTMLInputElement>();
    const onAddTodo = () => {
        dispatch(addTodo(input.current.value));
        input.current.value = '';
    };
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.keyCode === Key.Enter) {
            onAddTodo();
        }
    };

    return (
        <ul className="todo-list">
            {todos.map((todo) => <TodoListEntry label={todo.label} checked={todo.checked} key={todo.id} id={todo.id} />)}
            <li className="todo-list-new-entry"><input ref={input} placeholder="Add a new entry" onKeyDown={onKeyDown} /><button onClick={onAddTodo}>+</button></li>
        </ul>
    );
};
