import { createAction } from "deox";

export const ADD_TODO = 'TODO/ADD';

export const addTodo = createAction(ADD_TODO, (resolve) => (label: string) => resolve({ label }));
