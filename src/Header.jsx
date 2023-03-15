function Header() {
  const hello = "hello dev";
  return (
    <div class="header">
      <button class="btn-close-siderbar">Menu</button>
      <div class="header-wrapper">
        <img
          class="logo-img"
          src="./assets/img/logo/SVG_logo.svg.png"
          alt="Logo"
        />

        <div class="nav-menu-wrapper">
          <div class="nav-menu-drop">drop</div>

          <div class="nav">
            <div class="nav-link">
              <a href="./Home.html">Home</a>
            </div>

            <div class="nav-link">
              <a href="./About.html">About</a>
              <div class="subnav">
                <div class="subnav-link">
                  <a href="./About.html">About 1</a>
                </div>

                <div class="subnav-link">
                  <a href="./About.html">About 2</a>
                </div>

                <div class="subnav-link">
                  <a href="./About.html">About 3</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/img/avatar/tải xuống.png"
          alt="avatar"
          class="avatar-img"
        />
      </div>
    </div>
  );
}

export default Header;
