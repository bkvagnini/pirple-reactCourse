import React from 'react';

export class Detail extends React.Component {
    render () {
        return (
            <div>
                <p>I have a laptop with {this.props.ram} of RAM, a {this.props.hdd} Hard Drive, and a {this.props.cpu} Processor - from Details.js </p>
            </div>
        )
    }
}

