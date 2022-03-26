import React from 'react'
import { StyledStatCard } from './styles/Statistics.styled'

function StatCard({ children, width, withBorder }) {
    return (
        <StyledStatCard width={width} withBorder={withBorder}>
            {children}
        </StyledStatCard>
    )
}

export default StatCard