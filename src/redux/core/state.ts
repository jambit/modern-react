import { SessionState } from "./session/reducer";

export interface CoreModuleState {
    core: {
        session: SessionState;
    };
}
