import React from 'react'

import LeaderboardView from '../../view/leaderboard-view'

export default class OverwatchLeaderboardComponent extends React.Component {
    constructor(props) {
        this.state = {
            header: ['Name', 'Level', 'Wins', 'Losses', 'Playtime', 'rank']
        }

        this.setState = this.setState.bind(this)
    }

    componentWillMount() {

    }

    render() {
        return (
            <LeaderboardView title={this.props.title}
                rows={rows}
                header={this.state.header}
                playersLoaded={this.props.playersLoaded} />
        )
    }
}