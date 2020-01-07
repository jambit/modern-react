import { TodoState } from "./todos/reducer";
import { SessionState } from "./session/reducer";

export interface CoreModuleState {
    core: {
        todos: TodoState;
        session: SessionState;
    };
}
