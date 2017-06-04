import React from 'react'

import LeaderboardView from '../../view/leaderboard-view'

export default class OverwatchRankedLeaderboardComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            header: ['', 'Name', 'Wins', 'Losses', 'Draws', 'Games Played', 'Playtime', 'Rank']
        }

        this.setState = this.setState.bind(this)
    }

    render() {
        let rows = []
        this.props.aggregatedPlayerData.forEach(data => {
            rows.push([
                { src: data.general.portraitUri, isImage: true },
                data.general.battleTag,
                data.ranked.wins,
                data.ranked.losses,
                data.ranked.draw,
                data.ranked.gamesPlayed,
                data.ranked.playtime,
                data.ranked.rank
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