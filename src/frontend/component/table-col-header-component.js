import React from 'react'
import UUID from 'uuid/v4'
import { Th } from 'reactable'

import TableEntryView from '../view/table-entry-view'

export default class TableColHeaderComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            headerColTags: []
        }

        this.setState = this.setState.bind(this)
    }

    componentWillMount() {
        console.log("MOUNTING HEADERS")
        this.setState({
            headerColTags: this.props.data.map((e) =>
                <Th key={UUID()} style={{ cursor: 'pointer' }} column={e}><strong>{e}</strong></Th>
            )
        })
        console.log("header col tags: " + JSON.stringify(this.state.headerColTags))
    }

    render() {
        let headerColTags = this.state.headerColTags
        return (
            {headerColTags}
        )
    }
}