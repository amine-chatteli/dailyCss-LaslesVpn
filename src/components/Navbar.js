import React from 'react'
import MainButton from './MainButton'
import { StyledNavbar, Logo, Menu, AuthButtons } from './styles/Navbar.styled'
import logo from "../media/logo.svg"


const Navbar = () => {
    return (
        <StyledNavbar>
            <Logo>
                <img src={logo} alt='lasles VPN logo' />
                <p>
                    Lasles <span>VPN</span>
                </p>
            </Logo>
            <Menu>
                <li>About</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Help</li>
            </Menu>
            <AuthButtons>
                <MainButton
                    type='circular'
                />
            </AuthButtons>
        </StyledNavbar >
    )
}

export default Navbar