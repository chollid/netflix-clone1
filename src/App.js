import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import LoginScreen from './LoginScreen';
import HomeScreen from './screens/HomeScreen.jsx';
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
        //logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, [dispatch, user]);
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
