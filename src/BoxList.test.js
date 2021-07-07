import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders a BoxList without crashing', () => {
    render(<BoxList />);
});

it('matches a BoxList snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it('can add a new box', () => {
    const { queryByText, getByLabelText } = render(<BoxList />);

    //no boxes should be in the DOM
    expect(queryByText('X')).not.toBeInTheDocument();

    const color = getByLabelText('Choose a color');
    const width = getByLabelText('Width');
    const height = getByLabelText('Height');
    const btn = queryByText('Add');

    //add the new box
    fireEvent.change(color, { target: { value: '#fff888' } });
    fireEvent.change(width, { target: { value: '200' } });
    fireEvent.change(height, { target: { value: '400' } });
    fireEvent.click(btn);

    //remove button should be present
    expect(queryByText('X')).toBeInTheDocument();

    //the box should have these styles
    expect(queryByText('X').previousSibling).toHaveStyle({backgroundColor: '#fff888', width: '200px', height: '400px'} );

    //form values should reset
    expect(color.getAttribute('value')).toBe('black');
    expect(width.getAttribute('value')).toBe('');
    expect(height.getAttribute('value')).toBe('');
});

it('can remove a box', () => {
    const { queryByText, getByLabelText } = render(<BoxList />);
    const color = getByLabelText('Choose a color');
    const width = getByLabelText('Width');
    const height = getByLabelText('Height');
    const btn = queryByText('Add');

    //add the new box
    fireEvent.change(color, { target: { value: '#fff888' } });
    fireEvent.change(width, { target: { value: '200' } });
    fireEvent.change(height, { target: { value: '400' } });
    fireEvent.click(btn);

     //remove button should be present & have correct styles
     expect(queryByText('X')).toBeInTheDocument();
     expect(queryByText('X').previousSibling).toHaveStyle({backgroundColor: '#fff888', width: '200px', height: '400px'} );

    //remove the box
    const removeBtn = queryByText('X');
    fireEvent.click(removeBtn);

    //box remove button should be gone
    expect(queryByText('X')).not.toBeInTheDocument();
});