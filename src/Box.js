import React from 'react';

const Box = ({ id, bgColor="purple", width=100, height=100, removeBox }) => {
    const style = {
        backgroundColor: bgColor,
        width: `${width}px`,
        height: `${height}px`
    };

    const handleClick = () => {
        removeBox(id);
    }
    
    return (
        <div>
            <div style={style} data-testid={id}></div>
            <button onClick={handleClick}>X</button>
        </div>
    )
}

export default Box;