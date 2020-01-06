import { TodoState } from "./todos/reducer";
import { SessionState } from "./session/reducer";

export interface RootState {
    todos: TodoState;
    session: SessionState;
}
