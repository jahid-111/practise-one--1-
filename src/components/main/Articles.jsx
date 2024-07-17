import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";

const Articles = () => {
  const { userName } = useParams();

  const { users } = useData();

  const user = users.find((user) => user.name === userName);
  // console.log( "Finding This",user);

  return (
    <div className=" w-7/12 p-3  bg-gray-200">
      {user ? (
        <div className=" w-9/12 mx-auto flex flex-col justify-center items-start">
          <h2 className=" text-3xl"> Name : {user.name}</h2>
          <h4 className=" text-2xl"> User_name : {user.username}</h4>
          <p className=" text-xl flex flex-col ">
            <span> Mail : {user.email}</span>
            <span> Phone : {user.phone}</span>
            <span> Website : {user.website}</span>
          </p>
        </div>
      ) : (
        <h4> Please Select </h4>
      )}
    </div>
  );
};

export default Articles;
