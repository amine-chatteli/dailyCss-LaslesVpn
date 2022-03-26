import React from 'react'
import StatCard from './StatCard'
import { StyledStats } from './styles/Statistics.styled'
import { ReactComponent as Users } from '../media/images/Icon/user.svg'
import { ReactComponent as Locations } from '../media/images/Icon/location.svg'
import { ReactComponent as Server } from '../media/images/Icon/Server.svg'

function Statistics() {
  return (
    <StyledStats>
      <StatCard width='32%'>
        <Users />
        <div>
          <h3>90+</h3>
          <span>Users</span>
        </div>
      </StatCard>
      <StatCard width='36%'>
        <Locations />
        <div>
          <h3>30+</h3>
          <span>Locations</span>
        </div>
      </StatCard>
      <StatCard width='32%'>
        <Server />
        <div>
          <h3>50+</h3>
          <span>Servers</span></div>
      </StatCard>
    </StyledStats>
  )
}

export default Statistics