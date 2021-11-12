import React from 'react';

function Home(props){

  return ( //this is using JSX
    <div> 
      <p className = "para2">This is a Functional Component,brought to you by App.js.</p>
      <p>Some Props from index.js are here: {props.contentdata} </p>
    </div>
  )
  }

export default Home;

