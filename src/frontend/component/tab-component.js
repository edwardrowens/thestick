import React from 'react'
import { Link } from 'react-router-dom'

import TabView from '../view/tab-view'

export default class TabComponent extends React.Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick(e) {
        this.props.onClick(this.props.name)
    }

    render() {
        let className = this.props.isActive ? "mdl-navigation__link is-active" : "mdl-navigation__link"
        return (
            <TabView className={className}
                onClick={this.onClick}
                text={this.props.text}
                path={this.props.path} />
        )
    }
}