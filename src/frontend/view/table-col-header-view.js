import React from 'react'

export default (props) => {
    const dataCols = props.data.map((e) => {
        <th className='mdl-data-table__cell--non-numeric'>{e}</th>
    })
    return (
        <tr>
            {dataCols}
        </tr>
    )
}