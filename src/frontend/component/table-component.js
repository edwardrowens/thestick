import React from 'react'
import UUID from 'uuid/v4'

import TableView from '../view/table-view'
import TableRowView from '../view/table-row-view'

export default class TableComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            rows: []
        }

        this.setState = this.setState.bind(this)
    }

    componentWillMount() {
        console.log('mounting table component with rows: ' + rows)
        this.props.rows.forEach((row) => {
            this.setState({ rows: this.state.rows.concat(<TableRowView key={UUID()} data={row} />) })
        })
    }

    render() {
        <TableView headers={this.props.headers}
            title={this.props.title}
            rows={this.state.rows} />
    }
}