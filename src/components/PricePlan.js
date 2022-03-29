import React from 'react'
import MainButton from "./MainButton";
import { ReactComponent as Free } from '../../src/media/images/Free.svg'
import { ReactComponent as Vector } from '../media/images/Icon/Vector.svg'
import { StyledPricePlan } from './styles/PricingSection.styled';

const PricePlan = ({ plan, planDetails, price }) => {
    return (
        <StyledPricePlan>
            <Free />
            <span>{plan}</span>
            <ul>
                {planDetails.map(item => <li>
                    <Vector />
                    <span >{item}</span>
                </li>
                )}
            </ul>
            <span>{price}</span>
            <MainButton active type='secondary' width='20%' />
        </StyledPricePlan>

    )
}

export default PricePlan