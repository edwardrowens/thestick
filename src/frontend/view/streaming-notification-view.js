import React from 'react'

export default (props) => {
    let style = { margin: '0 auto', padding: 0, border: 0 }
    let text = 'offline'
    if (props.online) {
        style.color = 'rgba(66, 244, 78, 1)'
        text = 'live!!'
    }
    return (
        <a target='_blank' style={{ marginRight: 20, textDecoration: 'none', color: 'rgba(0, 0, 0, 1)', textAlign: 'center' }} href='https://www.twitch.tv/thesticktv'>
            <div style={{ margin: '0 auto' }} id="streaming" style={style} className="material-icons md-48">wifi</div>
            <div className="mdl-tooltip mdl-tooltip--large" htmlFor="streaming" style={{ background: '#000', overflow: 'visible' }}>
                {text}
            </div>
        </a>
    )
}