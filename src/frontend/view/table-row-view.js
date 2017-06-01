export default (props) => {
    const dataCols = props.data.map((e) => {
        <td className='mdl-data-table__cell--non-numeric'>{e}</td>
    })
    return (
        <div className='mdl-card mdl-shadow--4dp'>
            <div className='mdl-card__title'>
                <h2 className='mdl-card__title-text'>{props.title}</h2>
                <tr>
                    {dataCols}
                </tr>
                )
}