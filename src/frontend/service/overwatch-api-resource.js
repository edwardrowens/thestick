import { Client } from 'node-rest-client'
import Config from '../config/config'

export default class HotsApiResource {
    constructor(battleTag, id) {
        this.battleTag = battleTag
        this.id = id
    }

    send(callback) {
        let client = new Client()
        client.get('http://ow-api.herokuapp.com/profile/pc/us/' + this.battleTag + '-' + this.id, (body, res) => {
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