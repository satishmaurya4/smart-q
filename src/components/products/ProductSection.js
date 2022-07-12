import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MdFoodBank } from "react-icons/md";
import { SiIfood } from "react-icons/si";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import { GiFullPizza, GiWineGlass, GiPapers } from "react-icons/gi";
import CakeIcon from "@mui/icons-material/Cake";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { getState } from "../features/products/productSlice";
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
        <Box
          sx={{
            p: 3,
            marginLeft: "120px",
            padding: "0",
            width: "704px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
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
  const [category, setCategory] = React.useState("");

  const useAllProducts = useSelector(getState);
  const {
    products: {
      extras: {
        categories: {
          Consumables: { bannerImage: consumablesBannerImage },
          Decorations: { bannerImage: decorationsBannerImage },
          Pizza: { bannerImage: pizzaBannerImage },
        },
      },
      menu,
    },
    filterProducts: { searchProduct },
  } = useAllProducts;

  const getCategory = (categoryName) => setCategory(categoryName);

  const transformedProduct = () => {
    let getMenu = menu;
    if (searchProduct) {
      getMenu = getMenu.filter((item) => {
        return item.foodname
          .toLowerCase()
          .trim()
          .includes(searchProduct.toLowerCase().trim());
      });
    } else if (category === "" || category) {
      getMenu = getMenu.filter((item) => {
        return item.category.toLowerCase().includes(category);
      });
    }

    return getMenu;
  };
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
      style={{ width: "800px" }}
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
          height: "400px",
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
          onClick={() => getCategory("")}
        />
        <Tab
          label="Pizzas"
          {...a11yProps(1)}
          classes={tabClasses}
          icon={<GiFullPizza fontSize="40px" />}
          disableRipple={true}
          sx={{
            width: "max-content",
            padding: "0px",
            textTransform: "capitalize",
          }}
          onClick={() => getCategory("pizza")}
        />
        <Tab
          label="Counsumables"
          {...a11yProps(2)}
          classes={tabClasses}
          icon={<GiWineGlass fontSize="40px" />}
          disableRipple={true}
          sx={{
            width: "max-content",
            padding: "0px",
            textTransform: "capitalize",
          }}
          onClick={() => getCategory("consumables")}
        />
        <Tab
          label="Decorations"
          {...a11yProps(3)}
          classes={tabClasses}
          icon={<GiPapers fontSize="40px" />}
          disableRipple={true}
          sx={{
            width: "max-content",
            padding: "0px",
            textTransform: "capitalize",
          }}
          onClick={() => getCategory("decorations")}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Banner
          title="Main Course"
          desc="When you have every favourite dishes in a plate"
          bannerImage={
            "https://cdn.pixabay.com/photo/2015/03/30/12/45/pizza-698635_1280.jpg"
          }
        />
        <Product menu={transformedProduct()} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Banner title="Pizzas" pizza bannerImage={pizzaBannerImage} />
        <Product menu={transformedProduct()} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Banner title="Consumables" bannerImage={consumablesBannerImage} />
        <Product menu={transformedProduct()} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Banner
          title="Decorations"
          bannerImage={
            "https://cdn.pixabay.com/photo/2017/09/23/12/40/catering-2778755__480.jpg"
          }
        />
        <Product menu={transformedProduct()} />
      </TabPanel>
    </Box>
  );
}
