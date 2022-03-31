import React from 'react'
import ReviewCard from './ReviewCard'
import SectionHeader from './SectionHeader'
import MainButton from './MainButton'
import { StyledReviewsSection, StyledControls } from './styles/ReviewsSection.styled'

const reviews = ['“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.', '“I like it because I like to travel far and still can connect with high speed.”.', '“This is very unusual for my business that currently requires a virtual private network that has high security.”.']

const ReviewsSection = () => {
    return (
        <>
            <SectionHeader
                title='Trusted by Thousands of Happy Customer'
                description='These are the stories of our customers who have joined us with great pleasure when using this crazy feature.'
            />
            <StyledReviewsSection>
                <ReviewCard
                    userName='Viezh Robert'
                    userCountry='Warsaw, Poland'
                    review={reviews[0]}
                    stars='4.5'
                />
                <ReviewCard
                    userName='Kim Young Jou'
                    userCountry='Seoul, South Korea'
                    review={reviews[1]}
                    stars='4'
                />
                <ReviewCard
                    userName='Yessica Christy'
                    userCountry='Shanxi, China'
                    review={reviews[1]}
                    stars='4.5'
                />
            </StyledReviewsSection>
            <StyledControls>
                <div>
                    <MainButton type='circular' />
                    <MainButton type='circular' isactive />
                </div>
            </StyledControls>
        </>

    )
}

export default ReviewsSection