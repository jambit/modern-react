import { createAction } from "deox";
import { TodoEntry } from "./reducer";

export const loadTodos = createAction('TODO/LOAD', (resolve) => (items: TodoEntry[]) => resolve({ items }));
export const addTodoStart = createAction('TODO/ADD/START', (resolve) => (label: string) => resolve({ label }));
export const addTodoSuccess = createAction('TODO/ADD/SUCCESS', (resolve) => (item: TodoEntry) => resolve({ item }));
export const addTodoFailure = createAction('TODO/ADD/FAILURE', (resolve) => (label: string) => resolve({ label }));
export const setTodoCheckedStart = createAction('TODO/SET_CHECKED/START', (resolve) => (id: number, checked: boolean) => resolve({ id, checked }));
export const setTodoCheckedSuccess = createAction('TODO/SET_CHECKED/SUCCESS', (resolve) => (id: number, checked: boolean) => resolve({ id, checked }));
export const setTodoCheckedFailure = createAction('TODO/SET_CHECKED/FAILURE', (resolve) => (id: number, checked: boolean) => resolve({ id, checked }));
export const removeTodoStart = createAction('TODO/REMOVE/START', (resolve) => (id: number) => resolve({ id }));
export const removeTodoSuccess = createAction('TODO/REMOVE/SUCCESS', (resolve) => (id: number) => resolve({ id }));
export const removeTodoFailure = createAction('TODO/REMOVE/FAILURE', (resolve) => (id: number) => resolve({ id }));
