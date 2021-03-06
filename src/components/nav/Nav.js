import React, { useEffect, useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {useDispatch, useSelector} from 'react-redux'
import { getState, getSearchedProduct} from '../features/products/productSlice'

const Nav = () => {
  const [isCloseOpen, setIsCloseOpen] = useState(false);
  // const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const appState = useSelector(getState);
  const { filterProducts: { searchProduct } } = appState;

  const handleCloseIcon = () => {
    if (!searchProduct) {
      setIsCloseOpen(false);
    } else {
      setIsCloseOpen(true);
    }
  };

  const handleClearInput = () => {
    dispatch(getSearchedProduct(""));
    setIsCloseOpen(false);
  };

  useEffect(() => {
    handleCloseIcon();
  }, [searchProduct]);

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
              value={searchProduct}
              onChange={(e) => dispatch(getSearchedProduct(e.target.value))}
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
