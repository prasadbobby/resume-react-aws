import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>my name is {this.props.name} & {this.props.college}</h1>
            </div>
        )
    }
}
