import React from 'react'
import { StyledFeaturesSection } from './styles/FeaturesSection.styled'
import { ReactComponent as FeaturesImage } from '../media/images/features.svg'
import { ReactComponent as Tick } from '../media/images/Icon/tick.svg'


const FeaturesSection = () => {
    return (
        <StyledFeaturesSection>
            <FeaturesImage />
            <div>
                <h2>We Provide Many Features You Can Use</h2>
                <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                <ul>
                    <li><Tick />Powerfull online protection.</li>
                    <li><Tick />Internet without borders.</li>
                    <li><Tick />Supercharged VPN</li>
                    <li><Tick />No specific time limits.</li>
                </ul>
            </div>
        </StyledFeaturesSection>
    )
}

export default FeaturesSection