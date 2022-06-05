import React, { useRef, useState } from "react";
import { signUp, logOut, logIn, useAuth } from "../../firebase-config";
import twitterPic from "./twitterPic.webp";
import TwitterIcon from "@mui/icons-material/Twitter";

function Login({ logInMenu }) {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignUp() {
    setLoading(true);
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert(
        "Cannot register with same email and password must be atleast 6 characters!"
      );
    }
    setLoading(false);
  }

  async function handleLogIn() {
    setLoading(true);
    try {
      await logIn(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error! Wrong password!");
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
      <div>
        <TwitterIcon className="logo-login" />
        <h1>Happening now</h1>
        <h3>Join Twitter today.</h3>
        <div id="email">
          {currentUser?.email
            ? `You are currently logged as: ${currentUser?.email}`
            : "You are currently not logged in."}
        </div>
        <input ref={emailRef} placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button disabled={loading || currentUser} onClick={handleSignUp}>
          Sign Up
        </button>
        <button disabled={loading || currentUser} onClick={handleLogIn}>
          Log In
        </button>
        <button disabled={loading || !currentUser} onClick={handleLogOut}>
          Log Out
        </button>
        <button disabled={loading || !currentUser} onClick={logInMenu}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Login;
