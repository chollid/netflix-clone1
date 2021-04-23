import React, { useState } from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen.jsx';
import NavBarLogo from '../Assets/NavBarLogo.png';
// import { useHistory } from 'react-router';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  // const history = useHistory();

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={NavBarLogo} alt="netflix" />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <button className="loginScreen__button">Sign In</button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
