import { Box, Paper, Typography } from '@mui/material'
import React from 'react'


const Banner = ({title, desc, bannerImage}) => {
  return (
      <Paper sx={{padding: '20px',marginBottom: '40px',backgroundImage:`url(${bannerImage})`, backgroundPosition: 'center', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat',height: '140px', }}>
      <Typography variant = 'h4' sx={{color: '#fff'}}>{title}</Typography>
      <Typography sx={{color: '#fff', width: '200px'}}>{desc}</Typography>
      </Paper>
  )
}

export default Banner