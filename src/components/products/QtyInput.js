import React, { useEffect, useState } from 'react'
import { Button, Paper, Typography, InputBase } from "@mui/material";
import { useDispatch } from 'react-redux';
import { getQty } from '../features/products/productSlice';


const QtyInput = ({id, onItemInfoChange }) => {
    const [qty, setQty] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    // const handleQty = (e) => {
    //     setQty(e.target.value);
    // }
    
    
    // useEffect(() => {
    //     const pattern = new RegExp(/[1-9][0-9]*$/);
    //     if (qty ==='') {
    //         setError('')
    //     }
    //     else if (!qty.match(pattern)) {
    //         setError('0 and text are not allowed')
    //     } 
    //     else {
    //         setError('')
    //         dispatch(getQty({qty, id}));
    //     }
        
    // }, [qty])

    return (
      <> <Paper>
            <InputBase placeholder="Qty" sx={{ color: '#000', paddingLeft: '5px', height: '56px' }} type='text' onChange={(e)=>onItemInfoChange(e, id)} name="qty" />
            </Paper>
            <Typography variant='p' sx={{color:'tomato'}}>{error}</Typography>
            </>
  )
}

export default QtyInput