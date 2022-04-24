import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MdFoodBank } from "react-icons/md";
import { SiIfood } from "react-icons/si";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import CakeIcon from "@mui/icons-material/Cake";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import { Paper } from "@mui/material";
import Banner from "../banner/Banner";
import Product from "./Product";



const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  tab: {
    color: "#9ee2ff",
    "&.Mui-selected": {
      color: "#339cff",
    },
  },
  icon: {
    fontSize: "40px",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      sx={{ border: "1px solid" }}
    >
      {value === index && (
        <Box sx={{ p: 3, marginLeft: "120px",padding: '0', width: '704px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}



export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  
  const useAllProducts = useSelector(getAllProducts);
  const {
    products: { extras: { categories: { Consumables: { bannerImage } } }, menu },
    filterProducts:{searchProduct}
  } = useAllProducts;
  const transformedProduct = () => {
    let getMenu = menu;
    if (searchProduct) {
      getMenu = getMenu.filter((item) => {
        return item.foodname.toLowerCase().trim().includes(searchProduct.toLowerCase().trim());
      });
      console.log('inside search products', getMenu);
    }

    return getMenu;

  }
  const classes = useStyles();
  const tabClasses = { root: classes.tab };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "auto",
        
      }}
      style={{width: '800px',}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        scrollButtons="none"
        TabIndicatorProps={{ sx: { display: "none" } }}
        textColor="secondary"
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 2,
          borderColor: "#9ee2ff",
          position: "fixed",
          paddingRight: "5px",
          height: '400px'
        }}
      >
        <Tab
          label="Main Course"
          {...a11yProps(0)}
          classes={tabClasses}
          icon={<MdFoodBank fontSize="40px" />}
          disableRipple={true}
          sx={{
            width: "max-content",
            padding: "0px",
            textTransform: "capitalize",
          }}
        />
        <Tab
          label="Snacks"
          {...a11yProps(1)}
          classes={tabClasses}
          icon={<SiIfood fontSize="40px" />}
          disableRipple={true}
          sx={{
            width: "max-content",
            padding: "0px",
            textTransform: "capitalize",
          }}
        />
        <Tab
          label="Special Meals"
          {...a11yProps(2)}
          classes={tabClasses}
          icon={<DinnerDiningIcon sx={{ fontSize: "40px" }} />}
          disableRipple={true}
          sx={{
            width: "max-content",
            padding: "0px",
            textTransform: "capitalize",
          }}
        />
        <Tab
          label="Desert"
          {...a11yProps(3)}
          classes={tabClasses}
          icon={<CakeIcon sx={{ fontSize: "40px" }} />}
          disableRipple={true}
          sx={{
            width: "max-content",
            padding: "0px",
            textTransform: "capitalize",
          }}
        />
        <Tab
          label="Beverages"
          {...a11yProps(4)}
          classes={tabClasses}
          icon={<EmojiFoodBeverageIcon sx={{ fontSize: "40px" }} />}
          disableRipple={true}
          sx={{
            width: "max-content",
            padding: "0px",
            textTransform: "capitalize",
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Banner title="Main Course" desc="When you have every favourite dishes in a plate"
          bannerImage={bannerImage}
        />
        <Product menu = {transformedProduct()} />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Banner title="Snacks" />
      
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Banner title="Special Meals" />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Banner title="Desert" />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Banner title="Beverages" />
      </TabPanel>
    </Box>
  );
}


