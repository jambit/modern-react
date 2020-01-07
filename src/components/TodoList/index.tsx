import React, { useRef, KeyboardEvent } from 'react';
import { Key } from 'ts-keycode-enum';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { useSelector, useDispatch } from 'react-redux';

import TodoListEntry from './TodoListEntry';
import './style.scss';
import { selectTodos } from '../../redux/todo/todos/selectors';
import { addTodoStart } from '../../redux/todo/todos/actions';
import todoModule from '../../redux/todo/module';

// 2. Introduce LazyDynamicModuleLoader

const TodoList = () => {
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

export default () => (
    <DynamicModuleLoader modules={[todoModule()]}>
        <TodoList />
    </DynamicModuleLoader>
);
