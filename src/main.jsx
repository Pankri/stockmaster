import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage.jsx";
import { LoggedPage } from "./pages/LoggedPage.jsx";
import PrincipalMenu from "./pages/PrincipalMenu.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="logged" element={<LoggedPage />}>
        <Route path="inicio" element={<PrincipalMenu />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
