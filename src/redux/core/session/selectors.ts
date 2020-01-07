import { CoreModuleState } from "../state";

export const selectToken = (state: CoreModuleState) => state.core.session.token;
