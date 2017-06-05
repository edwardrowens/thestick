import React from 'react'

import SpinnerView from './spinner-view'
import TableComponent from '../component/table-component'

export default (props) => {
    let content = <SpinnerView />
    if (props.playersLoaded) {
        content = <TableComponent rows={props.rows} header={props.header} style={{ width: '100%' }} />
    }
    return (
        <div className="mdl-cell mdl-cell--5-col mdl-card overflow mdl-shadow--2dp" style={props.style}>
            <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">{props.title}</h2>
            </div>
            <div style={{ margin: '0 auto', width: '100%' }}>
                {content}
            </div>
        </div >
    )
}