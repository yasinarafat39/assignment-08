

import React from 'react';

const BreakSecond = ({ addBreakTime, breakTimesObject }) => {
    return (
        <div>
            <h5 onClick={() => addBreakTime(breakTimesObject.second)} className='bg-white rounded-full p-2 text-xs font-semibold hover:bg-green-400 hover:text-white cursor-pointer transition duration-400 text-center'> {breakTimesObject.second}s</h5>
        </div>
    );
};

export default BreakSecond;