import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

it('renders a Box without crashing', () => {
    render(<Box />);
});

it('matches a Box snapshot', () => {
    const { asFragment } = render(<Box id={1} bgColor={"#ffffff"} width={"600"} height={"500"} />);
    expect(asFragment()).toMatchSnapshot();
});