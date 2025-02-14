import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import UserProvider from "./contexts/provider/UserProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>
  // </React.StrictMode>
);
