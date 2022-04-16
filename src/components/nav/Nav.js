import React, {useState} from 'react'
import styles from "./Nav.module.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";




const Nav = () => {

    const [isCloseOpen, setIsCloseOpen] = useState(false);
    const [input, setInput] = useState('');

  

    const closeToggleHandler = () => {
        setIsCloseOpen(true);
    }

    const inputHandler = (event) => {
        setInput(event.target.value);   
    }
    
    const clearInputHandler = () => {
        setInput('');
        setIsCloseOpen(false);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ background: "white" }}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src="./images/SmartQ Logo.png" alt="logo"
              style={{ height: "40px", objectFit: "contain" }}
            />
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                height: 30,
                borderRadius: "10px"
              }}
            >
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Item"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default Nav