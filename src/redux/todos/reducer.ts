import { createReducer } from "deox";
import { addTodoSuccess, setTodoChecked, removeTodo, loadTodos } from "./actions";

export interface TodoEntry {
    id: number;
    label: string;
    checked: boolean;
}

const initialState = {
    list: [] as TodoEntry[],
};

export type TodoState = typeof initialState;

export const todosReducer = createReducer(initialState, (handleAction) => [
    handleAction(loadTodos, (state, action) => ({
        ...state,
        list: action.payload.items
    })),
    handleAction(addTodoSuccess, (state, action) => ({
        ...state,
        list: [...state.list, action.payload.item],
    })),
    handleAction(setTodoChecked, (state, action) => ({
        ...state,
        list: state.list.map((entry) => {
            if(entry.id === action.payload.id) {
                return {
                    ...entry,
                    checked: action.payload.checked
                };
            }
            return entry;
        })
    })),
    handleAction(removeTodo, (state, action) => ({
        ...state,
        list: state.list.filter((entry) => entry.id !== action.payload.id)
    }))
]);