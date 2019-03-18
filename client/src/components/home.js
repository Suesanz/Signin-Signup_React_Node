import React, {Component} from 'react'
import bg from "./Solid-color-wallpapers-04-1920x1200.jpg"

class Home extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h1>Welcome!! </h1>
                <img src={bg}/>
            </div>
        )

    }
}

export default Home
