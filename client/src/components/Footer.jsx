import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <h4>@ HandMadeHub - One Destination for all your needs....</h4>
      <div className="footer-body">

        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>All products</li>
        </ul>

        <ul>
          <li>Cart</li>
          <li>Profile</li>
          <li>Orders</li>
        </ul>

        <ul>
          <li>bamboo</li>
          <li>bamboo ladders</li>
          <li>bamboo baskets</li>
        </ul>

        <ul>
          <li>Fashion</li>
          <li>Home decor</li>
          <li>baskets</li>
        </ul>


      </div>
      <div className="footer-bottom">
        <p>@ HandMadeHub.com - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer