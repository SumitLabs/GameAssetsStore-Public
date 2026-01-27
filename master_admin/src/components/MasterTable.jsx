import './mastertable.css'

const MasterTable = ({data}) => {
  return (
    <div className="table-wrapper">
      <table className="responsive-table master_table">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Asset Name</th>
            <th>Category</th>
            <th>Admin</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.thumb}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.admin}</td>
              <td>{item.status}</td>
              <td>-</td>
              <td><button className='round'>Publish</button> <button className='round'>Rejacted</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MasterTable