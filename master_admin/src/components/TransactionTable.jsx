import "./transactiontable.css";

export const TransactionTable = ({ data = [] }) => {
  return (
    <div className="table-wrapper">
      <table className="responsive-table transaction_table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Payment Slip</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.transaction}</td>
              <td>{item.user}</td>
              <td>{item.email}</td>
              <td>$ {item.amount}</td>

              <td>
                <button
                  className={
                    item.status === "Completed"
                      ? "completed_btn"
                      : "pending_btn"
                  }
                >
                  {item.status}
                </button>
              </td>

              <td>
                <button className="download_btn">Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};