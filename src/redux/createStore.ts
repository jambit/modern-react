import { createStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import coreModule from './core/module';

export default () => createStore(
    {
        initialState: {},
        extensions: [
            getSagaExtension()
        ],
    },
    coreModule(),
);
