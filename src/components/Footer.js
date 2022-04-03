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
        
      </div>
    </StyledFooter>
  )
}

export default Footer