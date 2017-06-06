import React from 'react'
import MediaQuery from 'react-responsive'

import TitledCardView from './titled-card-view'

export default (props) => {
    return (
        <MediaQuery minDeviceWidth={1025}>
            {
                (matches) => {
                    if (matches) {
                        return (
                            <TitledCardView cardSize={props.cardSize} outerCardStyle={props.outerCardStyle}>
                                {props.children}
                            </TitledCardView>
                        )
                    } else {
                        return (
                            < TitledCardView cardSize={props.cardSize} outerCardStyle={props.smallScreenStyle}>
                                {props.children}
                            </TitledCardView>
                        )
                    }

                }
            }
        </MediaQuery>
    )
}