import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {SMContextProvider} from './context/SMContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfjKahQSnKE7Di5QPoCOLEC8Gj_PfxG1c",
  authDomain: "socialmedia-8ba0e.firebaseapp.com",
  projectId: "socialmedia-8ba0e",
  storageBucket: "socialmedia-8ba0e.appspot.com",
  messagingSenderId: "497475863264",
  appId: "1:497475863264:web:6690bbf7f9afadc0cf8685",
  measurementId: "G-0ZQDGR031W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <SMContextProvider>
    <App />
  </SMContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
