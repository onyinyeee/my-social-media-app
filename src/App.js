import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { TimelinePage } from './components/pages/TimelinePage';
import {ProfilePage} from './components/pages/ProfilePage';
import {NewPostPage} from './components/pages/NewPostPage';
import { LoginPage } from './components/pages/LoginPage';



function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
        <TimelinePage/>
        </Route>
        <Route path="/profile">
       <ProfilePage/>
        </Route>
        <Route path="/profile/:id">
       <ProfilePage/>
        </Route>
        <Route path="/profile/addpost">
       <NewPostPage/>
        </Route>
        <Route path="/login">
        <LoginPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;