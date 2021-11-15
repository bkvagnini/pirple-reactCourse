import React from 'react';

export class Signup extends React.Component{
    render () {
        return (
            <div> 
            <p>This is a basic Class Component, brought to you by signup.js.</p>
            <form>
                <label for="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" /><br /><br />
                <label for="lname">Last name:</label><br />
                <input type="text" id="lname" name="email" /><br /><br />
                <label for="email">email address:</label><br />
                <input type="text" id="email" name="email" /><br /><br />
            </form>
          </div>
        )
    }
};