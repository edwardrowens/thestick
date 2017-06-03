import React from 'react'

import Config from '../../config/config'
import HotsApiResource from '../../service/hots-api-resource'
import LeaderboardView from '../../view/leaderboard-view'

export default class HotsLeaderboardComponent extends React.Component {
    constructor(props) {
        super(props)
        this.setState = this.setState.bind(this)
        this.onPlayersLoaded = this.onPlayersLoaded.bind(this)

        this.state = {
            playersLoaded: false,
            rows: [],
            header: ['Name', 'Rank', 'MMR'],
            apiCallCount: 0
        }
    }

    onPlayersLoaded() {
        this.setState({ playersLoaded: true })
    }

    componentWillMount() {
        Config.players.forEach((player) => {
            let playerDataAndBattleTag = []
            playerDataAndBattleTag.push(player.battleTag)
            new HotsApiResource(player.battleTag, player.id, this.props.gameModeKey).send((playerData) => {
                if (playerData) {
                    playerDataAndBattleTag = playerDataAndBattleTag.concat(playerData)
                    this.state.rows.push(playerDataAndBattleTag)
                    ++this.state.apiCallCount
                }
                if (this.state.apiCallCount == Config.players.length) {
                    console.log("calling on players loaded")
                    this.setState({ tableData: this.state.rows })
                    this.onPlayersLoaded()
                }
            })
        })
    }

    render() {
        return (
            <div>
                <LeaderboardView title={this.props.gameModeDisplay}
                    rows={this.state.rows}
                    header={this.state.header}
                    playersLoaded={this.state.playersLoaded} />
            </div>
        )
    }
}