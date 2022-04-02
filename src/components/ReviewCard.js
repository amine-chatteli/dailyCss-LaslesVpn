import React from 'react'
import { StyledReviewCard, UserProfile, UserReview, UpperCardSection } from './styles/ReviewCard.styled'
import { ReactComponent as Star } from '../media/images/Icon/star.svg'

const ReviewCard = ({ userPicture, userName, userCountry, stars, review }) => {
    return (
        <StyledReviewCard>
            <UpperCardSection>
                <UserProfile>
                    <img src={userPicture} alt='user' />
                    <div>
                        <h5>{userName}</h5>
                        <span>{userCountry}</span>
                    </div>
                </UserProfile>
                <UserReview>
                    <span>{stars}</span>
                    <Star />
                </UserReview>
            </UpperCardSection>
            <p>{review}</p>
        </StyledReviewCard>
    )
}

export default ReviewCard