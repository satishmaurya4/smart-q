import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import styles from "./Cart.module.css"

const Cart = () => {
    return (
        <Paper sx={{width:'280px',height: '400px', borderRadius: '10px',position: 'fixed', right: '70px',overflow:'hidden'}}>
      <Box >
          <Typography variant='h5' sx={{backgroundColor: '#339cff', color:'#fff', padding: '5px', marginBottom: '40px'}}>Cart Summary</Typography>
      </Box>
        </Paper>
  )
}

export default Cart