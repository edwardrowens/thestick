import React from 'react'

import HotsLeaderboardComponent from '../component/leaderboard/hots-leaderboard-component'

class HeroesContainer extends React.Component {
    render() {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell--3-col">
                    <HotsLeaderboardComponent gameModeKey={"QuickMatch"} gameModeDisplay={'Quick Match'}/>
                </div>
                <div className="mdl-cell--3-col">
                    <HotsLeaderboardComponent gameModeKey={"HeroLeague"} gameModeDisplay={'Hero League'}/>
                </div>
                <div className="mdl-cell--3-col">
                    <HotsLeaderboardComponent gameModeKey={"UnrankedDraft"} gameModeDisplay={'Unranked Draft'} />
                </div>
                <div className="mdl-cell--3-col">
                    <HotsLeaderboardComponent gameModeKey={"TeamLeague"} gameModeDisplay={'Team League'}/>
                </div>
            </div>
        )
    }
}

export default HeroesContainer