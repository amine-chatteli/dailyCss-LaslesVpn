import styled from "styled-components";
import { css } from "styled-components";

export const Button = styled.button`
 ${(props) => {
    switch (props.type) {
      case "secondary":
        return css`
        width:9.37rem;
        height:2.81rem;
        font-family: 'Rubik';
        font-style: normal;
        background: #F6F6F6;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #F53855;
        border: 2px solid #F53855;
        border-radius: 50px;
        box-sizing: border-box;
        padding: 0.81em 0rem;
         `;
      case "circular":
        return css`
        width:3.75rem;
        height:3.75rem;
        padding:0.93rem;
        border-radius:50%;
        border: 2px solid #F53855;
         `;
      default:
        return css`
         width:15.625em;
         height:3.75em;
         border: 2px solid #F53855;
         border-radius:10px;
         font-family: 'Rubik';
         font-style: normal;
         font-weight: 700;
         font-size: 16px;
         line-height: 25px;
         `;
    }
  }}
 ${(props) => {
    if (props.active) {
      return css`
          background-color: #F53838;
          color: #FFFFFF;`
    } else {
      return css`
          background-color: #FFFFFF;
          color: #F53838;`
    }
  }}
`
