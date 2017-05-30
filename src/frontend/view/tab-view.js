import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <div onClick={props.onClick}>
            <Link to={props.path} className={props.className}>{props.text}</Link>
        </div>
    )
}