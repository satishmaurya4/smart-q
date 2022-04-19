import React, {useState, useEffect, useContext} from 'react'
import Product from './Product';
import styles from './ProductList.module.css'

const ProductList = () => {
   

    return (
        <>

<div className={styles.productContainer}>
          {
            //   console.log("use Data",useData.data)
          }
          
          {/* <div className={styles.banner}>
              {getBanner && (<img src={getBanner } alt="banner" />)}
          </div> */}
          {/* {
              menu.map((item, index) => {
                  return (
                      <Product key={index} items={item} />
                )
            })
          }  */}
            </div>
                
            </>
  )
}

export default ProductList