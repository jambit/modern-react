import {
    put, all, select, call, takeLatest, cancelled, takeEvery, take
} from 'redux-saga/effects';

import { api } from '../../api';
import {
    ADD_TODO_START,
    SET_TODO_CHECKED_START,
    REMOVE_TODO_START,
    loadTodos,
    addTodoStart,
    addTodoSuccess,
    addTodoFailure,
    setTodoCheckedStart,
    setTodoCheckedSuccess,
    setTodoCheckedFailure,
    removeTodoStart,
    removeTodoSuccess,
    removeTodoFailure,
} from './actions';
import { TodoEntry } from './reducer';
import { selectToken } from '../session';
import { EventChannel, eventChannel } from 'redux-saga';

export default function* todoSaga() {
    yield all([
        takeLatest(ADD_TODO_START, addTodoSaga),
        takeEvery(SET_TODO_CHECKED_START, setTodoCheckedSaga),
        takeEvery(REMOVE_TODO_START, removeTodoSaga),
        fetchTodosSaga(),
        subscribeToUpdatesSaga(),
    ]);
}

export function* fetchTodosSaga() {
    try {
        const token: string = yield select(selectToken);
        const items: TodoEntry[] = yield call(api.getTodos, token);
        yield put(loadTodos(items));
    } catch(e) {
        // todo: handle more elegantly
        console.error('Error fetching todos', e);
    }
}

export function* addTodoSaga(action: ReturnType<typeof addTodoStart>) {
    try {
        const token: string = yield select(selectToken);
        const result: TodoEntry = yield call(api.addTodo, token, action.payload.label);
        yield put(addTodoSuccess(result));
    } catch (e) {
        yield put(addTodoFailure(action.payload.label));
    } finally {
        if (yield cancelled())
            console.error('cancelled');
    }
}

export function* setTodoCheckedSaga(action: ReturnType<typeof setTodoCheckedStart>) {
    try {
        const token: string = yield select(selectToken);
        yield call(api.setTodoChecked, token, action.payload.id, action.payload.checked);
        yield put(setTodoCheckedSuccess(action.payload.id, action.payload.checked));
    } catch (e) {
        yield put(setTodoCheckedFailure(action.payload.id, action.payload.checked));
    }
}

export function* removeTodoSaga(action: ReturnType<typeof removeTodoStart>) {
    try {
        const token: string = yield select(selectToken);
        yield call(api.removeTodo, token, action.payload.id);
        yield put(removeTodoSuccess(action.payload.id));
    } catch (e) {
        yield put(removeTodoFailure(action.payload.id));
    }
}

function subscribeToStorage(emit: (event: StorageEvent) => void) {
    window.addEventListener('storage', emit);
    return () => window.removeEventListener('storage', emit);
}

function* subscribeToUpdatesSaga() {
    const channel: EventChannel<StorageEvent> = yield call(eventChannel, subscribeToStorage);
    try {
        while (true) {
            // return value ignored in this sample
            const event: StorageEvent = yield take(channel);
            yield call(fetchTodosSaga);
        }
    } catch (e) {
        channel.close();
    }
}
