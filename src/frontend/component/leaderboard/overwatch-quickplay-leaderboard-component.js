import React from 'react'

import LeaderboardView from '../../view/leaderboard-view'

export default class OverwatchQuickplayLeaderboardComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            header: ['', 'Name', 'Wins', 'Playtime']
        }

        this.setState = this.setState.bind(this)
    }

    render() {
        let rows = []
        this.props.aggregatedPlayerData.forEach(data => {
            rows.push([
                { src: data.general.portraitUri, isImage: true },
                data.general.battleTag,
                data.quickplay.wins,
                data.quickplay.playtime
            ])
        })

        return (
            <LeaderboardView title={this.props.title}
                rows={rows}
                header={this.state.header}
                playersLoaded={this.props.playersLoaded}
                style={this.props.style} />
        )
    }
}