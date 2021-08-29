import Navigation from "../components/Navigation"
import Games from "../components/Games"
import Footer from "../components/Footer"

const Games_page = () => {
    return(
        <div className="games_page">
            <Navigation />
            <Games/>
            <Footer/>
        </div>
    )
}
export default Games_page