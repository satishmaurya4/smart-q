import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import {Paper} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getToppings } from '../../features/products/productSlice';

export default function AddonsList({submenu}) {
  const [checked, setChecked] = React.useState([]);
  const [newChecked, setNewChecked] = React.useState([]);
  const dispatch = useDispatch();
  const useProduct = useSelector(getAllProducts);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    // const newChecked = [...checked];
    
    // console.log('addon list', newChecked)
    
    if (currentIndex === -1) {
      setNewChecked([...newChecked, value])
    } else {
      const tempNewChecked = [...newChecked];
      tempNewChecked.splice(currentIndex, 1);
      setNewChecked(tempNewChecked);
    }
    
  };
  
  React.useEffect(() => {
    dispatch(getToppings([...checked]))
    setChecked(newChecked);
    
  }, [newChecked])
  
  React.useEffect(() => {
    dispatch(getToppings(checked))
  }, [checked])


  console.log("checked", checked)

  
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {
        
        submenu?.map((item) => {
        const labelId = `checkbox-list-label-${item}`;

        return (
          <Paper>
          <ListItem
            key={item}
            // secondaryAction={
            //   <IconButton edge="end" aria-label="comments">
            //     <CommentIcon />
            //   </IconButton>
            // }
            // disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(item)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(item) !== -1}
                  tabIndex={-1}
                  disableRipple = {true}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item} />
            </ListItemButton>
          </ListItem>
          </Paper>
        );
      })}
    </List>
  );
}
