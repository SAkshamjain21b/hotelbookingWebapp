import React from "react";

function Header() {
    return (<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="!#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown"></div> {/* i don't know how but without this line my button won't go to left of navbar*/}
        <button type="button" class="btn btn-outline-light">Login/Register</button>
    </nav>);
}

export default Header;