import React from 'react'
import MainButton from "./MainButton";
import { ReactComponent as Free } from '../../src/media/images/Free.svg'
import { ReactComponent as Vector } from '../media/images/Icon/Vector.svg'
import { StyledPricePlan, ImageWithTitle, List, PriceSelection } from './styles/PricingSection.styled';

const PricePlan = ({ plan, planDetails, price }) => {
    return (
        <StyledPricePlan>
            <ImageWithTitle>
                <Free />
                <span>{plan}</span>
            </ImageWithTitle>
            <List>
                {planDetails.map(item => (
                    <li key={item}>
                        <Vector />
                        <span>{item}</span>
                    </li>
                ))
                }
            </List>
            <PriceSelection>
                <h3>{price}</h3>
                <MainButton
                    isactive
                    type='secondary'
                    width='50%'
                    content='Select'
                />
            </PriceSelection>
        </StyledPricePlan>

    )
}

export default PricePlan