import { Link } from "react-router-dom";
import useData from "../../hooks/useData";

const ListContent = () => {
  const { users } = useData();
  // console.log("ListContent Link", users);

  return (
    <div className=" flex flex-col w-2/12">
      <h1 className=" bg-slate-400 text-white text-4xl text-center">
        {" "}
        Users Name
      </h1>
      {users.map((user) => (
        <Link
          key={user.id}
          to={`/content/${user.name}`}
          className=" bg-green-200 text-xl  py-3 px-2 my-1"
        >
          {user.name}
        </Link>
      ))}
    </div>
  );
};

export default ListContent;
