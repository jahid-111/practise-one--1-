import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import UserProvider from "../contexts/provider/UserProvider";

const Layout = () => {
  return (
    <main className=" px-16 mx-auto">
      <UserProvider>
      <Header />
      <Outlet />
      </UserProvider>
    </main>
  );
};

export default Layout;
