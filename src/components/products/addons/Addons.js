import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import AddonsList from './AddonsList'

const Addons = ({foodname,submenu, foodid, cancelAddons}) => {
  return (
      <Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant='h5'>{foodname} Add-ons</Typography>
        <Button variant="text" disableRipple={true} onClick={()=>cancelAddons(foodid)}>Cancel</Button>
      </Box>
      <Typography variant='p' sx={{color: 'gray'}}>Choose Toppings</Typography>
      <AddonsList submenu={submenu} />
      <Box sx={{borderBottom: '2px dashed lightgray'}}></Box>
    </Box>
  )
}

export default Addons