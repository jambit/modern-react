import {
    put, all, select, call, takeLatest, cancelled, takeEvery
} from 'redux-saga/effects';

import { api } from '../../api';
import {
    ADD_TODO_START,
    SET_TODO_CHECKED_START,
    loadTodos,
    addTodoStart,
    addTodoSuccess,
    addTodoFailure,
    setTodoCheckedStart,
    setTodoCheckedSuccess,
    setTodoCheckedFailure,
} from './actions';
import { TodoEntry } from './reducer';
import { selectToken } from '../session';

export default function* todoSaga() {
    yield all([
        takeLatest(ADD_TODO_START, addTodoSaga),
        takeEvery(SET_TODO_CHECKED_START, setTodoCheckedSaga),
        fetchTodosSaga(),
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
