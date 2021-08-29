import Footer from "../components/Footer"
import FrontImg from "../components/FrontImg"
import GamesPresentation from "../components/GamesPresentation"
import Navigation from "../components/Navigation"
import StoryTelling from "../components/StoryTelling"

const Home = () => {

    return(
        <div>
            <Navigation/>
            <FrontImg/>
            <StoryTelling/>
            <GamesPresentation/>
            <Footer/>
        </div>
    )
}
export default Home