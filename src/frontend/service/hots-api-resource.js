import { Client } from 'node-rest-client'
import Config from '../config/config'

export default class HotsApiResource {
    constructor(player) {
        this.battleTag = player.battleTag
        this.id = player.id
    }

    send(callback) {
        let client = new Client()
        client.get('https://api.hotslogs.com/Public/Players/1/' + this.battleTag + '_' + this.id, (body, res) => {
            if (res.statusCode == 200) {
                if (!body) {
                    console.log("no body present for: " + res.url)
                    callback(null)
                    return
                }
                callback(body.LeaderboardRankings)
            } else {
                console.error('Could not retrieve data for player ' + this.battleTag)
                callback(null)
            }
        })
    }
}