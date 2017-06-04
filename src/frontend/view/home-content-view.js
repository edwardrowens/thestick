import React from 'react'

export default (props) => {
    return (
        <div className="mdl-cell mdl-cell--6-col mdl-card mdl-shadow--2dp" style={props.style} >
            <div className="mdl-card__media">
                <img src={props.img} style={{ width: props.style.width, height: props.imgHeight}} />
            </div>
            <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">{props.title}</h2>
            </div>
            <div className="mdl-card--border">
                {props.children}
            </div>
        </div >
    )
}