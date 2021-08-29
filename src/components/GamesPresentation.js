import { NavLink } from 'react-router-dom'

const GamesPresentation = () => {
    return (
        <div className="GamesPresentation">
            <table>
                <tr>
                    <td>
                        <h1>Notre Jeu</h1>
                        <p>
                            The Night Walker est un MNORPG fascinant mélant quêtes mythiques et PvP.
                            Nous voulons offrir à notre communautée un jeu de haute qualité, accessible
                            pour tout le monde.
                        </p>
                        <div className="btn-container">
                            <NavLink
                             className="GameBtn" 
                             exact to="/games">Nos jeux</NavLink>
                        </div>
                        <div className="btn-container">
                            <img class="little_screen" src="https://via.placeholder.com/450x220/ffffff/0000000/?text=Screenshot+de+the+night+walker"
                            alt="screenshot de The Night Walker" />
                        </div>
                    </td>
                    <td>
                        <img class="bigger_screen" src="https://via.placeholder.com/450x220/ffffff/0000000/?text=Screenshot+de+the+night+walker"
                        alt="screenshot de The Night Walker" />
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default GamesPresentation;