import { Client } from 'node-rest-client'

export default class TwitchApiResource {
    constructor() {

    }

    send(callback) {
        let client = new Client()
        let args = {
            headers: {
                "Content-type": "application/json",
                "Client-ID" : process.env.TWITCH_CLIENT_ID
            }
        }
        client.get('https://api.twitch.tv/kraken/streams/thesticktv', args, (body, res) => {
            if (res.statusCode == 200) {
                if (!body) {
                    console.log("no body present for: " + res.url)
                    callback(null)
                    return
                }
                callback(body)
            } else {
                console.error('Could not retrieve data for player ' + this.battleTag)
                callback(null)
            }
        })
    }
}