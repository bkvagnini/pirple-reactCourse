import React from 'react';
import {Detail} from './Details';

export class Clscom extends React.Component{
    //var api_url = "http://localhost:8000/api/"
    state = { //this could be JSON data from an API
        laptops: [ // this would be the beginning of the JSON data, starting with "[" 
            {ram: "128 GB", hdd: "4 TB", cpu: "386SX"}, 
            {ram: "256 GB"},
        ],
        desktops: [
            {ram: "128 MB", hdd: "5 MB", cpu: "Pentium II"}, 
            {ram: "128 GB", hdd: "4 TB", cpu: "486SX"}, 
        ],
    }
    render () {
        //var var1 = "64 GB";
    
        return (
            <div> 
            <p className = "para2">This is a basic Class Component, brought to you by Clscom.js.</p>
            <p> This is the data from the props in Class Component, via index.js - Clscom component: {this.props.classdata}</p>
            <p> This is additional data from the props in Class Component, via index.js - Clscom component: {this.props.newProp}</p>
            <p> Children Prop data (from the Class Component): {this.props.children}</p>
            <p> <strong>The statement below is from Details.js, but the value for Ram is supplied by a variable in Clscom</strong></p>
            <Detail ram = {this.state.laptops[0].ram} hdd = {this.state.laptops[0].hdd} cpu = {this.state.laptops[0].cpu} />
            <Detail ram = {this.state.laptops[1].ram} hdd = {this.state.laptops[1].hdd} />
            <p> This is actually the details of the Desktop</p> 
            <Detail ram = {this.state.desktops[0].ram} hdd = {this.state.desktops[0].hdd} cpu = {this.state.desktops[0].cpu} />
          </div>
        )
    }
};

