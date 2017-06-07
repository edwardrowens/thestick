import React from 'react'

import TwitchApiResource from '../service/twitch-api-resource'
import StreamingNotificationView from '../view/streaming-notification-view'

export default class StreamingNotificationComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            streaming: false
        }

        this.setState = this.setState.bind(this)
        this.onStreamingLive = this.onStreamingLive.bind(this)
    }

    componentWillMount() {
        new TwitchApiResource().send((body) => {
            if (body.stream) {
                onStreamingLive()
            }
        })
    }

    onStreamingLive() {
        this.setState({ streaming: true })
    }

    render() {
        // if (this.state.streaming) {
            return (
                <StreamingNotificationView online={true} />
            )
        // } else {
        //     return (
        //         <StreamingNotificationView online={false} />
        //     )
        // }
    }
}