import React from 'react'
import SectionHeader from './SectionHeader'
import { StyledNetworkSection, StyledPartners } from './styles/NetworkSection.styled'
import { ReactComponent as Network } from "../media/images/Network.svg"
import Discord from "../media/images/discord.svg"
import Netflix from "../media/images/netflix.svg"
import Reddit from "../media/images/reddit.svg"
import Amazon from "../media/images/amazon.svg"
import Spotify from "../media/images/spotify.svg"

const NetworkSection = () => {
  return (
    <StyledNetworkSection>
      <SectionHeader
        title='Huge Global Network of Fast VPN'
        description="See LaslesVPN everywhere to make it easier for you when you move locations."
      />
      <Network />
      <StyledPartners>
        <img src={Netflix} alt="netflix_logo" />
        <img src={Reddit} alt="reddit_logo" />
        <img src={Discord} alt="discord_logo" />
        <img src={Amazon} alt="amazon_logo" />
        <img src={Spotify} alt="spotify_logo" />
      </StyledPartners>
    </StyledNetworkSection>
  )
}

export default NetworkSection 