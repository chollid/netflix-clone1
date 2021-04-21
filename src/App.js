import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import LoginScreen from './LoginScreen';
import HomeScreen from './screens/HomeScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  // Pull in the user State from the redux store
  const user = useSelector(selectUser);

  //Shoot a payload (dispatch) to the redux store
  const dispatch = useDispatch();

  // LISTENER  To Check for change in userAuth logged-in/logged-out
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in - sends uid/email to redux store
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out - resets user back to null
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
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
