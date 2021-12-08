import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '../';

afterEach(cleanup);

describe('Navigation component', () => {
    it('renders', () => {
        render(<Navigation />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Navigation/>);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Navigation links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Navigation />);
        // Assert
        expect(getByTestId('projects')).toHaveTextContent('Projects');
        expect(getByTestId('resume')).toHaveTextContent('Resume');
        expect(getByTestId('contact')).toHaveTextContent('Contact');
    });
})