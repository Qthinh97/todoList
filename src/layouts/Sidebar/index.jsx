import { useLocation } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import * as S from "./styles";

function Sidebar(props) {
  const { isShowSidebar } = props;
  const { pathname } = useLocation();
  const SIDEBAR_ITEMS = [
    {
      title: "HomePage",
      path: ROUTES.USER.HOME,
    },
    {
      title: "About",
      path: ROUTES.USER.ABOUT,
    },
    {
      title: "Login",
      path: ROUTES.LOGIN,
    },
    {
      title: "Register",
      path: ROUTES.REGISTER,
    },
    {
      title: "TodoList",
      path: ROUTES.ADMIN.TODOLIST,
    },
  ];

  const renderSidebarItem = () => {
    return SIDEBAR_ITEMS.map((item, index) => (
      <S.sidebarItem key={index} to={item.path} active={pathname === item.path}>
        {item.title}
      </S.sidebarItem>
    ));
  };

  return (
    <S.sidebarWrapper isShow={isShowSidebar}>
      {renderSidebarItem()}
    </S.sidebarWrapper>
  );
}

export default Sidebar;
