import styled from "styled-components";

export const StyledSubscriptionSection = styled.div`
    position:absolute;
    background-color:white;
    top:-5.5rem;
    left:8%;
    width:79.17%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    margin: auto;
    border-radius:10px;
    padding:2rem;
    box-shadow: -3px 1px 20px 18px rgba(179,174,174,0.11);
    -webkit-box-shadow: -3px 1px 20px 18px rgba(179,174,174,0.11);
    -moz-box-shadow: -3px 1px 20px 18px rgba(179,174,174,0.11);
        div{ 
            width:40%;
            h2{ 
                width:100%;
                font-weight: 500;
                font-size: 35px;
                line-height: 45px;
                color: #0B132A;
            }
            p{
                font-weight: 400;
                font-size: 1rem;
                line-height: 1.88;
                color: #4F5665;
            }
        }
`