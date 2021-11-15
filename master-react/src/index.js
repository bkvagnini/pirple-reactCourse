import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Clscom,} from './Clscom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App contentdata = "some data from index.js, courtesy of App">Child data from App Functional Component </App> 
  </React.StrictMode>,
  document.getElementById('root')
);

/*
ReactDOM.render (<App contentdata = "Some other data, changed from previous props, courtesy of App"/>, document.getElementById('data2'));

//Another way to write out the render statement

ReactDOM.render(
<Clscom classdata = "data from the class component, via classdata prop" newProp = "New prop component data via newProp prop">
  This is Child Prop data within the Component data
  </Clscom>, 
  document.getElementById('Clscom')
  );

*/ 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
