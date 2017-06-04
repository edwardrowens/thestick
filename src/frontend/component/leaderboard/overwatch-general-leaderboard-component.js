import React from 'react'

import LeaderboardView from '../../view/leaderboard-view'

export default class OverwatchLeaderboardComponent extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            header: ['', 'Name', 'Level']
        }

        this.setState = this.setState.bind(this)
    }

    render() {
        let rows = []
        this.props.aggregatedPlayerData.forEach(data => {
            rows.push([{ src: data.general.portraitUri, isimage: true }, data.general.battleTag, data.general.level])
        })
        return (
            <LeaderboardView title={this.props.title}
                rows={rows}
                header={this.state.header}
                playersLoaded={this.props.playersLoaded} />
        )
    }
}