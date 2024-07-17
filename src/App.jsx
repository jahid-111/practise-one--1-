import { Route, Routes } from "react-router-dom";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import Layout from "./layout/LayoutRoot";
import Content from "./components/main/Content";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Content></Content>} />

        <Route path="home" element={<PageOne />} />
        <Route path="user" element={<PageTwo />} />

        <Route path="/content/:userName" element={<Content></Content>} />
      </Route>
    </Routes>
  );
}

export default App;
