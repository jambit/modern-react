import { RootState } from "../state";

export const selectTodos = (state: RootState) => state.todos.list;
