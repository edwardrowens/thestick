import React from 'react'

import Config from '../config/config'
import TitledResponsiveCardView from '../view/titled-responsive-card-view'
import OverwatchGeneralLeaderboardComponent from '../component/leaderboard/overwatch-general-leaderboard-component'
import OverwatchRankedLeaderboardComponent from '../component/leaderboard/overwatch-ranked-leaderboard-component'
import OverwatchQuickplayLeaderboardComponent from '../component/leaderboard/overwatch-quickplay-leaderboard-component'
import OverwatchApiResource from '../service/overwatch-api-resource'

export default class OverwatchContainer extends React.Component {
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
            new OverwatchApiResource(player).send((playerData) => {
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
            <TitledResponsiveCardView title="Leaderboards" cardSize={12}>
                <div className="mdl-grid" style={{ padding: 0 }}>
                    <OverwatchGeneralLeaderboardComponent title={'General'} aggregatedPlayerData={this.state.aggregatedPlayerData} playersLoaded={this.state.playersLoaded} style={{ width: 300 }} />
                    <OverwatchQuickplayLeaderboardComponent title={'Quickplay'} aggregatedPlayerData={this.state.aggregatedPlayerData} playersLoaded={this.state.playersLoaded} style={{ width: 350 }} />
                    <OverwatchRankedLeaderboardComponent title={'Ranked'} aggregatedPlayerData={this.state.aggregatedPlayerData} playersLoaded={this.state.playersLoaded} style={{ width: 690 }} />
                </div>
            </TitledResponsiveCardView>
        )
    }
}