import { createAction } from "deox";
import { TodoEntry } from "./reducer";

export const LOAD_TODOS = 'TODO/LOAD';
export const ADD_TODO_START = 'TODO/ADD/START';
export const ADD_TODO_SUCCESS = 'TODO/ADD/SUCCESS';
export const ADD_TODO_FAILURE = 'TODO/ADD/FAILURE';
export const SET_TODO_CHECKED_START = 'TODO/SET_CHECKED/START';
export const SET_TODO_CHECKED_SUCCESS = 'TODO/SET_CHECKED/SUCCESS';
export const SET_TODO_CHECKED_FAILURE = 'TODO/SET_CHECKED/FAILURE';
export const REMOVE_TODO_START = 'TODO/REMOVE/START';
export const REMOVE_TODO_SUCCESS = 'TODO/REMOVE/SUCCESS';
export const REMOVE_TODO_FAILURE = 'TODO/REMOVE/FAILURE';

export const loadTodos = createAction(LOAD_TODOS, (resolve) => (items: TodoEntry[]) => resolve({ items }));
export const addTodoStart = createAction(ADD_TODO_START, (resolve) => (label: string) => resolve({ label }));
export const addTodoSuccess = createAction(ADD_TODO_SUCCESS, (resolve) => (item: TodoEntry) => resolve({ item }));
export const addTodoFailure = createAction(ADD_TODO_FAILURE, (resolve) => (label: string) => resolve({ label }));
export const setTodoCheckedStart = createAction(SET_TODO_CHECKED_START, (resolve) => (id: number, checked: boolean) => resolve({ id, checked }));
export const setTodoCheckedSuccess = createAction(SET_TODO_CHECKED_SUCCESS, (resolve) => (id: number, checked: boolean) => resolve({ id, checked }));
export const setTodoCheckedFailure = createAction(SET_TODO_CHECKED_FAILURE, (resolve) => (id: number, checked: boolean) => resolve({ id, checked }));
export const removeTodoStart = createAction(REMOVE_TODO_START, (resolve) => (id: number) => resolve({ id }));
export const removeTodoSuccess = createAction(REMOVE_TODO_SUCCESS, (resolve) => (id: number) => resolve({ id }));
export const removeTodoFailure = createAction(REMOVE_TODO_FAILURE, (resolve) => (id: number) => resolve({ id }));
