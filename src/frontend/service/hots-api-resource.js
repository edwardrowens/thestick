import { Client } from 'node-rest-client'
import Config from '../config/config'

export default class HotsApiResource {
    constructor(battleTag, id, gameMode) {
        this.battleTag = battleTag
        this.id = id
        this.gameMode = gameMode
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
                for (let leaderboardRankings of body.LeaderboardRankings) {
                    if (leaderboardRankings.GameMode == this.gameMode) {
                        callback([leaderboardRankings.LeagueRank, leaderboardRankings.CurrentMMR])
                        return
                    }
                }
            } else {
                console.error('Could not retrieve data for player ' + JSON.stringify(player))
                callback(null)
            }
        })
    }
}