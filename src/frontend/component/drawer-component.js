import React from 'react'

import DrawerView from '../view/drawer-view'

export default class DrawerComponent extends React.Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer()
    }

    render() {
        return (
            <DrawerView onClick={this.onClick} />
        )
    }
}