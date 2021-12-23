import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { TimelinePage } from './components/pages/TimelinePage';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
        <TimelinePage/>
        </Route>
        <Route path="/profile">
       <p> my homepage </p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;