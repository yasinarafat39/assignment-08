
import React from 'react';

const Player = ({id, name, picture, age}) => {
    console.log(name)
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default Player;