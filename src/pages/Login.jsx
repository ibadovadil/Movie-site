import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from 'react-bootstrap';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginAlert, setLoginAlert] = useState(false);
  const [signupAlert, setSignupAlert] = useState(false);
  const [duplicateUserAlert, setDuplicateUserAlert] = useState(false);
  const [nonexistentUserAlert, setNonexistentUserAlert] = useState(false);
  const navigate = useNavigate();


  const handleLogin = () => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (!savedUsername) {
      setNonexistentUserAlert(true);
    } else if (username === savedUsername && password === savedPassword) {
      if (username === "Adil" && password === "12345") {
        navigate("/admin"); 
      } else {
        setLoggedIn(true);
        navigate("/");
      }
    } else {
      setLoginAlert(true);
    }
  };

  const handleSignup = () => {
    const existingUsernames = localStorage.getItem("username");
    if (existingUsernames && existingUsernames.includes(signupUsername)) {
      setDuplicateUserAlert(true);
    } else {
      localStorage.setItem("username", signupUsername);
      localStorage.setItem("password", signupPassword);
      setSignupAlert(true);
      navigate("/");
    }
  };

  return (

<div className="body">
      <h1 >WELCOME</h1>
      {loggedIn ? (
        <h2 >Welcome, {username}!</h2>
      ) : (
        <div>
          <h2 >Login</h2>
          {loginAlert && (
            <Alert variant="danger" onClose={() => setLoginAlert(false)} dismissible>
              Invalid username or password
            </Alert>
          )}
          {nonexistentUserAlert && (
            <Alert variant="danger" onClose={() => setNonexistentUserAlert(false)} dismissible>
              Username does not exist. Please sign up first.
            </Alert>
          )}
          <input
            type="text"
            className="loginput"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="loginput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="logbtn" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
      <div className="my-5">
        <h2 >Sign Up</h2>
        {signupAlert && (
          <Alert variant="success" onClose={() => setSignupAlert(false)} dismissible>
            Signup successful! You can now log in.
          </Alert>
        )}
        {duplicateUserAlert && (
          <Alert variant="danger" onClose={() => setDuplicateUserAlert(false)} dismissible>
            Username already exists. Please choose a different username.
          </Alert>
        )}
        <input
          className="loginput"
          type="text"
          placeholder="New Username"
          value={signupUsername}
          onChange={(e) => setSignupUsername(e.target.value)}
        />
        <input
          className="loginput"
          type="password"
          placeholder="New Password"
          value={signupPassword}
          onChange={(e) => setSignupPassword(e.target.value)}
        />
        <button className="logbtn" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default App;

