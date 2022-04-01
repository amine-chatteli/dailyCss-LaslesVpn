import React from 'react'
import { StyledSectionHedear } from './styles/SectionHeader.styled'

function SectionHeader({ title, description, margin }) {
    return (
        <StyledSectionHedear margin={margin}>
            <h2>{title}</h2>
            {description}
        </StyledSectionHedear>
    )
}

export default SectionHeader