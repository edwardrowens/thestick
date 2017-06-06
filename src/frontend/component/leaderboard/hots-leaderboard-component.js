import React from 'react'

import LeaderboardView from '../../view/leaderboard-view'
import Config from '../../config/config'

export default class HotsLeaderboardComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            header: ['Name', 'Rank', 'MMR']
        }

        this.setState = this.setState.bind(this)
    }

    render() {
        let rows = []
        console.log("data: " + this.props.aggregatedPlayerData)
        this.props.aggregatedPlayerData.forEach(data => {
            rows.push([data.battleTag, data.leagueRank, data.currentMMR])
        })
        return (
            <LeaderboardView title={this.props.title}
                rows={rows}
                header={this.state.header}
                playersLoaded={this.props.playersLoaded} />
        )
    }
}