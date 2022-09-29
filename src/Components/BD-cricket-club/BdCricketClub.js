import React, { useEffect, useState } from 'react';
import logo from '../../cricket-bd-logo.png';
import Player from '../Player/Player';
import './BdCricketClub.css';

const BdCricketClub = () => {
    const [players, setPlayer] = useState([]);
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayer(data))
    }, []);

    return (
        
        < div className = 'Bd-cricket-club' >

            <div className="player-container px-12 border bg-green-100">
                <div className='border pt-7'>
                    <div className='flex items-center mb-1'>
                        <img src={logo} alt="" width='50px' height='70px' />
                        <h2 className='text-green-400 text-2xl font-bold'>BD CRICKET CLUB</h2>
                    </div>
                    <h3 className='text-md font-semibold'>Select today's exercise</h3>
                </div>
                
                {
                    players.map(player => <Player player={player} key={player.id}></Player>)
                }
            </div>


            <div className="side-bar ">

            </div>
        </div >
    );
}

export default BdCricketClub;