import React from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-img-left">
                <img src={product.image} />
                <img src={product.image} />
                <img src={product.image} />
                <img src={product.image} />
            </div>
            <div className="productdisplay-img">
              <img src={product.image} className='productDisplay-main-img' />
            </div>
        </div>
        <div className="productDisplay-right">
          <h1>{product.name}</h1>
          <div className="poroductDisplay-right-star">
            <img src={star_icon} />
            <img src={star_icon} />
            <img src={star_icon} />
            <img src={star_icon} />
            <img src={star_dull_icon} />
            <p>144</p>
          </div>
        </div>
    </div>
  )
}

export default ProductDisplay