import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>

      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes Arrivals</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Arrivals</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum modi veritatis animi qui, magnam exercitationem ullam! Sint ratione earum, rem voluptatem incidunt iusto architecto sequi illum odit accusamus atque tempore!</p>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, harum. Atque, dolores. Ut numquam inventore molestiae iusto, eveniet fuga similique distinctio eaque ab voluptas sed earum consequatur nihil porro nisi.</p>
        </div>
      </div>

      <div className="bottom">
        <div className="item">
          <h1>PILKHANN'S STORE</h1>
          <p>@copyright. All rights Reserved</p>
        </div>
        <div className="item">
          <img src="/img/payment.png" alt="not found" />
        </div>
      </div>
    </div>
  )
}

export default Footer
