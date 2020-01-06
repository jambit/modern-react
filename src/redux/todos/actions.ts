import { createAction } from "deox";

export const ADD_TODO = 'TODO/ADD';
export const SET_TODO_CHECKED = 'TODO/SET_CHECKED'
export const REMOVE_TODO = 'TODO/REMOVE';

export const addTodo = createAction(ADD_TODO, (resolve) => (label: string) => resolve({ label }));
export const setTodoChecked = createAction(SET_TODO_CHECKED, (resolve) => (id: number, checked: boolean) => resolve({ id, checked }));
export const removeTodo = createAction(REMOVE_TODO, (resolve) => (id: number) => resolve({ id }));
