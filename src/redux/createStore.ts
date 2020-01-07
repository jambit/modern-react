import { createStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { CoreModuleState } from './core/state';
import coreModule from './core/module';

// 2. load todoModule
// 3. remove todoModule in favor of DynamicModuleLoader
export default () => createStore(
    {
        initialState: {},
        extensions: [
            getSagaExtension()
        ],
    },
    coreModule(),
);
