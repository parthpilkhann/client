import React from 'react'
import "./navbar.scss"
import { Link } from "react-router-dom"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">

        <div className="left" >
          <div className="item">
            <img src="/img/flag.png" alt='not found' width={"25px"} height={"20px"} />
            <KeyboardArrowDownIcon />
          </div>
          {/* <div className="item">
            <span>IN</span>
            <KeyboardArrowDownIcon />
          </div> */}
          <div className="item">
            <Link className="link" to="/products/1" >Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2" >Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3" >Children</Link>
          </div>
        </div>

        <div className="center" >
          <Link className="link" to="/" >PILKHANN'S STORE</Link>
        </div>

        <div className="right" >
          {/* <div className="item">
            <Link className="link" to="/products/3" >HOMEPAGE</Link>
          </div> */}
          <div className="item">
            <Link className="link" to="/products/3" >About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3" >Contacts</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3" >Store</Link>
          </div>
          <div className="icons">
            <SearchIcon className='icon'/>
            <PersonOutlineIcon className='icon'/>
            <FavoriteBorderIcon className='icon'/>
            <div className="cartIcon">
              <ShoppingCartIcon className='icon'/>
              <span>9</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
