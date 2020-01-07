import React from 'react';
import TodoList from '../TodoList';
import { Router, Route, Link } from 'react-router-ts';

// 4. make TodoList load Lazily (Suspense + Loading)

function routeMatcherFactory(pattern: string) {
    return (path: string) => ((path === pattern) ? {} : null);
}

export default () => (
    <div>
        <Router routeMatcherFactory={routeMatcherFactory}>
            <Route path="/todo">
                <h2>GRINCH TO DO LIST</h2>
                <TodoList />
                <Link href="/">Home</Link>
            </Route>
            <Route path="/">
                <h2>Modern React</h2>
                <Link href="/todo">Todo List</Link>
            </Route>
        </Router>
    </div>
);
