import { Client } from 'node-rest-client'


export default class TwitchApiResource {
    constructor() {
    }

    send(callback) {
        let client = new Client()
        client.get('https://thestick.herokuapp.com/twitch/streaming', (body, res) => {
            if (res.statusCode == 200) {
                if (!body) {
                    console.log("no body present for: " + res.url)
                    callback(null)
                    return
                }
                callback(body)
            } else {
                callback(null)
            }
        })
    }
}