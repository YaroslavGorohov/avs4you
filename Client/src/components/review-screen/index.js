import React from 'react';
import styled from 'styled-components';
import ReviewsSlider from '../reviews-slider';
import Text from '../text';
import PageContentWrapper from '../page-content-wrapper';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star from '../../images/main-page/icons/star.svg';
import RevPeople from '../../images/main-page/icons/reviews-people.png'


const StyledScreen = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    align-items: center;

    div{
        outline: none;
    }

    .carouselWrapper{
        width: 40%;
        display: inline-block;
    }

    .container{
        width: 59%;
        display: inline-block;
        box-sizing: border-box;
        padding: 0px 15px; 
    }

    .orange{
        font-weight: 600;
        color: #FDA050;
    }

    .text{
        text-align: center;
    }

    .revPeople{
        margin: auto;
        display: block;
        padding-top: 10px;
    }

    .imgWrapper{
        height:16px;
        width:120px;
        margin:auto;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        padding-bottom: 20px;

        &>img {
            height:16px;
            width: 16px;
            margin: auto;
        }
    }
    @media (max-width: 1500px) {
        grid-template-columns: 60% auto;
    }

    @media (max-width: 1024px) {
        display: block;
        max-width: 600px;
        margin: auto;

        .container{
            padding-top: 90px;
        }
    }

    @media (max-width: 750px) {

        padding-top: 50px;
        padding-bottom: 50px;

        .container{
            padding-top: 60px;
        }
    }
`;

const ReviewsScreen = (props) => {
    return(
        <PageContentWrapper>
            <StyledScreen>
                <div className="carouselWrapper">
                    <ReviewsSlider 
                        reviewsData={props.reviewsData}
                    />
                </div>
                <div className="container">
                    <div className="imgWrapper">
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                    </div>
                    <Text className="text" fontSize={20} fontWeight={600}>Over <b className="orange">20,000,000</b> of satisfied clients!</Text>
                    <img className="revPeople" src={RevPeople} alt="People"/>
                    <Text className="text" color="#505B63" fontSize={18}>659133 Reviews</Text>
                </div>
            </StyledScreen>
        </PageContentWrapper>
    )
}

export default ReviewsScreen;