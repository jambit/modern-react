import { configureStore } from 'deox';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { todosReducer } from './todos/reducer';
import { sessionReducer } from './session/reducer';
import rootSaga from './rootSaga';

// 1. use createStore<S>() from redux-dynamic-modules + getSagaExtension()
// 2. load todoModule
// 3. remove todoModule in favor of DynamicModuleLoader
export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        middleware: [
            sagaMiddleware
        ],
        reducer: combineReducers({
            todos: todosReducer,
            session: sessionReducer,
        })
    });
    sagaMiddleware.run(rootSaga);
    return store;
};
