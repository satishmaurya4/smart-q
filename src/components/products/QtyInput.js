import React, { useEffect, useState } from 'react'
import { Button, Paper, Typography, InputBase } from "@mui/material";
import { useDispatch } from 'react-redux';
import { getQty } from '../features/products/productSlice';


const QtyInput = () => {
    const [qty, setQty] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleQty = (e) => {
        setQty(e.target.value);
        
    }
    
    
    useEffect(() => {
        const pattern = new RegExp(/[1-9][0-9]*$/);
        if (qty ==='') {
            setError('')
        }
        else if (!qty.match(pattern)) {
            setError('0 and text are not allowed')
        } 
        else {
            setError('')
            dispatch(getQty(qty));
        }
        
    }, [qty])

    return (
      <> <Paper>
            <InputBase placeholder="Qty" sx={{ color: '#000', paddingLeft: '5px' }} type='text' value={qty} onChange={handleQty} />
            </Paper>
            <Typography variant='p' sx={{color:'tomato'}}>{error}</Typography>
            </>
  )
}

export default QtyInput