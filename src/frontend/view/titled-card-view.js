import React from 'react'

export default (props) => {
    return (
        <div className={"mdl-cell mdl-cell--" + props.size + "-col mdl-card mdl-shadow--4dp overflow"} style={props.style}>
            <div className="mdl-card__title">
                <h1 className="mdl-card__title-text">{props.title}</h1>
            </div>
            <div style={props.contentStyle}>
                {props.children}
            </div>
        </div >
    )
}