import React from "react";
import PricePlan from "./PricePlan";
import { pricePlans } from './content'
import SectionHeader from "./SectionHeader";
import { StyledPricingSection } from "./styles/PricingSection.styled";


const PricingSection = () => {
  return (
    <>
      <SectionHeader
        title='Choose Your Plan'
        description="Let's choose the package that is best for you and explore it happily and cheerfully."
      />
      <StyledPricingSection>
        <PricePlan
          plan='Free Plan'
          planDetails={pricePlans.slice(0, 3)}
          price='Free' />
        <PricePlan
          plan='Standard Plan'
          planDetails={pricePlans.slice(0, 5)}
          price='$9 / mo' />
        <PricePlan
          plan='Premium Plan'
          planDetails={pricePlans}
          price='$12 / mo' />
      </StyledPricingSection>
    </>

  );
}
export default PricingSection