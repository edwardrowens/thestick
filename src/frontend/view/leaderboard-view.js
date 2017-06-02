import React from 'react'

import SpinnerView from './spinner-view'
import TableComponent from '../component/table-component'

export default (props) => {
    let display = <SpinnerView />
    if (props.playersLoaded) {
        display = <TableComponent rows={props.rows} headers={props.headers} title={props.title} />
    }
    return (
        <div>
            {props.display}
        </div>
    )
}