import { RootState } from "../state";

export const selectToken = (state: RootState) => state.session.token;
