import React from 'react'

export default (props) => {
    return (
        <div className={"mdl-cell mdl-cell--" + props.cardSize + "-col mdl-card mdl-shadow--4dp overflow"} style={props.outerCardStyle}>
            <div className="mdl-card__title">
                <h1 className="mdl-card__title-text">{props.title}</h1>
            </div>
            <div style={props.style}>
                {props.children}
            </div>
        </div >
    )
}