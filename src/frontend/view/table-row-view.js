import React from 'react'

export default (props) => {
    console.log("rendering table row view!")
    const dataCols = props.data.map((e) => {
        <td className='mdl-data-table__cell--non-numeric'>{e}</td>
    })
    return (
        <tr>
            {dataCols}
        </tr>
    )
}