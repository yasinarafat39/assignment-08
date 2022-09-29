import React, { useEffect, useState } from 'react';
import BreakSecond from '../BreakSecond/BreakSecond';
import './SideBar.css';

const SideBar = ({ exerciseTime }) => {



    const [breakTimes, setBreakTime] = useState([]);

    useEffect(() => {
        fetch('second.json')
            .then(res => res.json())
            .then(data => setBreakTime(data))
    }, []);


    const [breakSecond, setBreakSecond] = useState(0);


    const addBreakTime = (second) => {
        
        setBreakSecond(second);
        localStorage.setItem('seconds', JSON.stringify(second))

    }

    

    return (
        <div className='sticky top-0'>
            {/* Add a break section  */}

            <h2 className='text-center'><span className='text-lg font-bold text-center text-green-400'>Yasin Arafat</span> <p className='  text-xs'>Kishoreganj, Dhaka.</p></h2>
            <div>
                <h2 className='text-lg font-semibold mt-3 mb-4'>Add A Break</h2>
                <div className='bg-green-50 p-2 rounded grid lg:grid-cols-5 gap-3'>
                    {
                        breakTimes.map(breakTimesObject => <BreakSecond key={breakTimesObject.id} addBreakTime={addBreakTime} breakTimesObject={breakTimesObject}></BreakSecond>)
                    }
                </div>



            </div>
            
          
            <h2 className='text-lg font-semibold mt-12 mb-4'>Exercise Details</h2>

            {/* Exercise Time */}
            <div className='bg-green-50 rounded p-3 mb-4 flex justify-between'>
                <p className='text-sm font-semibold'>Exercise time</p>
                <p><small className='text-gray-400'> {exerciseTime} seconds</small></p>
            </div>
            {/* Break time */}
            <div className='bg-green-50 rounded p-3 flex justify-between'>
                <p className='text-sm font-semibold'>Break time</p>
                <p><small className='text-gray-400'> {breakSecond} seconds</small></p>
            </div>

            <button className='w-full py-2 px-1 mt-12 rounded-lg bg-green-400 text-white'>Activity Completed</button>
        </div>
    );
};

export default SideBar;