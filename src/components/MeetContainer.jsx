import React, { Component } from 'react'

export default class MeetContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    createMeetingWithName = (name) => {
        const meetingOptions = {
            roomName: "abc12345678654321", //set unique roomname here.
            parentNode: document.getElementById("meeting-container"),
            interfaceConfigOverwrite: {
                filmStripOnly: false,
                SHOW_JITSI_WATERMARK: false,
                DEFAULT_REMOTE_DISPLAY_NAME: "Tuti user",
                SHOW_BRAND_WATERMARK: false,
                SHOW_WATERMARK_FOR_GUESTS: false,
                AUTO_PIN_LATEST_SCREEN_SHARE: "remote-only",
                JITSI_WATERMARK_LINK: "",
                TOOLBAR_BUTTONS: [
                    "microphone",
                    "camera",
                    "closedcaptions",
                    "desktop",
                    "fullscreen",
                    "fodeviceselection",
                    "hangup",
                    "profile",
                    "chat",
                    "recording",
                    "etherpad",
                    "sharedvideo",
                    "settings",
                    "raisehand",
                    "videoquality",
                    "filmstrip",
                    "invite",
                    "feedback",
                    "stats",
                    "shortcuts",
                    "tileview",
                    "download",
                    "help",
                    "mute-everyone",
                    "e2ee"
                ],
                APP_NAME: "Casper Meet",
                NATIVE_APP_NAME: "Casper Meet",
                PROVIDER_NAME: "Casper"
            },
            configOverwrite: {
                disableSimulcast: false
            }
        };

        const meetingApi = new window.JitsiMeetExternalAPI("meet.caspergeek.com", meetingOptions);


        meetingApi.addEventListener('videoConferenceJoined', () => {
          
        })

    }

    componentDidMount() {
        this.createMeetingWithName();
    }



    render() {
        return (
            <div className="meet-container" id="meeting-container">

            </div>
        )
    }
}
