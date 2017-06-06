import React from 'react'
import MediaQuery from 'react-responsive'

export default (props) => {
    return (
        <MediaQuery minDeviceWidth={1025}>
            {
                (matches) => {
                    if (matches) {
                        return (
                            <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp overflow">
                                <div className="mdl-card__title">
                                    <h1 className="mdl-card__title-text">{props.title}</h1>
                                </div>
                                <div style={props.style}>
                                    {props.children}
                                </div>
                            </div >
                        )
                    } else {
                        return (
                            <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp overflow" style={{ width: '100%', margin: 0 }}>
                                <div className="mdl-card__title">
                                    <h1 className="mdl-card__title-text">{props.title}</h1>
                                </div>
                                <div style={props.style}>
                                    {props.children}
                                </div>
                            </div >
                        )
                    }
                }

            }
        </MediaQuery>
    )
}