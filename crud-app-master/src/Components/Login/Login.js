import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth, provider } from "../../Utils/firebase";
import { useDispatch } from "react-redux";
import {
  SIGN_IN_WITH_EMAIL_PASSWORD,
  SIGN_IN_WITH_GOOGLE,
} from "../../Store/authConstants";
function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signInGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // const user = result.user;
        dispatch({ type: SIGN_IN_WITH_GOOGLE, user: result.user });
        history.push("/home");
      })
      .catch((error) => alert(error.message));
  };

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;
        dispatch({
          type: SIGN_IN_WITH_EMAIL_PASSWORD,
          user: userCredential.user,
        });
        history.push("/home");
        // ...
      })
      .catch((error) => {
        alert("Register yourself");
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <svg
        style={{ position: "absolute", bottom: 0, zIndex: -1 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,96L80,122.7C160,149,320,203,480,224C640,245,800,235,960,208C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="login_title">
        <p style={{ fontSize: 36, fontWeight: 500, fontFamily: "cursive" }}>
          Login
        </p>
      </div>
      <div className="login_inputs">
        <TextField
          className="login_textfield"
          id="outlined-secondary"
          label="Email Address"
          variant="outlined"
          color="primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="login_inputs">
        <TextField
          className="login_textfield"
          id="outlined-secondary"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          color="primary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <FormControlLabel
        control={<Checkbox name="checkedB" color="primary" />}
        label="Remember Me"
      />

      <button className="login_submit" onClick={login}>
        Sign In
      </button>
      <span>
        Create Account
        <Link
          to="/register"
          style={{
            marginLeft: 5,
            fontWeight: "400",
            textDecoration: "none",
            fontFamily: "cursive",
          }}
        >
          Register !
        </Link>
      </span>

      <h3 style={{ marginTop: 10, textAlign: "center" }}> OR </h3>

      <div className="login_socialapps">
        <button
          className="login_facebookbtn"
          onClick={"Dispatch SIGNIN_FACEBOOK"}
        >
          Sign In With Facebook
        </button>
        <button className="login_googlebtn" onClick={signInGoogle}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
}

export default Login;
