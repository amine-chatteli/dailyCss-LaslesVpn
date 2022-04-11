import React from 'react'
import { StyledFooter, FooterLogo, SocialMediaLogos, LeftSection, RightSection } from './styles/Footer.styled'
import { ReactComponent as Facebook } from "../media/images/Icon/Facebook.svg"
import { ReactComponent as Instagram } from "../media/images/Icon/Instagram.svg"
import { ReactComponent as Twitter } from "../media/images/Icon/Twitter.svg"
import SubscriptionSection from "./SubscriptionSection"
import logo from "../media/images/logo.svg"



const Footer = () => {
  return (
    <StyledFooter id='help'>
      <SubscriptionSection />
      <LeftSection>
        <FooterLogo>
          <img src={logo} alt='lasles VPN logo' />
          <p>
            Lasles <span>VPN</span>
          </p>
        </FooterLogo>
        <p><strong>LaslesVPN </strong>is a private virtual network that has unique features and has high security.</p>
        <SocialMediaLogos>
          <li><Facebook /></li>
          <li><Twitter /></li>
          <li><Instagram /></li>
        </SocialMediaLogos>
        <p>©2020LaslesVPN</p>
      </LeftSection>
      <RightSection>
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
      </RightSection>
    </StyledFooter>
  )
}

export default Footer