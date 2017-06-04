import React from 'react'
import TabComponent from '../component/tab-component'

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props)

        let homeActive = false
        let overwatchActive = false
        let heroesActive = false
        let wowActive = false
        let pathname = window.location.pathname

        if (pathname.includes('overwatch')) {
            overwatchActive = true
        } else if (pathname.includes('heroes')) {
            heroesActive = true
        } else if (pathname.includes('wow')) {
            wowActive = true
        } else {
            homeActive = true
        }

        this.state = {
            homeActive: homeActive,
            overwatchActive: overwatchActive,
            heroesActive: heroesActive,
            wowActive: wowActive
        }

        this.setState = this.setState.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onClick(name) {
        switch (name) {
            case 'home':
                this.setState({ homeActive: true, overwatchActive: false, heroesActive: false, wowActive: false })
                break
            case 'heroes':
                this.setState({ homeActive: false, overwatchActive: false, heroesActive: true, wowActive: false })
                break
            case 'overwatch':
                this.setState({ homeActive: false, overwatchActive: true, heroesActive: false, wowActive: false })
                break
            // case 'wow':
            //     this.setState({ homeActive: false, overwatchActive: false, heroesActive: false, wowActive: true })
            //     break
        }
    }

    render() {
        return (
            <div>
                <header className="mdl-layout__header mdl-layout__header--scroll">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">The Stick</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation">
                            <TabComponent name={'home'} onClick={this.onClick} isActive={this.state.homeActive} text={'Home'} path={'/'} />
                            {/*<TabComponent name={'wow'} onClick={this.onClick} isActive={this.state.wowActive} text={'WoW'} path={'/wow'} />*/}
                            <TabComponent name={'overwatch'} onClick={this.onClick} isActive={this.state.overwatchActive} text={'Overwatch'} path={'/overwatch'} />
                            <TabComponent name={'heroes'} onClick={this.onClick} isActive={this.state.heroesActive} text={'Heroes'} path={'/heroes'} />
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">The Stick</span>
                </div>
            </div>
        )
    }
}

export default HeaderContainer