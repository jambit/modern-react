import { createReducer } from 'deox';
import { addTodo, setTodoChecked } from './actions';


interface TodoEntry {
    id: number;
    label: string;
    checked: boolean;
}

const initialState = {
    list: [] as TodoEntry[],
    nextId: 0,
};

export type TodoState = typeof initialState;

export const todosReducer = createReducer(initialState, (handleAction) => [
    handleAction(addTodo, (state, action) => ({
        ...state,
        list: [...state.list, { id: state.nextId, label: action.payload.label, checked: false }],
        nextId: state.nextId + 1,
    })),
    handleAction(setTodoChecked, (state, action) => ({
        ...state,
        list: state.list.map((todo) => {
            if (todo.id === action.payload.id) {
                return { ...todo, checked: action.payload.checked };
            }
            return todo;
        })
    })),
]);
