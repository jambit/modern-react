import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import 'typeface-annie-use-your-telescope';

import { App } from './components/App';
import { TodoContext, TodoListState } from './mobx/TodoListState';
import './style.scss';

function Wrapper() {
    const todos = useMemo(() => {
        const todoListState = new TodoListState();
        todoListState.add('foo');
        todoListState.add('bar');
        todoListState.add('foobar2k');
        return todoListState;
    }, []);

    return (
        <TodoContext.Provider value={todos}>
            <App />
        </TodoContext.Provider>
    );
}

ReactDOM.render(<Wrapper />, document.getElementById('app'));
