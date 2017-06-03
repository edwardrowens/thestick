import React from 'react'
import UUID from 'uuid/v4'
import { Td } from 'reactable'

import TableEntryView from '../view/table-entry-view'

export default class TableRowComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }

        this.setState = this.setState.bind(this)
    }

    componentWillMount() {
        this.setState({
            data: this.props.data.map((d) =>
                <Td key={UUID()}>{d}</Td>
            )
        })
    }

    render() {
        return (
            <TableEntryView data={this.state.data} />
        )
    }
}