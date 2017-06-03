import React from 'react'
import UUID from 'uuid/v4'

import { Td, Tr, Th } from 'reactable'

import TableView from '../view/table-view'
import TableRowComponent from './table-row-component'
import TableColHeaderComponent from './table-col-header-component'

export default class TableComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            header: {},
            rows: []
        }

        this.setState = this.setState.bind(this)
    }

    componentWillMount() {
        // map the rows
        let tableRows = []
        this.props.rows.forEach((row) => {
            let rowData = []
            for (let i = 0; i < row.length; ++i) {
                rowData.push(<Td key={UUID()} column={this.props.header[i]}>{row[i]}</Td>)
            }
            tableRows.push(<Tr key={UUID()}>{rowData}</Tr>)
        })

        // map the headers
        let headerColTags = this.props.header.map((e) =>
            <Th key={UUID()} style={{ cursor: 'pointer' }} column={e}><strong>{e}</strong></Th>
        )

        this.setState({
            rows: tableRows,
            header: headerColTags
        })
    }

    render() {
        return (
            <TableView header={this.state.header}
                title={this.props.title}
                rows={this.state.rows} />
        )
    }
}