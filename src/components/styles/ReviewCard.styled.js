import styled from "styled-components";

export const StyledReviewCard = styled.div`
    width:27.78%;
    min-height:12.8rem;
    padding:1rem;
    border: 2px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 10px;
    p{
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.88rem;
        color: #0B132A;
    }    
`
export const UpperCardSection = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`

export const UserProfile = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;

    div{
        display:flex;
        flex-direction:column;
        padding-left:0.7rem;

        h5{
            margin:0;
            font-weight: 500;
            font-size: 18px;
            line-height: 1.88rem;
            color: #0B132A;
        }
        span{
            font-size:0.87rem;
            color: #4F5665;
            font-weight: 400;
        }
    }

`
export const UserReview = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:0.6rem;
`