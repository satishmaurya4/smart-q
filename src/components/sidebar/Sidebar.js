import React from 'react'
import styles from "./Sidebar.module.css";
import {MdFoodBank} from "react-icons/md"
import {SiIfood} from "react-icons/si"

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <Tab icon={ <MdFoodBank />}title="Main Course"/>
            <Tab icon={<SiIfood /> }title="Snacks"/>
            <Tab title="Special Meals"/>
            <Tab title="Desert"/>
            <Tab title="Bevrages"/>
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