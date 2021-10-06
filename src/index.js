import React from 'react';
import ReactDOM from 'react-dom';
import firebaseApp from './config/fbConfig'
import firebase from 'firebase/compat/app'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
// import { reduxFirestore, getFirestore } from '@firebase/firestore';
import { reduxFirestore, createFirestoreInstance, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, reactReduxFirebase, getFirebase } from 'react-redux-firebase';


//thunk pauses the action creator, fetches or updates date before sending to the reducer
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(firebaseApp),
    // reactReduxFirebase(firebaseApp, { attachAuthIsReady: true })
    ) 
  )

  

  // const createStoreWithFirebase = compose(
  //   reduxFirestore(firebase, firebaseApp), // firebase instance as first argument, rfConfig as optional second
  // )(createStore);

  // const store = createStoreWithFirebase(rootReducer, {});

  const rrfProps = {
    firebase: firebaseApp,
       config: {},
       dispatch: store.dispatch,
       createFirestoreInstance // <- needed if using firestore
     }

// store.firebaseAuthIsReady.then(() => {

// })

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
