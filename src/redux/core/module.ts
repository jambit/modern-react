import { ISagaModule } from 'redux-dynamic-modules-saga';
import { combineReducers } from 'redux';
import { sessionReducer } from './session/reducer';
import { CoreModuleState } from './state';

export default (): ISagaModule<CoreModuleState> => ({
    id: 'core',
    reducerMap: {
        core: combineReducers({
            session: sessionReducer,
        }),
    }
});
