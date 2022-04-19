import React from 'react'
import styles from "./Sidebar.module.css";
import {MdFoodBank} from "react-icons/md"
import {SiIfood} from "react-icons/si"
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import CakeIcon from '@mui/icons-material/Cake';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <Tab icon={ <MdFoodBank />}title="Main Course"/>
            <Tab icon={<SiIfood /> }title="Snacks"/>
            <Tab icon={<DinnerDiningIcon />} title="Special Meals"/>
            <Tab icon={<CakeIcon />} title="Desert"/>
            <Tab icon={<EmojiFoodBeverageIcon /> } title="Bevrages"/>
        </div>
    )
};

const Tab = ({title, icon}) => {
    return (
        <div className={styles.tab}>
                <div className={styles.icon}>
                    {icon}
                </div>
            <p className={styles.title}>{title}</p>
            </div>
    )
}

export default Sidebar