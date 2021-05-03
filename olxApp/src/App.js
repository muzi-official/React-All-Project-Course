import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Sellitem from './components/Sellitem/Sellitem'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Itemdetails from './components/Itemdetails/Itemdetails'
import Chat from './components/Chat';
import Error from './components/404/index'


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/Login" component={Login}>
            <Login />
          </Route>
          <Route exact path={`/Item/:Category/:title/:id`} component={Itemdetails}>
            <Itemdetails />
          </Route>
          <Route exact path="/Sellitem" component={Sellitem}>
            <Sellitem />
          </Route>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route exact path="/chatwithseller/chat/:id">
            <Chat />
          </Route>
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
