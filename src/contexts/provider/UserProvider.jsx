import { UserDataContext } from "../contex";
import useApi from "../../hooks/useApi";

const UserProvider = ({ children }) => {
  const { users, setUsers } = useApi();
  // console.log("UseProvider From API Loaded: ", users);

  return (
    <UserDataContext.Provider value={{ users, setUsers }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserProvider;
  