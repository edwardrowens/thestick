import React from 'react'

export default class LeaderboardComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='mdl-card mdl-shadow--4dp'>
                <div className='mdl-card__title'>
                    <h2 className='mdl-card__title-text'>Rankings</h2>
                </div>
            </div>
        )
    }
}