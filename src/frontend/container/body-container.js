import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomeContainer from './home-container'
import HeroesContainer from './heroes-container'
import WowContainer from './wow-container'
import OverwatchContainer from './overwatch-container'

class BodyContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="page-content" style={{ width: '80%', margin: '0 auto' }} >
                    <Switch>
                        <Route exact path='/' component={HomeContainer} />
                        <Route exact path='/heroes' component={HeroesContainer} />
                        <Route exact path='/wow' component={WowContainer} />
                        <Route exact path='/overwatch' component={OverwatchContainer} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default BodyContainer