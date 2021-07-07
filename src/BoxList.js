import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [ boxes, setBoxes ] = useState([]);

    const addBox = (newBox) => {
        setBoxes(boxes => [ ...boxes, newBox ]);
    };

    const removeBox = (boxId) => {
        setBoxes(boxes.filter(box => box.id !== boxId));
    }

    return (
        <div>
            <h1>Color Box Maker</h1>
            <NewBoxForm addBox={ addBox } />
            <div>
                { boxes.map(({ id, bgColor, width, height }) => 
                    <Box 
                        key={id} 
                        id={id} 
                        bgColor={bgColor} 
                        width={width}
                        height={height}
                        removeBox={removeBox}
                    />
                ) }
            </div>
        </div>
    )
}

export default BoxList;