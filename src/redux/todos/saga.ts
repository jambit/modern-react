import {
    put, all, select, call, takeLatest, cancelled
} from 'redux-saga/effects';

import { api } from '../../api';
import {
    ADD_TODO_START,
    loadTodos,
    addTodoStart,
    addTodoSuccess,
    addTodoFailure
} from './actions';
import { TodoEntry } from './reducer';
import { selectToken } from '../session';

export default function* todoSaga() {
    yield all([
        takeLatest(ADD_TODO_START, addTodoSaga),
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
