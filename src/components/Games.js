import React, { useState, useEffect } from 'react';
import Card from './Card'
import axios from 'axios'

const Games = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, []);

    function getData() {
        axios.get('http://localhost:3003/games/')
         .then((res) => {setData(res.data)})
    }

    return (
        <div className="games">
            <h1 className="blue">Nos Jeux</h1>
            <ul className="cards">
                {data.sort((a,b) => {
                return(b.nbOfPlayers - a.nbOfPlayers)})
                .map((game) => (<Card key={game.id}
                name={game.name} description={game.descr} nbOfPlayers={game.nbOfPlayers}/>))}
            </ul>
        </div>
    
    );
};

export default Games;