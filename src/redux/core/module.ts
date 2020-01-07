import { ISagaModule } from 'redux-dynamic-modules-saga';
import { combineReducers } from 'redux';
import { sessionReducer } from './session/reducer';
import { CoreModuleState } from './state';
import { todosReducer } from './todos/reducer';
import rootSaga from './rootSaga';

// 2. extract todo module, remove sagas from here

export default (): ISagaModule<CoreModuleState> => ({
    id: 'core',
    reducerMap: {
        core: combineReducers({
            session: sessionReducer,
            todos: todosReducer,
        }),
    },
    sagas: [
        rootSaga
    ]
});
