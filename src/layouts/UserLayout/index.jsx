import { Outlet } from "react-router-dom";

import * as S from "./styles";

import Footer from "../Footer";
import Header from "../UserHeader";

function UserLayout() {
  return (
    <div className="main">
      <Header />
      <S.UserLayout>
        <Outlet />
      </S.UserLayout>
      <Footer />
    </div>
  );
}

export default UserLayout;
