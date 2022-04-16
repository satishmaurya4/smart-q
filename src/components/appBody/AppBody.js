import React from 'react'
import ProductList from '../products/ProductList';
import Cart from '../cart/Cart';
import styles from "./AppBody.module.css";
import Sidebar from '../sidebar/Sidebar';


const AppBody = () => {
  return (
      <main className={styles.main}>
          <h2 className={styles.title}>build your menu</h2>
          <div className={styles.productInfo}>
              <Sidebar />
          <ProductList />
              <Cart />
              </div>
    </main>
  )
}

export default AppBody