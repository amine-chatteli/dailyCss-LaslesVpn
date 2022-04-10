import React from "react";
import PricePlan from "./PricePlan";
import { pricePlans } from './content'
import SectionHeader from "./SectionHeader";
import { StyledPricingSection } from "./styles/PricingSection.styled";


const PricingSection = () => {
  return (
    <>
      <SectionHeader
        margin={'5rem auto'}
        title='Choose Your Plan'
        description={<p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>}
      />
      <StyledPricingSection id="pricing">
        <PricePlan
          plan='Free Plan'
          planDetails={pricePlans.slice(0, 3)}
          price='Free' />
        <PricePlan
          plan='Standard Plan'
          planDetails={pricePlans.slice(0, 5)}
          price={<h3>$9<span> / mo</span></h3>} />
        <PricePlan
          plan='Premium Plan'
          planDetails={pricePlans}
          price={<h3>$12<span> / mo</span></h3>} />
      </StyledPricingSection>
    </>

  );
}
export default PricingSection