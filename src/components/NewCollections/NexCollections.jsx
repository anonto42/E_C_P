import React from 'react'
import './NewCollections.css'
import New_collection from '../Assets/new_collections'
import Item from './../Item/Item';

const NexCollections = () => {
  return (
    <div className='new-collectons'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {New_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NexCollections