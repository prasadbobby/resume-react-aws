import React, { Component } from 'react'

export default class States extends Component {
   
    constructor(){
        super();
        this.state={
            name: "Bobby"
        }
    }
    render() {
        
        return (
            <div>
            <h1>It's a{this.state.name}</h1>        
            </div>
        )
    }
}
