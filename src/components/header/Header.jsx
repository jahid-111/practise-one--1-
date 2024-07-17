import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-200 flex justify-between items-center ">
      <div className=" bg-red-500 h-20 w-20  p-3">
        <h3>Brand Logo</h3>
      </div>

      <nav>
        <ul>
          <li className=" flex gap-7 text-xl">
            <Link to="/">User</Link>
            <Link to="home">IntersectionObserver</Link>
            <Link to="user">UseEffect</Link>
          </li>
        </ul>
      </nav>

      <section className=" bg-green-400">
        <div>
          <h2 className="h-20 w-20  p-3">User</h2>
        </div>
      </section>
    </div>
  );
};

export default Header;
