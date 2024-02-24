import "./Users.scss";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

const API_URL = process.env.REACT_APP_API_URL;

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error("Error fetching the API: " + error);
      });
  }, [users]);

  return (
    <div className="page">
      <h1>
        <FormattedMessage id="users:title" />
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>
              <FormattedMessage id="users:name" />
            </th>
            <th>
              <FormattedMessage id="users:username" />
            </th>
            <th>
              <FormattedMessage id="users:email" />
            </th>
            <th>
              <FormattedMessage id="users:website" />
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
