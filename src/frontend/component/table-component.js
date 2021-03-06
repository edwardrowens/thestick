import React from 'react'
import UUID from 'uuid/v4'

import { Td, Tr, Th } from 'reactable'

import TableView from '../view/table-view'

export default class TableComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            header: [],
            rows: []
        }

        this.setState = this.setState.bind(this)
        this.onSort = this.onSort.bind(this)
    }

    onSort(header) {
        console.log("sort called!")
        // map the headers
        let headerColTags = this.props.header.map((e) => {
            let className = ''
            if (header.column == e) {
                if (header.direction == 1) {
                    className = 'mdl-data-table__header--sorted-ascending'
                } else if (header.direction == -1) {
                    className = 'mdl-data-table__header--sorted-descending'
                }
            }
            return <Th className={className} key={UUID()} style={{ cursor: 'pointer' }} column={e}><strong>{e}</strong></Th>
        })
        this.setState({ header: headerColTags })
    }

    componentWillMount() {
        // map the rows
        let tableRows = []
        this.props.rows.forEach((row) => {
            let rowData = []
            for (let i = 0; i < row.length; ++i) {
                let isObject = row[i] instanceof Object
                if (isObject && row[i].isImage) {
                    rowData.push(
                        <Td key={UUID()} column={this.props.header[i]}>
                            <img style={{ width: 35, height: 35 }} src={row[i].src} />
                        </Td>
                    )
                } else if (!row[i]) {
                    rowData.push(<Td key={UUID()} column={this.props.header[i]}>{0}</Td>)
                }
                else {
                    rowData.push(<Td key={UUID()} column={this.props.header[i]}>{row[i]}</Td>)
                }
            }
            tableRows.push(<Tr key={UUID()}>{rowData}</Tr>)
        })

        // map the headers
        let headerColTags = this.props.header.map((e) => {
            let className = ''
            if (this.props.defaultSort) {
                if (this.props.defaultSort.column == e) {
                    if (this.props.defaultSort.direction == 'asc') {
                        className = 'mdl-data-table__header--sorted-ascending'
                    } else if (this.props.defaultSort.direction == 'desc') {
                        className = 'mdl-data-table__header--sorted-descending'
                    }
                }
            }
            return <Th className={className} key={UUID()} style={{ cursor: 'pointer' }} column={e}><strong>{e}</strong></Th>
        })

        this.setState({
            rows: tableRows,
            header: headerColTags
        })
    }

    render() {
        return (
            <TableView header={this.state.header}
                title={this.props.title}
                rows={this.state.rows}
                style={this.props.style}
                defaultSort={this.props.defaultSort}
                onSort={this.onSort} />
        )
    }
}