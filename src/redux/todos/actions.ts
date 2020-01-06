import { createAction } from "deox";
import { TodoEntry } from "./reducer";

export const LOAD_TODOS = 'TODO/LOAD';
export const ADD_TODO_START = 'TODO/ADD/START';
export const ADD_TODO_SUCCESS = 'TODO/ADD/SUCCESS';
export const ADD_TODO_FAILURE = 'TODO/ADD/FAILURE';
export const SET_TODO_CHECKED = 'TODO/SET_CHECKED'
export const REMOVE_TODO = 'TODO/REMOVE';

export const loadTodos = createAction(LOAD_TODOS, (resolve) => (items: TodoEntry[]) => resolve({ items }));
export const addTodoStart = createAction(ADD_TODO_START, (resolve) => (label: string) => resolve({ label }));
export const addTodoSuccess = createAction(ADD_TODO_SUCCESS, (resolve) => (item: TodoEntry) => resolve({ item }));
export const addTodoFailure = createAction(ADD_TODO_FAILURE, (resolve) => (label: string) => resolve({ label }));
export const setTodoChecked = createAction(SET_TODO_CHECKED, (resolve) => (id: number, checked: boolean) => resolve({ id, checked }));
export const removeTodo = createAction(REMOVE_TODO, (resolve) => (id: number) => resolve({ id }));
