const FrontPage = () => {
    return(
        <div className="carousel">
            <div className="carousel__figure">
                <div className="FrontImg bg1 carousel__figure--pic">
                    <img class="TLW_logo" src="TLWlogo_transparent.png" alt="logo The Land Walker" />
                    <h1>Nous sommes The mirage Company</h1>
                </div>
                <div className="FrontImg bg2 carousel__figure--pic">
                    <img class="TLW_logo" src="TLWlogo_transparent.png" alt="logo The Land Walker" />
                    <h1>Une aventure épique vous attends</h1>
                </div>
                <div className="FrontImg bg3 carousel__figure--pic">
                    <img class="TLW_logo" src="TLWlogo_transparent.png" alt="logo The Land Walker" />
                    <h1>The Night Walker, le MNORPG stratégique</h1>
                </div>
            </div>
        </div>
    )
}
export default FrontPage