import React, {useState, useEffect, useContext} from 'react'
import Product from './Product';
import styles from './ProductList.module.css'
import {useGetDataQuery} from '../../services/api'

const ProductList = () => {
    const {data, isFetching} = useGetDataQuery();
console.log(data?.menu)
    const fetchProducts = async () => {
        const URL = "https://smartqdemo.firebaseio.com/events-data.json";
        const response = await fetch(URL);
        const allProducts = await response.json();

    }
    
    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <>
            {
                isFetching ? <p>Loading...</p> : (
<div className={styles.productContainer}>
          {
            //   console.log("use Data",useData.data)
          }
          
          {/* <div className={styles.banner}>
              {getBanner && (<img src={getBanner } alt="banner" />)}
          </div> */}
          {
              data?.menu.map((item, index) => {
                  return (
                      <Product key={index} items={item} />
                )
            })
          } 
            </div>
                )
            }
      
            </>
  )
}

export default ProductList