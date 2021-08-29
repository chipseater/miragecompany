import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/Home.js'
import NotFound from './pages/NotFound.js'
import "./Assets/style/index.scss"
import Games from "./pages/Games.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/games" exact component={Games} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
