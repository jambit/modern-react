import React, { useReducer } from 'react';

interface MyState {
    foo: number;
    bar: string;
}

interface MyAddAction {
    type: 'add';
    value: number
}

interface MyGreetAction {
    type: 'greet';
    value: string;
}

interface MyClearAction {
    type: 'clear';
}

type MyAction = MyAddAction | MyGreetAction | MyClearAction;

function stateReducer(state: MyState, action: MyAction) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                foo: state.foo + action.value
            };
        case 'greet':
            return {
                ...state,
                bar: `Hello ${action.value}`
            };
        case 'clear':
            return { foo: 0, bar: '' };
    }
    return state;
}

export default () => {
    const [state, dispatch] = useReducer(stateReducer, { foo: 0, bar: '' });
    return (
        <div>
            <button onClick={() => dispatch({ type: 'add', value: 42 })}>Add</button> {state.foo}
            <button onClick={() => dispatch({ type: 'greet', value: 'Mary' })}>Greet</button> {state.bar}
            <button onClick={() => dispatch({ type: 'clear' })}>Clear</button>
        </div>
    );
}
