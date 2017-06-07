import React from 'react'

export default (props) => {
    let style = { margin: 0, padding: 0, border: 0 }
    let text = 'offline :('
    if (props.online) {
        style.color = 'rgba(66, 244, 78, 1)'
        text = 'We\'re live now!!'
    }
    return (
        <a style={{ marginLeft: 20, textDecoration: 'none', color: 'rgba(0, 0, 0, 1)' }} href='https://www.twitch.tv/thesticktv'>
            <div id="streaming" style={style} className="material-icons md-48">wifi</div>
            <div className="mdl-tooltip mdl-tooltip--right" htmlFor="streaming" style={{ background: '#000' }}>
                {text}
            </div>
        </a>
    )
}