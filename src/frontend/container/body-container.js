import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MediaQuery from 'react-responsive'

import HomeContainer from './home-container'
import HeroesContainer from './heroes-container'
import WowContainer from './wow-container'
import OverwatchContainer from './overwatch-container'

class BodyContainer extends React.Component {
    render() {
        return (
            <MediaQuery minDeviceWidth={1025}>
                {
                    (matches) => {
                        if (matches) {
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
                        } else {
                            return (
                                <div>
                                    <div className="page-content" style={{ width: '100%', margin: '0 auto' }} >
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
                }
            </MediaQuery>
        )
    }
}

export default BodyContainer