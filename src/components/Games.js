import React from 'react';
import Card from './Card'

const Games = () => {
    return (
        <div className="games">
            <h1>Nos Jeux</h1>
            <ul className="cards">
                <Card name="The Night Walker" description="le MNORPG de demain" nbOfPlayers="0" />
            </ul>
        </div>
    
    );
};

export default Games;