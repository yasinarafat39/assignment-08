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


            <div className="side-bar ">
                    
            </div>
        </div >
    );
}

export default BdCricketClub;