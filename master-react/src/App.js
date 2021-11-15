import React from 'react';

import {Signup} from './signup';

function Home(props){

  return ( //this is using JSX
    <div> 
      <p className = "para2">This is a Functional Component,brought to you by App.js.</p>
      <p>Some Props from index.js-App component are here: {props.contentdata} </p>
      <p> Meet the kids: {props.children}</p>
      <h2> Nested class component starts here - from signup.js</h2>
      <p><Signup /></p>
    </div>
  )
  }

export default Home;

