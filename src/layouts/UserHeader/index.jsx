import { Link, useNavigate } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

function UserHeader() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-wrapper">
        <img className="logo-img" src="" alt="Logo" />

        <div className="nav-menu-wrapper">
          <div className="nav-menu-drop">drop</div>

          <div className="nav">
            <div className="nav-link">
              <Link to={ROUTES.USER.HOME}>
                <div>Home</div>
              </Link>
            </div>

            <div className="nav-link">
              <Link to={ROUTES.USER.ABOUT}>
                <div>About</div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => navigate(ROUTES.ADMIN.DASHBOARD)}>
            Dashboard
          </button>
          <button onClick={() => navigate(ROUTES.LOGIN)}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default UserHeader;
