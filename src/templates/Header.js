const Header  = () => {
    const view = `
       
            <nav class="Header-main">
                <div class="container">
                    <div class="nav-wrapper">
                        <a class="brand-logo" href="/">
                            Rick And Morty Amazing project
                        </a>

                        
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li class=""><a href="/about">About</a></li>
                        </ul>
                    </div>
                    </div>
            </nav>
       

    `;
    return view;
}

export default Header;