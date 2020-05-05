import { todosReducer, TodoState, TodoEntry } from './reducer';
import { loadTodos, addTodoSuccess, setTodoCheckedSuccess, removeTodoSuccess } from './actions';

describe('todos reducer', () => {
    const stateWithTwoEntries: TodoState = {
        list: [
            { id: 10, checked: true, label: 'Run errands' },
            { id: 12, checked: false, label: 'Solve Puzzle' },
        ],
    };

    it('returns the initial state when passing in undefined as previous state', () => {
        const newState = todosReducer(undefined, {} as any);

        expect(newState).toEqual({
            list: [],
        });
    });

    describe('loadTodos', () => {
        it('replaces the existing list', () => {
            const newList: TodoEntry[] = [{ id: 5, checked: false, label: 'Buy chocolate' }];
            const newState = todosReducer(stateWithTwoEntries, loadTodos(newList));

            expect(newState).toEqual({
                list: newList,
            });
        });
    });

    describe('addTodoSuccess', () => {
        it('appends an item to the list', () => {
            const entry: TodoEntry = { id: 5, checked: false, label: 'Buy chocolate' };
            const newState = todosReducer(stateWithTwoEntries, addTodoSuccess(entry));

            expect(newState).toEqual({
                list: [...stateWithTwoEntries.list, entry],
            });
        });
    });

    describe('setTodoCheckedSuccess', () => {
        it('appends an item to the list', () => {
            // 1. show snapshot
            // 2. show what happens if changes are done
            // 3. show what happens if changes are done and message changes as well
            const newState = todosReducer(stateWithTwoEntries, setTodoCheckedSuccess(10, false));

            expect(newState).toMatchSnapshot();

            // remind of difference between toBe and toEqual
            expect(newState).not.toBe(stateWithTwoEntries);
            expect(newState.list[0]).not.toBe(stateWithTwoEntries.list[0]);
            expect(newState.list[1]).toBe(stateWithTwoEntries.list[1]);
        });
    });

    describe('removeTodoSuccess', () => {
        it('appends an item to the list', () => {
            const newState = todosReducer(stateWithTwoEntries, removeTodoSuccess(10));

            expect(newState).toEqual({
                list: [stateWithTwoEntries.list[1]],
            });
            expect(newState.list[0]).toBe(stateWithTwoEntries.list[1]);
        });
    });

    // show todos saga next
});
