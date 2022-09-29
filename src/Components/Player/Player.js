
import React from 'react';

const Player = (props) => {
    const { name, id, picture, age, TimeRequired } = props.player;

    return (
        <div className='singlePlayerCart rounded-lg  bg-white relative h-80'>

            <img className=' rounded-xl h-[150px] w-full p-2' src={picture} alt="" />
            <div className='px-3'>
                <h2 className='mt-2 font-bold text-sm '>{name}</h2>
                <p className='text-xs font-semibold'>Age: {age}</p>
                <p className='text-xs font-semibold'>Time Required: {TimeRequired}s</p>

            </div>
            <div>
                <button className='w-full py-1 px-1 rounded-b-lg bg-green-400 text-white absolute bottom-0'>Add to list</button>
            </div>
            
        </div>

    );
};

export default Player;