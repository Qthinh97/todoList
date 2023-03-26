import { Link, useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

function AdminHeader(props) {
  console.log("🚀 ~ Header ~ props:", props);
  const { isShowSidebar, setIsShowSidebar } = props;
  // const handleToggleSidebar = () => {
  //   setIsShowSidebar(!isShowSidebar);
  // };

  const navigate = useNavigate();

  return (
    <div className="header">
      <button
        className="btn-close-siderbar"
        onClick={() => setIsShowSidebar(!isShowSidebar)}
      >
        Menu
      </button>
      <div className="header-wrapper">
        <img
          className="logo-img"
          src="./assets/img/logo/SVG_logo.svg.png"
          alt="Logo"
        />

        <div className="nav-menu-wrapper">
          <div className="nav-menu-drop">drop</div>
        </div>
        <button onClick={() => navigate("/login")}>Logout</button>
      </div>
    </div>
  );
}

export default AdminHeader;
