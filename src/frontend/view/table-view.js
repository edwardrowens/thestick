import React from 'react'

export default (props) => {
    return (
        <div className='mdl-card mdl-shadow--4dp'>
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">{props.title}</h2>
            </div>
            <table className="mdl-data-table mdl-js-data-table">
                <thead>
                    <tr>
                        {props.leaderboardCategories}
                    </tr>
                </thead>
                <tbody>
                    {props.tableRowData}
                </tbody>
            </table>
        </div>
    )
}