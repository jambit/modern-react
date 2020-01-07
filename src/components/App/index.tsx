import React from 'react';
import TodoList from '../TodoList';

// 1. add routeMatcherFactory
// 2. add Router
// 3. Add 2 routes / and /todo with links to eachother
// 4. make TodoList load Lazily (Suspense + Loading)

export default () => (
    <div>
        <h2>GRINCH TO DO LIST</h2>
        <TodoList />
    </div>
);
