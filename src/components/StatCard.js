import React from 'react'
import { StyledStatCard } from './styles/Statistics.styled'

function StatCard({ children, width }) {
    return (
        <StyledStatCard width={width}>
            {children}
        </StyledStatCard>
    )
}

export default StatCard