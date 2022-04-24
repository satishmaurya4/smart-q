import React, { useEffect, useRef, useState } from "react";
import styles from "./Product.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Button, Paper, Typography, InputBase } from "@mui/material";
import { Box, minHeight } from "@mui/system";
import SessionSelect from './SessionSelect'
import Addons from "./addons/Addons";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, getAllProducts } from "../features/products/productSlice";
import QtyInput from "./QtyInput";
import NoteInput from "./NoteInput"

const Product = ({ menu }) => {
  const [isAddonOpen, setIsAddonOpen] = useState(null);

  const dispatch = useDispatch();
  const useProducts = useSelector(getAllProducts)

  const handleAddons = (id) => {
    setIsAddonOpen(id)
  }
  const cancelAddons = (id) => {
    if (isAddonOpen == id) {
      return setIsAddonOpen(null)
    } 
  }
  
  const handleCart = () => {
    dispatch(addToCart(useProducts.cartInfo));
  }
  console.log("cart", useProducts.cart)
  return menu.map((item, index) => {
    const { category, fooddescription, foodid, foodname, imageurl, price, sessionlist, submenu, showAddons } =
      item;
    return (
      <Paper
        key={foodid}
        sx={{
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            borderBottom: "2px dashed lightgray",
            padding: "5px",
                    display: "flex",
            gap: '20px'
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid #000",
            }}
          >
            <img
              src={imageurl}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column",flex: 1, gap: "5px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between"}}>
              <Typography variant="h5">{foodname}</Typography>
              <Typography variant="h5" sx={{ color: "#339cff" }}>
                ${price}
              </Typography>
            </Box>
            <Typography variant="p" sx={{ color: "gray" }}>
              {fooddescription}
            </Typography>
            {submenu && 
                    <Button variant="contained" disableRipple={ true}sx={{alignSelf: 'flex-start'}} onClick={()=>handleAddons(foodid)}>Add-ons</Button>
            }
          </Box>
            </Box>
            {
          isAddonOpen == foodid && submenu?.length > 0 ? <Addons foodname={foodname} submenu={submenu} foodid={foodid} cancelAddons={cancelAddons} /> : (

            <Box sx={{display: 'grid', gridTemplateColumns:'20% 56% 20%', justifyContent: 'space-between'}}>
                <Box>
                    <Typography>Quantity</Typography>
              
                  <QtyInput />
                
                </Box>
                <Box>
                    <Typography>Session</Typography>
                    <Paper>
                        <SessionSelect sessionList={ sessionlist}/>
                    </Paper>
                </Box>
                <Box>
                    <Typography>Subtotal</Typography>
                    <Paper sx={{padding: '5px', color: 'lightgray'}}>$0.00</Paper>
                </Box>
            </Box>
                )
            }
            <Box>
                <Typography>Note to the kitchen</Typography>
                <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
            <NoteInput />
                    <Button variant="contained" disableRipple={true} onClick={handleCart}>Add to Cart</Button>
                </Box>
            </Box>
      </Paper>
    );
  });
};

export default Product;
