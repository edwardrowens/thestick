import React from 'react'
import { Table, Thead, Th } from 'reactable'
import TableRowComponent from '../component/table-col-header-component'

export default (props) => {
    return (
        <Table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp" sortable={true} >
            <Thead>
                {props.header}
            </Thead>
            {props.rows}
        </Table>
    )
}