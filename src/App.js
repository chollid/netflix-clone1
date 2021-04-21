import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import LoginScreen from './LoginScreen';
import HomeScreen from './screens/HomeScreen.jsx';

function App() {
  const user = null;

  // LISTENER  To Check for change in userAuth logged-in/logged-out
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        console.log(userAuth.uid);
      } else {
        //logged out
      }
    });

    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
