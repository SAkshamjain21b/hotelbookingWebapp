import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="!#"><InstagramIcon /></a>
        <a className="navbar-brand" href="!#"><FacebookIcon /></a>
        <a className="navbar-brand" href="!#"><TwitterIcon /></a>
        <a className="navbar-brand" href="!#"><YouTubeIcon /></a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown"></div> {/* i don't know how but without this line my button won't go to left of navbar */}
        <button type="button" className="btn btn-outline-light">Help</button>
    </nav>);
}

export default Footer;