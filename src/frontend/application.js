import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'

import Header from './container/header-container'
import Body from './container/body-container'

class Application extends React.Component {
    render() {
        return (
            <Router>
                <div className="mdl-layout mdl-js-layout">
                    <Header />
                    <Body />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Application />, document.getElementById('app'))