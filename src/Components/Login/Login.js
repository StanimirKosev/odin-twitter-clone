import React, { useRef, useState } from "react";
import { signUp, logOut, logIn, useAuth } from "../../firebase-config";
import twitterPic from "./twitterPic.webp";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Avatar } from "@mui/material";

function Login({ logInMenu, avatar }) {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignUp() {
    setLoading(true);
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
      logInMenu();
    } catch {
      alert(
        "Cannot register with same email. Password must be atleast 6 characters!"
      );
    }
    setLoading(false);
  }

  async function handleLogIn() {
    setLoading(true);
    try {
      await logIn(emailRef.current.value, passwordRef.current.value);
      logInMenu();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogOut() {
    setLoading(true);
    try {
      await logOut();
    } catch {
      alert("Error");
    }
    setLoading(false);
  }

  return (
    <div className="overlay">
      <img alt="twitter-login" src={twitterPic} />
      <div className="login-menu">
        <TwitterIcon className="logo-login" />
        <h1>Happening now</h1>
        <h3>Join Twitter today.</h3>

        {!currentUser && (
          <>
            <input
              ref={emailRef}
              placeholder="Email"
              className="sign-up-inputs"
            />
            <input
              ref={passwordRef}
              placeholder="Password"
              className="sign-up-inputs"
              type="password"
            />
            <div className="form-btns">
              <Button
                disabled={loading}
                onClick={handleSignUp}
                className="login-btns"
              >
                Sign Up
              </Button>

              <div className="and">and/or</div>
              <Button
                disabled={loading}
                onClick={handleLogIn}
                className="login-btns"
              >
                Log In
              </Button>
              <div className="text-info">
                *Email can be fake. Cannot register/sign up with same email,
                password must be atleast 6 characters, log in with a existing
                account or sign up and then log in.
              </div>
            </div>
          </>
        )}

        {currentUser && (
          <div className="form-btns">
            <Button
              disabled={loading}
              onClick={logInMenu}
              className="btns-login-menu first-btn-login"
            >
              <Avatar src={avatar} sx={{ width: 40, height: 40 }} />
              Sign in as {currentUser?.email.split("@")[0]}
            </Button>

            <div className="or">or</div>
            <Button
              disabled={loading}
              onClick={handleLogOut}
              className="btns-login-menu"
            >
              Sign up with email and password
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
