import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Component/Main';
import Home from './Component/Home';
import Test from './Component/Test';
import WithMaterialUI from './Component/WithMaterialUI';



ReactDOM.render(
  <React.StrictMode>
    <WithMaterialUI />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
