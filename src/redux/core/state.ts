import { TodoState } from "./todos/reducer";
import { SessionState } from "./session/reducer";

// 1. Refactor to CoreModuleState
export interface RootState {
    todos: TodoState;
    session: SessionState;
}
