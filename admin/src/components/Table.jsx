import "./table.css";

export const Table = ({ data = [] }) => {
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
            <tr key={`${item.name}-${index}`}>
              {/* Thumbnail as image */}
              <td className="thumb_cell">
                <img
                  src={item.thumb}
                  alt={item.name}
                  className="thumb_img"
                />
              </td>

              <td>{item.name}</td>
              <td>{item.category}</td>

              {/* Status Badge */}
              <td>
                <span
                  className={`status ${
                    item.status.toLowerCase() === "published"
                      ? "published"
                      : "draft"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td>-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};