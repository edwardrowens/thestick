import React from 'react'
import MediaQuery from 'react-responsive'

export default (props) => {
    return (
        <MediaQuery minDeviceWidth={1025}>
            {
                (matches) => {
                    if (matches) {
                        return (
                            <div className="mdl-cell mdl-cell--6-col mdl-card mdl-shadow--2dp" style={props.style} >
                                <div className="mdl-card__media">
                                    <img src={props.img} style={{ width: '100%', height: 'auto' }} />
                                </div>
                                <div className="mdl-card__title">
                                    <h2 className="mdl-card__title-text">{props.title}</h2>
                                </div>
                                <div className="mdl-card--border">
                                    {props.children}
                                </div>
                            </div >
                        )
                    } else {
                        let style = props.style ? props.style : {}
                        style.width = '100%'
                        style.margin = 0
                        style.marginTop = 20
                        return (
                            <div className="mdl-cell mdl-cell--6-col mdl-card mdl-shadow--2dp" style={style} >
                                <div className="mdl-card__media">
                                    <img src={props.img} style={{ width: '100%', height: 'auto' }} />
                                </div>
                                <div className="mdl-card__title">
                                    <h2 className="mdl-card__title-text">{props.title}</h2>
                                </div>
                                <div className="mdl-card--border" style={{ width: '100%' }}>
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