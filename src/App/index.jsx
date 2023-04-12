import { ThemeProvider } from "styled-components";
import { dark, light } from "../themes";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import * as S from "./styles";
import { ROUTES } from "../constants/routes";

import "../App.css";
import UserLayout from "../layouts/UserLayout";
import Dashboard from "../pages/admin/Dashboard";
import HomePage from "../pages/user/Home";
import AboutPage from "../pages/user/About";
import AdminLayout from "../layouts/AdminLayout";
import LoginPage from "../layouts/LoginLayout";
import ProductDetailPage from "../pages/user/ProductDetail";
import TodoList from "../pages/admin/Todolist";

function App() {
  const { theme } = useSelector((state) => state.common);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <div className="main">
        <div className="container">
          <Routes>
            <Route element={<AdminLayout />}>
              <Route path={ROUTES.ADMIN.DASHBOARD} element={<Dashboard />} />
              <Route path={ROUTES.ADMIN.TODOLIST} element={<TodoList />} />
            </Route>
            <Route element={<UserLayout />}>
              <Route path={ROUTES.USER.HOME} element={<HomePage />} />
              <Route path={ROUTES.USER.ABOUT} element={<AboutPage />} />
              <Route
                path={ROUTES.USER.PRODUCT_DETAIL}
                element={<ProductDetailPage />}
              />
            </Route>
            <Route element={<LoginPage />}>
              <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            </Route>
            <Route path="*" element={<div>404 not found</div>}></Route>
          </Routes>
          {/* <button onClick={() => setTheme("light")}>Light</button>
          <button onClick={() => setTheme("dark")}>Dark</button> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
