import React from 'react'
import Cookies from 'universal-cookie'

import './app.css'


const getDate = () => {
    var date = new Date()

    let year = date.getFullYear()
    let month = (1 + date.getMonth()).toString().padStart(2, '0')
    let day = date.getDate().toString().padStart(2, '0')

    return month + day + year
}

const pushupsDay = 'pushups' + getDate()
const cookies = new Cookies()

class App extends React.Component {

    state = {
        pushups: parseInt(cookies.get(pushupsDay)) || 0
    }

    addPushup = () => {
        var newPushups = this.state.pushups + 1
        this.setState({ pushups: newPushups })
        cookies.set(pushupsDay, newPushups)
    }

    removePushup = () => {
        var newPushups = this.state.pushups - 1
        this.setState({ pushups: newPushups })
        cookies.set(pushupsDay, newPushups)
    }

    render() {
        return (
            <div>
                <button onClick={this.removePushup}>Remove Pushup</button>
                <div class="container" onClick={this.addPushup}>
                    <h1>Pushups Manager</h1>
                    <p>a very simple website to track pushups</p>
                    <p>the count restarts everyday at 00:00</p>
                    <p>press the screen with your nose</p>
                    <div class="counterWrapper">
                        <div class="counter" >{this.state.pushups}</div>
                    </div>
                </div >
            </div >
        )
    }
}

export default App
