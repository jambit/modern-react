import React, { Suspense } from 'react';
import { Router, Route, Link } from 'react-router-ts';
import Loading from '../Loading';

function routeMatcherFactory(pattern: string) {
    return (path: string) => ((path === pattern) ? {} : null);
}

const LazyTodoList = React.lazy(() => import('../TodoList/index'));

export default () => (
    <div>
        <Router routeMatcherFactory={routeMatcherFactory}>
            <Route path="/todo">
                <h2>GRINCH TO DO LIST</h2>
                <Suspense fallback={<Loading />}>
                    <LazyTodoList />
                </Suspense>
                <Link href="/">Home</Link>
            </Route>
            <Route path="/">
                <h2>Modern React</h2>
                <Link href="/todo">Todo List</Link>
            </Route>
        </Router>
    </div>
);
