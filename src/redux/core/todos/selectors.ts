import { CoreModuleState } from "../state";

export const selectTodos = (state: CoreModuleState) => state.core.todos.list;
