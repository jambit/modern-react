import { createReducer } from "deox";
import { addTodo, setTodoChecked, removeTodo, loadTodos } from "./actions";

export interface TodoEntry {
    id: number;
    label: string;
    checked: boolean;
}

const initialState = {
    list: [] as TodoEntry[],
    nextId: 1,
};

export type TodoState = typeof initialState;

export const todosReducer = createReducer(initialState, (handleAction) => [
    handleAction(loadTodos, (state, action) => ({
        ...state,
        list: action.payload.items
    })),
    handleAction(addTodo, (state, action) => ({
        ...state,
        list: [...state.list, { id: state.nextId, label: action.payload.label, checked: false }],
        nextId: state.nextId + 1,
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