import React from 'react'
import styles from "./Product.module.css";
import {AiFillCaretDown} from "react-icons/ai"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

const Product = ({ items }) => {
    const { category, fooddescription,foodid,foodname,imageurl,price} = items;
    return (
        <Card sx={{ minWidth: 275 }}>
    
            <div>
                <div>
                    <CardMedia
                component="img"
                        height="194"
                        
                image={imageurl}
                alt="menu image"
              />
                
                    <CardHeader
                    
                    >
                    </CardHeader>

                

                </div>
          {/* <div className={styles.productHeader}>
          <div className={styles.productImage}>
              <img src={imageurl} alt="product" />
          </div>
          <div className={styles.productInfo}>
              <div className={styles.productDetail}>
                  <p className={styles.title}>{foodname}</p>
                      <p className={styles.description}>{fooddescription}</p>
                      <button className={styles.addOns}>Add-ons</button>
              </div>
              </div>
              <p className={styles.price}>${price}</p>
          </div> */}
          <div className={styles.productControl}>
              <div className={styles.quantity}>
                  <p>Quantity</p>
                  <div className={styles.quantityCard}>Qty</div>
              </div>
              <div className={styles.session}>
                  <p>Session</p>
                  <div className={styles.sessionCard}>
                      <p className={styles.sessionText}>Select Session</p>
                      <span className={styles.downIcon}><AiFillCaretDown /></span>
                  </div>
              </div>
              <div className={styles.subtotal}>
                  <p>Sub Total</p>
                  <div className={styles.subtotalCard}>$0.00</div>
              </div>
          </div>
          <div className={styles.productFooter}>
              <p className={styles.productFooterTitle}>Note to the kitchen</p>
              <div className={styles.productFooterAction}>
                  <div className={styles.sessionValue}></div>
                  <button className={styles.addToCart}>Add to Cart</button>
              </div>
          </div>
          
    </div>
       </Card>
  )
}

export default Product