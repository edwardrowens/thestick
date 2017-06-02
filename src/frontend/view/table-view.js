import React from 'react'

import TableColHeaderView from './table-col-header-view'
import TableRowView from './table-row-view'

export default (props) => {
    return (
        <div className='mdl-card mdl-shadow--4dp'>
            <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">{props.title}</h2>
            </div>
            <table className="mdl-data-table mdl-js-data-table">
                <thead>
                    <TableColHeaderView data={props.headers} />
                </thead>
                <tbody>
                    {props.tableRowData}
                </tbody>
            </table>
        </div>
    )
}