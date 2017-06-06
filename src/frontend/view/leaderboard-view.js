import React from 'react'

import SpinnerView from './spinner-view'
import TableComponent from '../component/table-component'
import TitledResponsiveCardView from './titled-responsive-card-view'

export default (props) => {
    let content = <SpinnerView />
    if (props.playersLoaded) {
        content = <TableComponent rows={props.rows} header={props.header} style={{ width: '100%' }} />
    }
    return (
        <TitledResponsiveCardView title={props.title} cardSize={5} smallScreenStyle={{ width: '100%', margin: 0, marginTop: 20 }} style={{ margin: '0 auto', width: '100%' }}>
            {content}
        </TitledResponsiveCardView>
    )
}