import { createStore } from 'redux-dynamic-modules';
import coreModule from './core';

export function initStore() {
    return createStore({}, coreModule());
}

// export type AppState = InferState<typeof reducer>;
