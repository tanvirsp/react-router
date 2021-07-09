import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/teamDetail/:teamId">
            <TeamDetail />

          </Route>
        </Switch>
      </Router>

     
    </div>
  );
}

export default App;
