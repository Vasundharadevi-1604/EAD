import React, { useEffect, useState } from "react";

const ApiCalls = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [print, setPrint] = useState([]);

  const getData = async (apiCall) => {
    const response = await fetch(apiCall);
    const data = await response.json();
    setPrint(data);
  };

  useEffect(() => {
    getData(url);
  }, []);

  return (
    <div style={{ textAlign: "left" }}>
      {print.map((eachItems) => (
        <div key={eachItems.id}>
          <h1 style={{ margin: '2px 0', padding: 0 }}>{eachItems.name}</h1>
          <h4 style={{ margin: '2px 0', padding: 0 }}>{eachItems.username}</h4>
          <h4 style={{ margin: '2px 0', padding: 0 }}>{eachItems.email}</h4>
          <h4 style={{ margin: '2px 0', padding: 0 }}>{eachItems.address.street}</h4>
          <h4 style={{ margin: '2px 0', padding: 0 }}>{eachItems.address.suite}</h4>
          <h4 style={{ margin: '2px 0', padding: 0 }}>{eachItems.address.city}</h4>
          <h4 style={{ margin: '2px 0', padding: 0 }}>{eachItems.address.zipcode}</h4>
          <h4 style={{ margin: '2px 0', padding: 0 }}>{eachItems.phone}</h4>
          <h4 style={{ margin: '2px 0', padding: 0 }}>{eachItems.website}</h4>
        </div>
      ))}
    </div>
  );
};

export default ApiCalls;
