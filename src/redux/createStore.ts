import { configureStore } from 'deox';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { todosReducer } from './todos/reducer';
import { sessionReducer } from './session/reducer';
import rootSaga from './rootSaga';

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
