import styled from "styled-components";
import { Logo } from "./Navbar.styled";

export const StyledFooter = styled.div`
        position:relative;
        background-color:#F8F8F8 !important;
        padding-top:9rem;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
`
export const FooterLogo = styled(Logo)`
        justify-content:flex-start;
`
export const LeftSection = styled.div`
        padding-inline:6.2rem;

        p{
                width:55%;
        }
`

export const SocialMediaLogos = styled.ul`
        list-style:none;
        display:flex;
        flex-direction:row; 
        padding:unset;
        margin-left:-1.5rem;
        margin-bottom:0;
`
export const RightSection = styled.div`

        width:42.15%;
        display:flex;
        flex-direction:row;
        justify-content:flex-start;

        ul{     
                list-style:none;
                margin-right:3.5rem;
                padding-left:unset;
                margin-bottom:6.25rem;

          li{
                font-weight: 400;
                font-size: 1rem;
                line-height: 1.88rem;
                color: #4F5665;
                }

                li:first-child{
                        font-size:1rem;
                        font-weight:500;
                        margin-bottom:1.3rem;
                }
        }
`