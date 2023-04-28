import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Modal from '@mui/material/Modal';
import { AppBar, Box, Tab, Tabs } from "@mui/material";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useTheme } from "../Context/ThemeContext";
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";


const Header = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const {theme} = useTheme();

    const handleModalOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleValueChange = (e,v) => {
        setValue(v);
    }

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((res)=> {
            toast.success("Signed In with Google");
        })
        .catch((err)=> {
            toast.error(err.code || "Something went wrong");
        })
    }
    
  return (
    <div className="header">
        <div className="logo">
            LOGO
        </div>
        <div className="user-icon">
            <AccountCircleIcon onClick={handleModalOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div style={{width: "400px", textAlign: "center"}}>
                    <AppBar position="static" style={{background: "transparent"}}>
                          <Tabs
                            value={value}
                            variant="fullWidth"
                            onChange={handleValueChange}
                          >
                              <Tab label="login" style={{color: theme.textColor}}></Tab>
                              <Tab label="signup" style={{color: theme.textColor}}></Tab>
                        </Tabs>
                    </AppBar>
                      {value === 0 && <LoginForm />}
                      {value === 1 && <SignupForm />}

                      <Box>
                        <span>OR</span>
                        <GoogleButton
                            style={{
                                margin: "12px auto"
                            }}
                            onClick={handleGoogleSignIn}
                        />
                      </Box>
                </div>
            </Modal>
        </div>
    </div>
  )
}

export default Header