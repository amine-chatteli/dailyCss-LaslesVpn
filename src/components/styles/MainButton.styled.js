import styled from "styled-components";
import { css } from "styled-components";

export const Button = styled.button`
 ${({ type, width }) => {
    switch (type) {
      case "secondary":
        return css`
        width:${width};
        height:2.81em;
        font-family: 'Rubik';
        font-style: normal;
        background: #F6F6F6;
        font-weight: 600;
        font-size: 1em;
        line-height: 1.2em;
        color: #F53855;
        border: 1px solid #F53855;
        border-radius: 50px;
        box-sizing: border-box;
        padding: 0.81em 0rem;`

      case "circular":
        return css`
        width:3.75em;
        height:3.75em;
        padding:0.93em;
        border-radius:50%;
        border: 1px solid #F53855;`

      default:
        return css`
         width:15.625em;
         height:3.75em;
         border: 1px solid #F53855;
         border-radius:10px;
         font-family: 'Rubik';
         font-style: normal;
         font-weight: 700;
         font-size: 1em;
         line-height: 1.56em;`
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
