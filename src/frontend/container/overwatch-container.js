import React from 'react'

import Config from '../config/config'
import OverwatchGeneralLeaderboardComponent from '../component/leaderboard/overwatch-general-leaderboard-component'
import OverwatchApiResource from '../service/overwatch-api-resource'

class OverwatchContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            aggregatedPlayerData: [],
            playersLoaded: false,
            apiCallCount: 0
        }

        this.setState = this.setState.bind(this)
        this.onPlayersLoaded = this.onPlayersLoaded.bind(this)
    }

    componentWillMount() {
        Config.players.forEach((player) => {
            new OverwatchApiResource(player.battleTag, player.id).send((playerData) => {
                if (playerData) {
                    this.state.aggregatedPlayerData.push({
                        general: {
                            battleTag: playerData.username,
                            level: playerData.level,
                            portraitUri: playerData.portrait,
                            levelFrameUri: playerData.levelFrameUri,
                            star: playerData.star
                        },
                        quickplay: {
                            playtime: playerData.playtime.quickplay,
                            wins: playerData.games.quickplay.won
                        },
                        ranked: {
                            wins: playerData.games.competitive.won,
                            losses: playerData.games.competitive.lost,
                            draw: playerData.games.competitive.draw,
                            gamesPlayed: playerData.games.competitive.played,
                            playtime: playerData.playtime.competitive,
                            rank: playerData.competitive.rank
                        }
                    })
                }
                ++this.state.apiCallCount
                if (this.state.apiCallCount == Config.players.length) {
                    console.log("players loaded")
                    console.log("data is " + JSON.stringify(this.state.aggregatedPlayerData))
                    this.onPlayersLoaded()
                }
            })
        })
    }

    onPlayersLoaded() {
        this.setState({ playersLoaded: true, aggregatedPlayerData: this.state.aggregatedPlayerData })
    }

    render() {
        return (
            <div className="mdl-grid">
                <OverwatchGeneralLeaderboardComponent title={'General Info'} aggregatedPlayerData={this.state.aggregatedPlayerData} playersLoaded={this.state.playersLoaded} />
            </div>
        )
    }
}

export default OverwatchContainer