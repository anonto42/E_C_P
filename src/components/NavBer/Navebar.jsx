import React, { useState } from 'react'
import './Navebar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navebar = () => {

  const [menu ,setMenu] = useState('shop')

  return (
    <div className='navBer' style={{backgroundColor: "rgb(121, 121, 182)"}}>
      <div className="nav_logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div> 
      <ul className="nav-manu">
        <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'none'}} to='/'>shop</Link>  {menu==='shop'? <hr/>: <></>}</li>
        <li onClick={()=>{setMenu('mens')}}><Link style={{textDecoration:'none'}} to='/mens'>men</Link>{menu==='mens'? <hr/>: <></>}</li>
        <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration:'none'}} to='womens'>women</Link> {menu==='womens'? <hr/>: <></>}</li>
        <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration:'none'}} to='/kids'>kids</Link>{menu==='kids'? <hr/>: <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>login</button></Link>
        <Link to='/card'><i class="fa-solid fa-cart-shopping"></i></Link>
        <div className="nav-card-count">0</div>
      </div>
    </div>
  )
}

export default Navebar