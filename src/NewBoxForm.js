import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        bgColor: 'black',
        width: '',
        height: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(formData => ({...formData, [name]: value}));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addBox({ ...formData, id: nanoid() });
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="bgColor">Choose a color</label>
            <input
                id="bgColor"
                type="color"
                name="bgColor"
                value={formData.bgColor}
                onChange={handleChange}
            />
            <label htmlFor="width">Width</label>
            <input
                id="width"
                type="text"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height</label>
            <input
                id="height"
                type="text"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
    )
}

export default NewBoxForm;