import './App.css';
import Saved from "./pages/saved";
import Search from "./pages/search";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
            <Route>
              <NoMatch />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
