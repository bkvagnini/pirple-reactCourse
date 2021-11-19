//This code is from https://www.geeksforgeeks.org/how-to-fetch-data-from-an-api-in-reactjs/
import React from 'react';
import './App.css';
export class APIApp extends React.Component {
    
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"http://localhost:8000/api/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Please wait some time.... </h1> </div> ;

    return (
    <div className = "APIApp">
        <h1> Fetch data from the Django API, using React </h1>  {
            items.map((item) => ( 
            <ol key = { item.id } >
                Title: { item.title }, 
                Body: { item.body }, 
             
                </ol>
            ))
        }
    </div>
);
}
}
