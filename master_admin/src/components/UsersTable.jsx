import "./table.css";
import './usertable.css'
export const UserTable = ({ data }) => {
  return (
    <div className="table-wrapper">
      <table className="responsive-table users_table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Revenue</th>
            <th>Purchase</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td><button className={item.role=="admin"?"admin_btn":"user_btn"}>{item.role}</button></td>
              <td> $ {item.revennue}</td>
              <td> $ {item.parchase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
