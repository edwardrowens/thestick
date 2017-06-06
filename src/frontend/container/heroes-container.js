import React from 'react'

import Config from '../config/config'
import TitledResponsiveCardView from '../view/titled-responsive-card-view'
import HotsApiResource from '../service/hots-api-resource'
import HotsLeaderboardComponent from '../component/leaderboard/hots-leaderboard-component'

export default class HeroesContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            aggregatedPlayerData: { QuickMatch: [], HeroLeague: [], UnrankedDraft: [], TeamLeague: [] },
            gameModes: ['QuickMatch', 'HeroLeague', 'UnrankedDraft', 'TeamLeague'],
            playersLoaded: false,
            apiCallCount: 0
        }

        this.setState = this.setState.bind(this)
        this.onPlayersLoaded = this.onPlayersLoaded.bind(this)
    }

    componentWillMount() {
        Config.players.forEach((player) => {
            new HotsApiResource(player).send((leaderboardRankings) => {
                if (leaderboardRankings) {
                    this.state.gameModes.forEach(gameMode => {
                        leaderboardRankings.forEach(leaderboardRanking => {
                            if (leaderboardRanking.GameMode == gameMode) {
                                this.state.aggregatedPlayerData[gameMode].push({ battleTag: player.battleTag, leagueRank: leaderboardRanking.LeagueRank, currentMMR: leaderboardRanking.CurrentMMR })
                            }
                        })
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
            <TitledResponsiveCardView title="Leaderboards" cardSize={12} smallScreenStyle={{ width: '100%', margin: 0, marginBottom: 20 }}>
                <div className="mdl-grid" style={{ padding: 0 }}>
                    <HotsLeaderboardComponent title={'Quick Match'} aggregatedPlayerData={this.state.aggregatedPlayerData.QuickMatch} playersLoaded={this.state.playersLoaded} />>
                    <HotsLeaderboardComponent title={'Hero League'} aggregatedPlayerData={this.state.aggregatedPlayerData.HeroLeague} playersLoaded={this.state.playersLoaded} />
                    <HotsLeaderboardComponent title={'Unranked Draft'} aggregatedPlayerData={this.state.aggregatedPlayerData.UnrankedDraft} playersLoaded={this.state.playersLoaded} />
                    <HotsLeaderboardComponent title={'Team League'} aggregatedPlayerData={this.state.aggregatedPlayerData.TeamLeague} playersLoaded={this.state.playersLoaded} />
                </div>
            </TitledResponsiveCardView>
        )
    }
}