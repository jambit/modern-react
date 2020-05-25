import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Memoization, { Title } from '.';

describe('<Memoization>', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<Memoization />);
    });

    it('has the right title', () => {
        // Returns wrapper
        const title = wrapper.find(Title);

        expect(title.text()).toBe('Calculator');
    });

    // show rtl advanced next
});
