import React from 'react'

import Config from '../../../config/config'
import HotsApiResource from '../../../service/hots-api-resource'
import LeaderboardView from '../../../view/leaderboard-view'

export default class QuickMatchLeaderboardComponent extends React.Component {
    constructor(props) {
        super(props)
        this.setState = this.setState.bind(this)
        this.onPlayersLoaded = this.onPlayersLoaded.bind(this)

        this.numOfPlayers = Config.players.length
        this.apiCallCount = 0

        this.state = {
            playersLoaded: false,
            rankings: []
        }

        console.log("getting all player info! " + JSON.stringify(Config.players))
        Config.players.forEach((player) => {
            console.log("making call for player: " + JSON.stringify(player))
            new HotsApiResource(player.battleTag, player.id, 'QuickMatch').send((ranking) => {
                if (ranking) {
                    console.log("adding ranking: " + JSON.stringify(ranking))
                    this.setState({ rankings: this.state.rankings.concat(ranking) })
                    ++this.apiCallCount
                }
                if (this.apiCallCount == this.numOfPlayers) {
                    console.log("calling on players loaded")
                    this.onPlayersLoaded()
                }
            })
        })
    }

    onPlayersLoaded() {
        this.setState({ playersLoaded: true })
    }

    render() {
        return (
            <div>
                <LeaderboardView title='Quick Match'
                    headers={['League Rank', 'Current MMR']}
                    rows={this.state.rankings}
                    playersLoaded={this.state.playersLoaded} />
            </div>
        )
    }
}