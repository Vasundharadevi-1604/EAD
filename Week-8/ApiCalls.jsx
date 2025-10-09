import React, { useState, useEffect } from "react";

const ApiCalls = () => {
  const URL = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);

  const ApiCall = (apiURL) => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    ApiCall(URL);
  }, []);

  return (
    <div>
      <h1>Welcome to CBIT</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiCalls;