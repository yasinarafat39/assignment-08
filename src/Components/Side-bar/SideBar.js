import React from 'react';
import './SideBar.css';

const SideBar = ({ exerciseTime }) => {
    return (
        <div className='sticky top-0'>

            {/* Add a break section  */}
            <div>
                <h2 className='text-xl font-semibold mt-3 mb-4'>Add A Break</h2>
                <div className='bg-green-50 p-2 rounded grid lg:grid-cols-5 gap-3'>
                    <h5 className='bg-white rounded-full p-2 text-xs font-semibold hover:bg-green-400 hover:text-white cursor-pointer transition duration-400 text-center'>10s</h5>
                    <h5 className='bg-white rounded-full p-2 text-xs font-semibold hover:bg-green-400 hover:text-white cursor-pointer transition duration-400 text-center'>20s</h5>
                    <h5 className='bg-white rounded-full p-2 text-xs font-semibold hover:bg-green-400 hover:text-white cursor-pointer transition duration-400 text-center'>30s</h5>
                    <h5 className='bg-white rounded-full p-2 text-xs font-semibold hover:bg-green-400 hover:text-white cursor-pointer transition duration-400 text-center'>40s</h5>
                    <h5 className='bg-white rounded-full p-2 text-xs font-semibold hover:bg-green-400 hover:text-white cursor-pointer transition duration-400 text-center'>50s</h5>
                </div>
            </div>

            <h2 className='text-xl font-semibold mt-3 mb-4'>Exercise Details</h2>

            {/* Exercise Time */}
            <div className='bg-green-50 rounded p-3 mb-4 flex justify-between'>
                <p className='text-sm font-semibold'>Exercise time</p>
                <p><small className='text-gray-400'> {exerciseTime}s</small></p>
            </div>
            {/* Break time */}
            <div className='bg-green-50 rounded p-3'>
                <p className='text-sm font-semibold'>Break time</p>
                <p><small> </small></p>
            </div>
        </div>
    );
};

export default SideBar;