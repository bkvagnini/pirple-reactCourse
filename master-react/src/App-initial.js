import React from 'react';

function Home(){
  var style1 = {
    color: "blue",
    fontSize: 30, //vs. font-size 
    marginLeft: 7
  }
  var greeting = "Hello, World!";
  var nums = 5+7;

  var func1 = function funct1() {
    console.log("some kind of function");
  }

  return ( //this is using JSX
    <div> /* this is required for the html to render correctly - no html comment, no single js comment */
      <h1 style={style1}> Heading - JSX Method</h1>
      <div>
        <p>{greeting} You owe me {nums} dollars!</p>
      <p className = "para2">This is JSX. I live in src/App.js</p>
      <p> You have </p>
      <p> {6*8}</p>
      <p> days to pay me </p>
      <p>{nums == 12 ? "True" : "False"} </p>
      <label htmlFor="input1">Some Data </label>
      <input id = "input1" name = "input1"></input>
      </div>
      <button onClick={func1}> Click me</button>
    </div>
  )
  }
 // return React.createElement("hi",{}, "Heading"); //the HTML way
 // export default Home;

 
//export default Home;
//export HomeTwo;


// per https://stackoverflow.com/questions/46039976/exporting-multiple-modules-in-react-js

//module.exports = {
//  Home: Home,
//  Home2: Home2
//}

// or this

export default Home;
// export {HomeTwo};



/* //This is the basic React App.js template
import React from 'react';

function App(){ //function name can be called anything (not just App) 
  return (
    <div>
      This is JSX
    </div>
  )
}

export default App; // This HAS to match the function name up above
*/

/* //This is the original file that was created
import logo from './logo.svg'; //this gets used later
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> //src for logo is a JSX variable, imported earlier
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br /> This file is edited.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
