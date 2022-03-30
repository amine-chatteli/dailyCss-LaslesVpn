import React from 'react'
import { StyledSectionHedear } from './styles/SectionHeader.styled'

function SectionHeader({ title, description }) {
    return (
        <StyledSectionHedear>
            <h2>{title}</h2>
            <p>{description}</p>
        </StyledSectionHedear>
    )
}

export default SectionHeader