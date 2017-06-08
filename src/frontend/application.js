import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './container/header-container'
import Body from './container/body-container'
import Drawer from './component/drawer-component'

class Application extends React.Component {
    render() {
        return (
            <Router>
                <div className="mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button mdl-layout--fixed-header">
                    <Header />
                    <Drawer />
                    <main className="mdl-layout__content" >
                        <Body />
                    </main>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Application />, document.getElementById('app'))