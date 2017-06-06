import React from 'react'
import UUID from 'uuid/v4'

import ContentView from '../view/content-view'
import ResponsiveTitledCardView from '../view/titled-responsive-card-view'
import ResponsiveMediaCardView from '../view/responsive-media-card-view'
import HomeContentView from '../view/home-content-view'
import Config from '../config/config'

export default class HomeContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            people: []
        }
    }

    componentWillMount() {
        Config.players.forEach(player => {
            this.state.people.push(
                <li key={UUID()} className="mdl-list__item mdl-list__item--two-line mdl-cell mdl-cell--6-col">
                    <span className="mdl-list__item-primary-content">
                        <i className="material-icons mdl-list__item-avatar">person</i>
                        <span>{player.battleTag}</span>
                        <span className="mdl-list__item-sub-title">{player.description}</span>
                    </span>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <ResponsiveTitledCardView title="About" cardSize={12} style={{ margin: '0 auto' }}>
                    <ResponsiveMediaCardView
                        style={{ padding: 10, width: 600 }}
                        title="Who's The Stick?"
                        img="/assets/theguys.jpg"
                        smallScreenStyle={{ width: '100%', margin: 0, marginTop: 20 }}>
                        <p>We are a bunch of nerdy guys that like to play video games together and make stuff.</p>
                        <ul className="mdl-list mdl-grid">
                            {this.state.people}
                        </ul>
                    </ResponsiveMediaCardView>
                </ResponsiveTitledCardView>
                <ResponsiveTitledCardView cardSize={12} title="News">
                    <div className="mdl-grid">
                        <ResponsiveMediaCardView
                            style={{ padding: 10, width: 300 }}
                            title="Daniol has a site!"
                            img="/assets/poppacooldownLogo.png"
                            smallScreenStyle={{ width: '100%', margin: 0, marginTop: 20 }}>
                            <p>Check out <a href="https://www.poppacooldown.com/">Poppa Cooldown</a> run by our very own Daniol! He puts up all kinds of content on everything gaming.</p>
                        </ResponsiveMediaCardView>
                        <ResponsiveMediaCardView
                            style={{ padding: 10, width: 300 }}
                            title="MarchWaltz can read!? And even write?!"
                            img="/assets/marchwaltz_book_cover.jpg"
                            smallScreenStyle={{ width: '100%', margin: 0, marginTop: 20 }} >
                            <p>Our very own MarchWaltz is writing a book and it'll be released sometime but IDK when cause he's always afk.</p>
                        </ResponsiveMediaCardView>
                        <ResponsiveMediaCardView
                            style={{ padding: 10, width: 300 }}
                            title="Eddie won't stop making shitty sites!"
                            img="/assets/eddie_logo.jpg"
                            smallScreenStyle={{ width: '100%', margin: 0, marginTop: 20 }} >
                            <p>EddieBeMe made another shitty site just like this one! <a href="http://www.eddieowens.me/">Check it out!</a></p>
                        </ResponsiveMediaCardView>
                    </div>
                </ResponsiveTitledCardView>
            </div>
        )
    }
}