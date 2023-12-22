import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../contexts/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'

const ShopCat = (props) => {
  const {allData} = useContext(ShopContext)
  return (
    <div className='shop-category'>
        <img src={props.banner} className='shop-category-banner' />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} />
          </div>
        </div>
        <div className="shopcategory-products">
            {allData.map((item,i) =>{
              if(props.category === item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              }else{
                return null;
              }
            })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default ShopCat