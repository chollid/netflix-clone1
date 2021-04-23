import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import NavBar from '../NavBar';
import Avatar from '../Assets/Avatar.png';
import PlansScreen from './PlansScreen.jsx';
import { auth } from '../firebase';
import './ProfileScreen.css';

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <NavBar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={Avatar} alt="logo" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                // Triggers onAuthStateChanged listener on app.js bc state changed
                // Now no userAuth - ifElse on app.js triggers dispatch(logout()) - sets user = null
                // ternary on app.js render the Loginscreen
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
