import { useContext } from "react";
import { UserDataContext } from "../contexts/contex";

const useData = () => {
  return useContext(UserDataContext);
};

export default useData;
