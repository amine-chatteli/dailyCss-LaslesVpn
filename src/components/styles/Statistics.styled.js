import styled from "styled-components";

export const StyledStats = styled.div`
    width:79.17%;
    height:12.5rem;
    margin:6.44rem auto;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    overflow: hidden;
    border-radius: 10px;
`
export const StyledStatCard = styled.div`
    width:${({ width }) => width};
    height:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:2.19rem;

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