import React from 'react'
import MediaQuery from 'react-responsive'

import SpinnerView from './spinner-view'
import TableComponent from '../component/table-component'

export default (props) => {
    let content = <SpinnerView />
    if (props.playersLoaded) {
        content = <TableComponent rows={props.rows} header={props.header} style={{ width: '100%' }} />
    }
    return (
        <MediaQuery minDeviceWidth={1025}>
            {
                (matches) => {
                    if (matches) {
                        return (
                            <div className="mdl-cell mdl-cell--5-col mdl-card overflow hide-on-small-screen mdl-shadow--2dp" >
                                <div className="mdl-card__title">
                                    <h2 className="mdl-card__title-text">{props.title}</h2>
                                </div>
                                <div style={{ margin: '0 auto', width: '100%' }}>
                                    {content}
                                </div>
                            </div >
                        )
                    } else {
                        return (
                            <div className="mdl-cell mdl-cell--5-col mdl-card overflow hide-on-small-screen mdl-shadow--2dp" style={{ width: '100%', margin: 0 }}>
                                <div className="mdl-card__title">
                                    <h2 className="mdl-card__title-text">{props.title}</h2>
                                </div>
                                <div style={{ margin: '0 auto', width: '100%' }}>
                                    {content}
                                </div>
                            </div >
                        )
                    }
                }
            }
        </MediaQuery>
    )
}