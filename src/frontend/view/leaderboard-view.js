import SpinnerView from './spinner-view'
import TableView from './table-view'
import TableColHeaderView from './table-col-header-view'
import TableRowView from './table-row-view'

export default (props) => {
    let display = <SpinnerView />
    if (props.playersLoaded) {
        let categories = <TableColHeaderView data={props.headers} />
        let tableRowData = []
        for (tableData in props.tableData) {
            let data = []
            for (let property in tableData) {
                if (tableData.hasOwnProperty(property)) {
                    data.push(tableData[property])
                }
            }
            tableRowData.push(<TableRowView data={data} />)
        }

        display = <TableView title={'Quick Match'}
            leaderboardCategories={categories}
            tableRowData={tableRowData} />
    }
    return (
        <div>
            <div className='mdl-card mdl-shadow--4dp'>
                <div className='mdl-card__title'>
                    <h2 className='mdl-card__title-text'>{props.title}</h2>
                    {display}
                </div>
            </div>
        </div>
    )
}