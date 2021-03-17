import "./App.css";
import CatProfile from "./components/CatProfile";
import AddCatForm from "./components/AddCatForm";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/cats">Cat List</Link>
        </li>
        <li>
          <Link to="/add-cat">Add Cat</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/cats" component={CatProfile} />
        <Route exact path="/add-cat" component={AddCatForm} />
      </Switch>
    </div>
  );
}

export default App;
