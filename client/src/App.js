import './App.css';
import Saved from "./pages/saved";
import Search from "./pages/search";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Nav />
          <div className="App">
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </div>
      </Router>
    </div>
  );
}

export default App;
