import React, { useEffect, useState } from 'react';
import logo from '../../cricket-bd-logo.png';
import Player from '../Player/Player';
import './BdCricketClub.css';

const BdCricketClub = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);

    return (

        < div className='Bd-cricket-club' >

            <div className="player-container px-12 border bg-green-50">
                <div className='border pt-7 mb-5' >
                    <div className='flex items-center mb-1'>
                        <img src={logo} alt="" width='50px' height='70px' />
                        <h2 className='text-green-400 text-2xl font-bold'>BD CRICKET CLUB</h2>
                    </div>
                    <h3 className='text-md font-semibold'>Select today's exercise</h3>
                </div>

                <div className='grid gap-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
                    {
                        players.map(player => <Player player={player} key={player.id}></Player>)
                    }
                </div>
            </div>


            <div className="side-bar p-3">
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

    
            </div>
        </div >
    );
}

export default BdCricketClub;