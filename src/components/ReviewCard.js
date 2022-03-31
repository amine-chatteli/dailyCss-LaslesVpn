import React from 'react'
import { StyledReviewCard, UserProfile, UserReview } from './styles/ReviewCard.styled'
import { ReactComponent as Star } from '../media/images/Icon/star.svg'

const ReviewCard = ({ userImage, userName, userCountry, stars, review }) => {
    return (
        <StyledReviewCard>
            <div>
                <UserProfile>
                    <img src={userImage} alt='user' />
                    <div>
                        <h5>{userName}</h5>
                        <span>{userCountry}</span>
                    </div>
                </UserProfile>
                <UserReview>
                    <span>{stars}</span>
                    <Star />
                </UserReview>
            </div>
            <p>{review}</p>
        </StyledReviewCard>
    )
}

export default ReviewCard