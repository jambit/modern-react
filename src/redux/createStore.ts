import { configureStore } from 'deox';
import { combineReducers } from 'redux';
import { todosReducer } from './todos/reducer';
import { sessionReducer } from './session/reducer';

export default () => configureStore({
    reducer: combineReducers({
        todos: todosReducer,
        session: sessionReducer,
    })
});
