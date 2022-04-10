import styled from "styled-components";

export const StyledStats = styled.div`
    width:79.17%;
    height:11.5rem;
    margin:6.44rem auto 5rem;
    background-color:#FFFFFF;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -3px 1px 20px 18px rgba(179,174,174,0.11);
-webkit-box-shadow: -3px 1px 20px 18px rgba(179,174,174,0.11);
-moz-box-shadow: -3px 1px 20px 18px rgba(179,174,174,0.11);
`
export const StyledStatCard = styled.div`
    width:${({ width }) => width};
    height:70%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:2.19rem;
    border-right:${({ withBorder }) => withBorder && '2px solid #EEEFF2'};

    div{
        line-height:0.5rem;
        padding-bottom:1rem;
        span{
            font-weight: 400;
            font-size: 1.25rem;
            line-height: 1.87rem;
            color: #4F5665;
        }
        h3{
            font-size:1.56rem;
            font-weight: 700;
            color: #0B132A;
            margin-bottom:1rem;
        }
    }
`