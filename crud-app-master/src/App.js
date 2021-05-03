import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { useSelector } from "react-redux";

function App() {
  const userData = useSelector((state) => state.auth);
  const { user } = userData;

  return (
    <Router>
      <Switch>
        {/* <>{!user ? <Login /> : <Home />}</> */}
        {!user ? (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/home">
              <Login />
            </Route>
          </>
        ) : (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
