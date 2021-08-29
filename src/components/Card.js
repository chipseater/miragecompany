const Card = (props) => {
        const arrowSize = 256

    return(
        <li className="card">
            <img src="https://via.placeholder.com/600" className="card-image" alt="The Land Walker" />
            <a href="/thelandwalker">
                <ul className="card-data not-flex">
                    <img src="TLWlogo_transparent.png" className="card-logo" alt={"logo de " + props.name} />
                    <li className="name data-in card-title">{props.name}</li>
                    <li className="description data-in">{props.description}</li>
                    <li className="nbOfPlayers data-in">{props.nbOfPlayers} joueurs</li>
                    <span className="card-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width={arrowSize} height={arrowSize} fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </span>
                </ul>
            </a>
        </li>
    )
}
export default Card