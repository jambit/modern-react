import {
    put, all, select, call
} from 'redux-saga/effects';

import { api } from '../../api';
import { loadTodos } from './actions';
import { TodoEntry } from './reducer';
import { selectToken } from '../session';

export default function* todoSaga() {
    yield all([
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
