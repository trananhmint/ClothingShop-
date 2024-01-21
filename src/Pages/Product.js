import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';

const Product = () => {
  // console.log("Test: " + useContext(ShopContext))
  const {all_products}  = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e)=>e.id === Number(productId));

  return (
    <div className='product'>
      <Breadcrum product={product}/>
    </div>
  )
}

export default Product;