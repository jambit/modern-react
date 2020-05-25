import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Memoization from '.';

describe('<Memoization>', () => {
    beforeEach(() => {
        render(<Memoization />);
    });

    const getElements = () => ({
        first: screen.getByPlaceholderText('First Operand'),
        second: screen.getByPlaceholderText('Second Operand'),
        sum: screen.getByTestId('sum'),
        button: screen.getByText('Send'),
    });

    it('starts with a value of 0', () => {
        const { first, second, sum } = getElements();

        expect(first).toHaveValue('0');
        expect(second).toHaveValue('0');
        // explain and show why the regex here.
        expect(sum).toHaveTextContent(/^0$/);
    });

    it('adds values correctly', () => {
        const { first, second, sum } = getElements();

        fireEvent.change(first, { target: { value: '20' } });
        fireEvent.change(second, { target: { value: '22' } });
        expect(sum).toHaveTextContent(/^42$/);
    });

    it('shows the calculated value in an alert call when pressing the button', () => {
        const { first, second, button } = getElements();
        const spy = jest.spyOn(window, 'alert').mockImplementationOnce(() => {});

        fireEvent.change(first, { target: { value: '20' } });
        fireEvent.change(second, { target: { value: '22' } });
        expect(spy).not.toHaveBeenCalled();

        fireEvent.click(button);
        expect(spy).toHaveBeenCalledWith('Value: 42');
        expect(spy).toHaveBeenCalledTimes(1);
    });

    // show enzyme advanced next
});
