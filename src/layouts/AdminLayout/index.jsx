import { useState } from "react";
import { Outlet } from "react-router-dom";

import * as S from "./styles";

import AdminHeader from "../AdminHeader";
import Sidebar from "../Sidebar";

function AdminLayout() {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  return (
    <div className="main">
      <AdminHeader
        setIsShowSidebar={setIsShowSidebar}
        isShowSidebar={isShowSidebar}
      />
      <div className="container">
        <Sidebar isShowSidebar={isShowSidebar} />
        <S.AdminLayout isFull={isShowSidebar}>
          <Outlet />
        </S.AdminLayout>
      </div>
    </div>
  );
}

export default AdminLayout;
