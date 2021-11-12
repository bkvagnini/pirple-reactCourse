import React from 'react';

export class Clscom extends React.Component{
    render () {
        return (
            <div> 
            <p className = "para2">This is a basic Class Component, brought to you by Clscom.js.</p>
            <p> This is the data from the props in Class Component, via index.js - Clscom component: {this.props.classdata}</p>
            <p> This is additional data from the props in Class Component, via index.js - Clscom component: {this.props.newProp}</p>
            <p> Children Prop data (from the Class Component): {this.props.children}</p>
          </div>
        )
    }
};

