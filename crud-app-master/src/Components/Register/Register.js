import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Login/Login.css";
import { auth } from "../../Utils/firebase";
import { REGISTER_WITH_EMAIL_PASSWORD } from "../../Store/authConstants";
import { useDispatch } from "react-redux";

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const GetRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;
        dispatch({
          type: REGISTER_WITH_EMAIL_PASSWORD,
          user: userCredential.user,
        });

        // ...
        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..
      });
    setEmail("");
    setPassword("");
    setUser("");
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
          Register
        </p>
      </div>
      <div className="login_inputs">
        <TextField
          className="login_textfield"
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          color="primary"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="login_inputs">
        <TextField
          className="login_textfield"
          id="outlined-basic"
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
          id="outlined-basic"
          type="password"
          label="Password"
          autoComplete="current-password"
          variant="outlined"
          color="primary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login_submit" onClick={GetRegister}>
        Register
      </button>
      <span>
        Already Register ?
        <Link
          to="/"
          style={{
            marginLeft: 5,
            fontWeight: "400",
            textDecoration: "none",
            fontFamily: "cursive",
          }}
        >
          login
        </Link>
      </span>
    </div>
  );
}

export default Register;
