import { TodoState } from "./todos/reducer";

export interface TodoModuleState {
    todo: {
        todos: TodoState;
    };
}
