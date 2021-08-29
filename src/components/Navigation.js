import { NavLink } from 'react-router-dom'

const Navigation = () => {

    const handleScroll = () => {
        
        if (window.scrollY > 20) {
          document.querySelector(".Navigation").className = "Navigation scroll";
        } else {
          document.querySelector(".Navigation").className = "Navigation";
        }
      }
    
    window.addEventListener("scroll", handleScroll);


    return(
        <div className="Navigation">
            <NavLink className="banner" exact to="/#">
              <img src="logo-blanc.png" className="logo" alt="The mirage comagny logo "/>
              <h1 className="text-banner">The Mirage Company</h1>
            </NavLink>
            <NavLink exact to="/games#" className="nav-link" activeClassName="nav-link-active">Jeux</NavLink>
            <NavLink exact to="/a-propos#" className="nav-link" activeClassName="nav-link-active">À propos</NavLink>
        </div>

    )
}
export default Navigation