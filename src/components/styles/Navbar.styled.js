import styled from "styled-components";

export const StyledNavbar = styled.nav`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    `
export const Logo = styled.div`
    width:31.66%;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:0.62rem;
p {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #0B132A;
    span{
        font-size:1.1rem;
        font-weight:900;
    }
}
`

export const Menu = styled.ul`
    width:31.31%;
    padding:3.66rem 0;
    margin:unset;
    list-style:none;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    color:#4F5665;
    a{
        text-decoration:none;
        color:#4F5665;
    }
`
export const AuthButtons = styled.div`
    width: 37.01%;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:1.87rem;


span{
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.18;
}   `