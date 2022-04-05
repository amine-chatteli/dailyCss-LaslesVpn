import React from 'react'
import { StyledFooter } from './styles/Footer.styled'
import logo from "../media/images/logo.svg"
import { Logo } from './styles/Navbar.styled'


const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Logo>
          <img src={logo} alt='lasles VPN logo' />
          <p>
            Lasles <span>VPN</span>
          </p>
        </Logo>
        <p>LaslesVPN is a private virtual network that has unique features and has high security.</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <ul>
        <li>Product</li>
        <li>Download </li>
        <li>Pricing</li>
        <li>Locations</li>
        <li>Server</li>
        <li>Countries</li>
        <li>Blog</li>
      </ul>
      <ul>
        <li>LaslesVPN ? </li>
        <li>FAQ</li>
        <li>Tutorials</li>
        <li>About Us</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
      <ul>
        <li>Earn Money</li>
        <li>Affiliate</li>
        <li>Become Partner</li>
      </ul>
    </StyledFooter>
  )
}

export default Footer