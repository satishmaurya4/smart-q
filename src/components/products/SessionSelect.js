import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ sessionList,getItemInfo }) {
  const [item, setItem] = React.useState("");
  const handleChange = () => {
    getItemInfo();
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Session</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={item}
          label="Select Session"
          onChange={handleChange}
        >
          {sessionList.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select>
      </FormControl>
      {/* <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          disableAnimation={true}
          variant="standard"
          focused={false}
        >
          Select Session
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={item}
          label="Item"
          onChange={handleChange}
        >
          {sessionList.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select>
      </FormControl> */}
    </Box>
  );
}
