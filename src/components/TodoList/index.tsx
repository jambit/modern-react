import React, { useRef, KeyboardEvent } from 'react';
import { Key } from 'ts-keycode-enum';

import TodoListEntry from './TodoListEntry';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from '../../redux/todos/selectors';
import { addTodoStart } from '../../redux/todos/actions';

export default () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    const input = useRef<HTMLInputElement>();
    const submitTodo = () => {
        dispatch(addTodoStart(input.current.value));
        input.current.value = '';
    };
    const onKeyDown = (e: KeyboardEvent) => {
        if(e.keyCode === Key.Enter)
            submitTodo();
    };
    return (
        <ul className="todo-list">
            {todos.map((todo) => <TodoListEntry id={todo.id} label={todo.label} checked={todo.checked} key={todo.id} />)}
            <li className="todo-list-new-entry"><input onKeyDown={onKeyDown} placeholder="Add a new entry" ref={input} /><button onClick={submitTodo}>+</button></li>
        </ul>
    );
};
