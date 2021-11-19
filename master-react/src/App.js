import React from 'react';
import {Clscom} from './Clscom';
import {Signup} from './signup';
import {Detail} from './Details';

function Home(props){

  return ( //this is using JSX
    <div> 
      <p className = "para2">This is a Functional Component,brought to you by App.js.</p>
      <p>Some Props from index.js-App component are here: {props.contentdata} </p>
      <p> Meet the kids: {props.children}</p>
      <h2> Nested class component starts here - from signup.js</h2>
      <p><Signup /></p>
      <Detail ram = "4GB" hdd = "500 GB" cpu = "Core i5" > </Detail>
      <Detail ram = "8GB" hdd = "1 TB" cpu = "Core i3" > </Detail>
      <Detail hdd = "2 TB" ram = "8GB"  cpu = "Core i7" > </Detail>
      <Detail hdd = "6 TB" ram = "32 GB" > </Detail>
      <Clscom />
    </div>
  )
  }

export default Home;

