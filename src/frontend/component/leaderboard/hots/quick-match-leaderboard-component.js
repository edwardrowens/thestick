import React from 'react'
import Config from '../../../config/config'
import HotsApiResource from '../../../service/hots-api-resource'
import SpinnerView from '../../../view/spinner-view'
import TableView from '../../../view/table-view'
import TableRowView from '../../../view/table-row-view'
import TableColHeaderView from '../../../view/table-col-header-view'
import LeaderboardView from '../../../view/leaderboard-view'

export default class QuickMatchLeaderboardComponent extends React.Component {
    constructor(props) {
        super(props)
        this.setState = this.setState.bind(this)
        this.onPlayersLoaded = this.onPlayersLoaded.bind(this)

        this.numOfPlayers = Config.players.length

        this.state = {
            playersLoaded: false,
            rankings: []
        }

        for (let player in Config.players) {
            new HotsApiResource(player.battleTag, player.id, 'QuickMatch').send((ranking) => {
                if (ranking) {
                    this.setState({ rankings: this.state.rankings.concat([ranking]) })
                }
                if (this.rankings.length == this.numOfPlayers) {
                    this.onPlayersLoaded()
                }
            })
        }
    }

    onPlayersLoaded() {
        this.setState({ playersLoaded: true })
    }

    render() {
        let categories = <TableColHeaderView data={['League Rank', 'Current MMR']} />
        let tableRowData = []
        for (ranking in rankings) {
            tableRowData.push(<TableRowView data={[ranking.leagueRank, ranking.currentMMR]} />)
        }
        let display = this.state.playersLoaded ? <SpinnerView /> : <TableView title={'Quick Match'}
            leaderboardCategories={categories}
            tableRowData={tableRowData}
        />
        return (
            <div>
                <LeaderboardView title='Quick Match'
                    headers={['League Rank', 'Current MMR']}
                    tableData={this.state.rankings} 
                    playersLoaded={this.state.playersLoaded}/>
            </div>
        )
    }
}