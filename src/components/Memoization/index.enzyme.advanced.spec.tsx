import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Memoization from '.';

// Some helpers
function findByPlaceholderText(wrapper: ReactWrapper, text: string) {
    return wrapper.find(`[placeholder=${JSON.stringify(text)}]`);
}

function findByTestId(wrapper: ReactWrapper, id: string) {
    return wrapper.find(`[data-testid=${JSON.stringify(id)}]`);
}

function findByText(wrapper: ReactWrapper, text: string) {
    return wrapper.findWhere((wrp) => wrp.type() && wrp.text() === text);
}

describe('<Memoization>', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<Memoization />);
    });

    const getElements = () => ({
        first: findByPlaceholderText(wrapper, 'First Operand'),
        second: findByPlaceholderText(wrapper, 'Second Operand'),
        sum: findByTestId(wrapper, 'sum'),
        button: findByText(wrapper, 'Send'),
    });

    it('starts with a value of 0', () => {
        const { first, second, sum } = getElements();

        expect(first.props().value).toBe('0');
        expect(second.props().value).toBe('0');
        // no regex needed here
        expect(sum.text()).toBe('0');
    });

    it('adds values correctly', () => {
        const { first, second, sum } = getElements();

        // quite similar to rtl
        first.simulate('change', { target: { value: '20' } });
        second.simulate('change', { target: { value: '22' } });
        expect(sum.text()).toBe('42');
    });

    it('shows the calculated value in an alert call when pressing the button', () => {
        const { first, second, button } = getElements();
        const spy = jest.spyOn(window, 'alert').mockImplementationOnce(() => {});

        first.simulate('change', { target: { value: '20' } });
        second.simulate('change', { target: { value: '22' } });
        expect(spy).not.toHaveBeenCalled();

        button.simulate('click');
        expect(spy).toHaveBeenCalledWith('Value: 42');
    });

    // talk about take aways
    // show useInput hook next
});
