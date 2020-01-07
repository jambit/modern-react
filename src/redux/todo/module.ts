import { ISagaModule } from 'redux-dynamic-modules-saga';
import { combineReducers } from 'redux';
import { TodoModuleState } from './state';
import rootSaga from '../todo/rootSaga';
import { todosReducer } from './todos/reducer';

export default (): ISagaModule<TodoModuleState> => ({
    id: 'todo',
    reducerMap: {
        todo: combineReducers({
            todos: todosReducer,
        }),
    },
    sagas: [
        rootSaga
    ]
});
