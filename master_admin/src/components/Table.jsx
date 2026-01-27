import "./table.css";

export const Table = ({ data }) => {
  return (
    <div className="table-wrapper">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Asset Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.thumb}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.status}</td>
              <td>-</td>
            </tr>
          ))}
        </tbody>

        
      </table>
    </div>
  );
};
