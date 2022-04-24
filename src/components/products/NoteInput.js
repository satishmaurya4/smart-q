import { InputBase, Typography, Paper, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

const NoteInput = () => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('')

    useEffect(() => {
        const pattern = new RegExp(/^[a-zA-Z\s]*$/);
        if (input === '') {
            setError('');
        } else if (!input.match(pattern)) {
            setError("Only text is allowed")
        } else {
            setError('')
        }
    }, [input])

  return (
      <Box sx={{display: 'flex', flexDirection: 'column', flex: 1}}>
          <Paper sx={{ flex: 1,  padding: '2px 5px' }}>
              <InputBase type='text' sx={ {width: '100%'}} value={input} onChange={(e) => setInput(e.target.value)}/>
                    </Paper>
          <Typography variant='p' sx={{color: 'tomato'}}>{error}</Typography>
      </Box>
  )
}

export default NoteInput