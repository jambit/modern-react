import { TodoModuleState } from "../state";

export const selectTodos = (state: TodoModuleState) => state.todo.todos.list;
