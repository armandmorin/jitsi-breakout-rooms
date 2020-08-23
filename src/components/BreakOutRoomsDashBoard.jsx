import React, { Component } from 'react'
import MeetContainer from './MeetContainer'

export default class BreakOutRoomsDashBoard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             meetRoomName :""
        }
    }

    generateRandomRoomName() {
        
    }
    

    render() {
        return (
            <div className="dashboard">
                <div>
                    <p>Rooms</p>
                    <button>Room 1</button>
                    <button>Room 2</button>
                    <button>Room 3</button>
                    <MeetContainer meetRoomName="hello"/>
                </div>
            </div>
        )
    }
}
