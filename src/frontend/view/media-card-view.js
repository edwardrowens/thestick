import React from 'react'

export default (props) => {
    return (
        <div className={"mdl-cell mdl-cell--" + props.size + "-col mdl-card mdl-shadow--2dp"} style={props.style} >
            <div className="mdl-card__media">
                <img src={props.img} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">{props.title}</h2>
            </div>
            <div className="mdl-card--border" style={props.contentStyle}>
                {props.children}
            </div>
        </div >
    )
}