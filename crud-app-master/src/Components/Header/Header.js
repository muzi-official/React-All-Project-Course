import { Button } from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../Global.css";
import { auth } from "../../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_OUT } from "../../Store/authConstants";

function Header() {
  let history = useHistory();
  const userData = useSelector((state) => state.auth);
  const { user } = userData;
  let dispatch = useDispatch();

  const SignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch({ type: SIGN_OUT, user: null });
        history.push("/");
      })
      .catch((error) => {});
  };
  return (
    <>
      <nav className="mainHeader">
        <div className="header_left">
          <h1>Todo App</h1>
        </div>
        {/* <div className='header_center'>
                    <Button>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
                            Home
                    </Link>
                    </Button>
                    <Button>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to="/about">
                            About
                    </Link>
                    </Button>
                </div> */}
        <div className="header_right">
          <Button>
            <Link style={{ color: "white", textDecoration: "none" }} to="/home">
              Home
            </Link>
          </Button>
          <Button>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/about"
            >
              About
            </Link>
          </Button>
          <Button
            style={{ color: "white", textDecoration: "none" }}
            onClick={SignOut}
          >
            Sign Out
          </Button>
          {/* <div className='header_right_btn'>
                        <Button style={{ margin: 10 }} color="primary" variant="outlined">Sign In</Button>
                        <Button style={{ margin: 10 }} color="primary" variant="outlined">Register</Button>
                        <Button style={{ margin: 10 }} color="primary" variant="outlined">Sign Out</Button>
                        <Avatar alt="Remy Sharp" />
                    </div> */}
        </div>
      </nav>
    </>
  );
}

export default Header;
