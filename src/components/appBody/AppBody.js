import React, { useEffect, useState } from 'react'
import ProductList from '../products/ProductList';
import ProductSection from '../products/ProductSection';
import Cart from '../cart/Cart';
import styles from "./AppBody.module.css";
import { Typography } from '@mui/material';
import productApi from '../../api/api'
import { useDispatch } from 'react-redux';
import { storeProducts } from '../features/products/productSlice';
import Loading from '../loading/Loading'


const AppBody = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();





  useEffect(() => {
    const fetchProductData = async () => {
      let result = await productApi.get("events-data.json")
        .catch((err) => {
        console.log('error', err)
      })
      dispatch(storeProducts(result.data))
      setIsLoading(false);
    }
    fetchProductData();
}, [])

  return (
      <main style={{maxWidth: '1128px', width: '100%', margin: 'auto', marginTop: '64px',paddingTop: '30px',minHeight: "calc(100vh - 140px)", }}>
      <Typography variant='h4' style={{ textTransform: 'capitalize', fontWeight: '600', color: '#339cff', paddingBottom: '30px' }}>build your menu</Typography>
      {
        isLoading ? <Loading /> : (

          <div className={styles.productInfo}>
              {/* <Sidebar />
          <ProductList /> */}
        <ProductSection />
              <Cart />
              </div>
        )
}

 
    </main>
  )
}

export default AppBody