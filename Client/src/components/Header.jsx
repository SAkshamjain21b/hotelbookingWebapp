import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import Signup from "./signup/Signup";
import Login from "./signup/Login";
import { Avatar, Toolbar, Typography,Button } from "@mui/material";
import { Link } from "react-router-dom";


function Header() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const user = null;


    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="!#">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown"></div> {/* i don't know how but without this line my button won't go to left of navbar*/}

        <Toolbar className="toolbar" >
            {user ? (
                <div className="profile">
                    <Avatar className="purple" alt={user.result.name} src={user.result.imageUrl} >
                            {user.result.name.charAt(0)} 
                    </Avatar>
                    <Typography className="userName" varient="h6">{user.result.name}</Typography>
                    <Button varient="contained" className="logout" color="secondary">Logout</Button>
                </div>
            ): (
                    <Button component={Link} to="/auth" varient="contained" color="primary" >Sign In</Button>
            )}
        </Toolbar>










        <button type="button" className="btn btn-outline-light" onClick={handleOpen} >Login/Register</button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
           <Signup />
        </Modal>
    </nav>);
}

export default Header;