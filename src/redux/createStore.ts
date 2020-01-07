import { createStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import coreModule from './core/module';

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
