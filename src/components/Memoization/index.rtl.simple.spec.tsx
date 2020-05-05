import React from 'react';
import { render, screen } from '@testing-library/react';
import Memoization from '.';

// show first
describe('<Memoization>', () => {
    beforeEach(() => {
        render(<Memoization />);
    });

    it('has the right title', () => {
        const title = screen.getByRole('heading');

        // show other RTL toHave*
        expect(title).toHaveTextContent('Calculator');
    });

    // show enzyme simple next
});
