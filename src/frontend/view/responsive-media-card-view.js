import React from 'react'
import MediaQuery from 'react-responsive'

import MediaCardView from './media-card-view'

export default (props) => {
    return (
        <MediaQuery minDeviceWidth={1025}>
            {
                (matches) => {
                    if (matches) {
                        return (
                            <MediaCardView style={props.style} size={props.size} title={props.title} img={props.img} contentStyle={props.contentStyle}>
                                {props.children}
                            </MediaCardView>
                        )
                    } else {
                        return (
                            <MediaCardView style={props.smallScreenStyle} size={props.size} title={props.title} img={props.img} contentStyle={props.contentStyle}>
                                {props.children}
                            </MediaCardView>
                        )
                    }
                }
            }

        </MediaQuery>
    )
}