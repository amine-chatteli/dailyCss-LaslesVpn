import React from 'react'
import MainButton from './MainButton'
import HeroImage from '../media/images/heroImage.svg'
import { StyledHero, StyledDescription } from './styles/Hero.styled'

function Hero() {
    return (
        <StyledHero id="about">
            <StyledDescription>
                <h1>Want anything to be easy with <span>LaslesVPN.</span></h1>
                <p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</p>
                <MainButton
                    isactive
                    type='primary'
                    content={'Get Started'}
                    width={'17.36%'}
                />
            </StyledDescription>
            <img src={HeroImage} alt='Hero'></img>
        </StyledHero>
    )
}

export default Hero