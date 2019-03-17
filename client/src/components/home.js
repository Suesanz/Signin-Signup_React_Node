import React, { Component } from 'react'
import bg from "./Solid-color-wallpapers-04-1920x1200.jpg"
class Home extends Component {
    constructor() {
        super()
    }


    render() {

        return (
            <div>
                <h1>Welcome!! </h1>
               <img  src={bg}/>
                {/*<img src={require('Solid-color-wallpapers-04-1920x1200.jpg')} />*/}
            </div>
        )

    }
}

export default Home
