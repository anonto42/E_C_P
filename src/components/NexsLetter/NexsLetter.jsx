import React from 'react'
import './NexsLetter.css'

const NexsLetter = () => {
  return (
    <div className='nexsLetter'>
        <h1>Get Exclusive Ofeers On Your Email</h1>
        <p>Subscrive to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NexsLetter