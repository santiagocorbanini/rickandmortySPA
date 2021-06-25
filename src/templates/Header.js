const Header = () => {
    const view = `
    <div class="Header-main">
        <div class="Header-logo">
                <a href="#">
                    <img class="white-image" src="src/images/white-logo.png">
                    <img class="dark-image" src="src/images/dark-logo.png">
                </a>
        </div>
        <div class="Header-nav">
        <div class="change">
        <span class="toogle-text" id="texto-toogle"></span>
          <label class="theme-switch" for="checkbox">
              <input type="checkbox" id="checkbox" />
              <span class="slider round"></span>
        </label>
        </div>
        </div>
    </div>
      `;
      return view
};

export default Header
