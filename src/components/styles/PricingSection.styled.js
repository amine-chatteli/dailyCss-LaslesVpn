import styled from "styled-components";

export const StyledPricingSection = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:3.12rem;
    
`
export const StyledPricePlan = styled.div`
    position:relative;
    width:22.92%;
    min-height:42.5rem;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    border: 2px solid #DDDDDD;
    border-radius: 10px;
`
export const ImageWithTitle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    
  svg{
        margin-top:3.8rem;
        margin-bottom:1rem;
     }

  span{
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 1.12;
    line-height: 2.5rem;
    text-align: center;
    color: #0B132A;
    margin-bottom:0.5rem;
  }
`

export const List = styled.ul`
    list-style: none;
    width :56%;
    margin:0 auto;
    padding:unset;

    li{
        display:flex;
        flex: direction row;
        gap:1.26rem;
        align-items:baseline;
        margin:0.5rem 0;
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 0.88rem;
        line-height: 1.88rem;
        color: #4F5665;
    }
`

export const PriceSelection = styled.div`
    position:absolute;
    bottom:2.5rem;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1.25rem;

    h3{
        margin:unset;
    }
    span {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.87rem;
        color: #4F5665;}
`