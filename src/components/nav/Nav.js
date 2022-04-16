import React, { useEffect, useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Nav = () => {
  const [isCloseOpen, setIsCloseOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleCloseIcon = () => {
    if (!input) {
      setIsCloseOpen(false);
      console.log("inside if");
    } else {
      setIsCloseOpen(true);
    }
  };

  const handleClearInput = () => {
    setInput("");
    setIsCloseOpen(false);
  };

  useEffect(() => {
    handleCloseIcon();
  }, [input]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: "white", }}>
        <Toolbar style={{display: "flex", justifyContent: "space-between", maxWidth: '1128px', width: '100%', margin: 'auto', padding: "0px" }}>
          <img
            src="./images/SmartQ Logo.png"
            alt="logo"
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
              borderRadius: "10px",
            }}
          >
            <IconButton
              disableRipple={true}
              sx={{ p: "10px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Item"
              inputProps={{ "aria-label": "search google maps" }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {isCloseOpen && (
              <IconButton
                disableRipple={true}
                sx={{ p: "10px" }}
                aria-label="clear search"
                style={{ color: "tomato" }}
                onClick={handleClearInput}
              >
                <CloseOutlinedIcon />
              </IconButton>
            )}
          </Paper>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
