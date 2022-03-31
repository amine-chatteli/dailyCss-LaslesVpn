import React from 'react'
import MainButton from './MainButton'
import SectionHeader from './SectionHeader'
import { StyledSubscriptionSection } from './styles/SubscriptionSection.styled'

const SubscriptionSection = () => {
    return (
        <StyledSubscriptionSection>
            <SectionHeader
                title='Subscribe Now and Get Special Features!'
                description="Let's subscribe with us and find the fun."
            />
            <MainButton
                content='Subscribe Now'
                type='primary'
                isactive
            />
        </StyledSubscriptionSection>
    )
}

export default SubscriptionSection