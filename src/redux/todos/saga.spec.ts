import { eventChannel, Channel } from 'redux-saga';
import { testSaga, expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import { subscribeToUpdatesSaga, subscribeToStorage, fetchTodosSaga, addTodoSaga } from './saga';
import { take, select, call } from 'redux-saga/effects';
import { addTodoStart, addTodoSuccess, addTodoFailure } from './actions';
import { selectToken } from '../session';
import { api } from '../../api';
import { TodoEntry } from './reducer';

describe('addTodoSaga', () => {
    const result = ({} as any) as TodoEntry;

    it('dispatches addTodoSuccess', () => {
        return (
            expectSaga(addTodoSaga, addTodoStart('woot'))
                // put is an expectation here.. doesn't matter when the saga puts, but it must put this.
                .put(addTodoSuccess(result))
                .provide([
                    // provide are hooks to intercept certain yields and return something.
                    [select(selectToken), 'accessToken'],
                    // matchers.call.fn only checks the function. parameters are being ignored
                    [matchers.call.fn(api.addTodo), result],
                    // Everything else will be executed as it would be during runtime
                ])
                .run()
        );
    });

    it('dispatches addTodoSuccess (2)', () => {
        return (
            expectSaga(addTodoSaga, addTodoStart('woot'))
                // alternatively, we can provide a redux state to work with
                .withState({
                    session: {
                        token: 'AccessToken',
                    },
                })
                .put(addTodoSuccess(result))
                .provide([[matchers.call.fn(api.addTodo), result]])
                .run()
        );
    });

    it('does not dispatch addTodoFailure', () => {
        return (
            expectSaga(addTodoSaga, addTodoStart('woot'))
                // we can also expect something not to happen
                .not.put(addTodoFailure('woot'))
                .provide([
                    [select(selectToken), 'accessToken'],
                    [matchers.call.fn(api.addTodo), result],
                ])
                .run()
        );
    });
});

describe('subscribeToUpdatesSaga', () => {
    // explain channel and jest.fn()
    const channel = eventChannel((emitter: (e: StorageEvent) => void) => () =>
        undefined,
    ) as Channel<StorageEvent>;
    const close = (channel.close = jest.fn());
    const event1 = {};
    const event2 = {};

    beforeEach(() => close.mockClear());

    it('provides take multiple times', () => {
        // sometimes you need to test internal logic of an infinite loop
        testSaga(subscribeToUpdatesSaga)
            .next()
            .call(eventChannel, subscribeToStorage)
            .next(channel)
            // expect one take and handle
            .take(channel)
            .next(event1)
            .call(fetchTodosSaga)
            .next()
            // expect another take and handle
            .take(channel)
            .next(event2)
            .call(fetchTodosSaga)
            .next()
            // it should continue taking
            .take(channel)
            // finish just stops the execution (we can't repeat this forever)
            .finish();
        // if you want to ensure the saga is done instead use:
        //  .next()
        //  .isDone();
        expect(close).not.toHaveBeenCalled();
    });

    it('closes the event source upon error', () => {
        testSaga(subscribeToUpdatesSaga)
            .next()
            .call(eventChannel, subscribeToStorage)
            .next(channel)
            .take(channel)
            // act as if the take threw an error
            .throw(new Error());
        expect(close).toHaveBeenCalledTimes(1);
    });

    // show code coverage and jest.config.js next
});
