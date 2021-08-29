const Card = (props) => {
    return(
        <li className="card">
            <img src="https://via.placeholder.com/500" className="card-image" alt="The Land Walker" />
            <ul className="card-data not-flex">    
                <img src="TLWlogo_transparent.png" className="card-logo" alt="The Land Walker" />
                <li className="name data-in card-title">{props.name}</li>
                <li className="description data-in">{props.description}</li>
                <li className="nbOfPlayers data-in">{props.nbOfPlayers} joueurs</li>
            </ul>
        </li>
    )
}
export default Card