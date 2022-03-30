import styled from "styled-components";

export const StyledFeaturesSection = styled.div`
    width:76.80%;
    margin:auto;
    display:flex;
    flex-direction:row;
    align-items:flex-end;
    justify-content:space-between;
    background-color:white;

    div{
        width: 38.61%;
    }
    h2{
        line-height:2.5rem;
        padding-top:1.2rem;
        margin-bottom:unset;
    }
    ul{
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 0.87rem;
        line-height: 1.87rem;
        color: #4F5665;
        list-style:none;
        padding:unset;
        margin-top:1rem;
        margin-bottom:0px;

        li{
            display:flex;
            align-items:flex-end;
            gap:0.5rem;
            margin-top:0.6rem;
            
            svg{
                margin-bottom:3px;
            }
        }
    }

`