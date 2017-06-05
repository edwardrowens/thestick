import React from 'react'
import { Table, Thead, Th } from 'reactable'

export default (props) => {
    return (
        <Table className="mdl-data-table mdl-js-data-table" sortable={true} style={props.style} >
            <Thead>
                {props.header}
            </Thead>
            {props.rows}
        </Table>
    )
}