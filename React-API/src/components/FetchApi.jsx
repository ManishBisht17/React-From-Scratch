import React, { useEffect, useState } from "react";
import axios from "axios";
function FetchApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div>
      {data.map((res) => (
        <li key={res.id}>{res.title}</li>
      ))}
    </div>
  );
}

export default FetchApi;
