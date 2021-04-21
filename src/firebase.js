import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC3ZOpsSHMe_SNHd-Q_RKM4tdPraBMrYcw',
  authDomain: 'netflix-clone-a29c6.firebaseapp.com',
  projectId: 'netflix-clone-a29c6',
  storageBucket: 'netflix-clone-a29c6.appspot.com',
  messagingSenderId: '571726150572',
  appId: '1:571726150572:web:fec9cdd105b92f09cc5809',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
