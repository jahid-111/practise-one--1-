import axios from "axios";
import { useEffect, useState } from "react";

const useApi = () => {
  const [users, setUsers] = useState([]);
  //   console.log(users);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the Users:", error);
      });
  }, []);

  return { users, setUsers };
};

export default useApi;
