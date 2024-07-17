import ListContent from "./ListContent";
import Articles from "./Articles";
import BlogPost from "./BlogPost";
import { Outlet } from "react-router-dom";
import useData from "../../hooks/useData";

const Content = () => {
  const { users } = useData();
  // console.log("Content Comp :", users);

  return (  
    <div className=" flex gap-2 my-2">
      <ListContent></ListContent>
      <Outlet></Outlet>
      <Articles></Articles>
      <BlogPost></BlogPost>
    </div>
  );
};

export default Content;
