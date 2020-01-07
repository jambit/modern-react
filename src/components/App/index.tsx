import React from 'react';
import TodoList from '../TodoList';
import { Router } from 'react-router-ts';

// 3. Add 2 routes / and /todo with links to eachother
// 4. make TodoList load Lazily (Suspense + Loading)

function routeMatcherFactory(pattern: string) {
    return (path: string) => ((path === pattern) ? {} : null);
}

export default () => (
    <div>
        <Router routeMatcherFactory={routeMatcherFactory}>
            <h2>GRINCH TO DO LIST</h2>
            <TodoList />
        </Router>
    </div>
);
