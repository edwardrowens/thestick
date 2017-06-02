import React from 'react'
import UUID from 'uuid/v4'

import TableRowView from '../view/table-row-view'

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
            data: this.props.data.map((d) => {
                <td className='mdl-data-table__cell--non-numeric' key={UUID()}>{d}</td>
            })
        })
    }

    render() {
        <TableRowView data={this.state.data} />
    }
}