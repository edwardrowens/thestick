import React from 'react'
import {Link} from 'react-router-dom'

export default (props) => {
    return (
        <div className="mdl-layout__drawer" onClick={props.onClick}>
            <span className="mdl-layout-title" style={{ backgroundColor: 'rgb(33,150,243)', color: 'white' }}>The Stick</span>
            <nav className="mdl-navigation">
                <Link className="mdl-navigation__link" to={'/'}>Home</Link>
                <Link className="mdl-navigation__link" to={'/overwatch'}>Overwatch</Link>
                <Link className="mdl-navigation__link" to={'/heroes'}>Heroes</Link>
            </nav>
        </div>
    )
}