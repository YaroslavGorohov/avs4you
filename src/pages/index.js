import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import withI18next from "../components/withI18next";
import Layout from "../components/layout";
import styled from 'styled-components';
import Text from '../components/text';
import PageContentWrapper from '../components/page-content-wrapper';
import BackgroundHeaderImage from '../images/main-page/header-image.png';
import MainContentWrapper from '../components/main-content-wrapper';
import SomethingElseScreen from '../components/something-else-screen';
import ReviewScreen from '../components/review-screen';
import HeaderDownloadButtons from '../components/header-download-buttons';
import ImageGQ from '../components/image-gq';


const MainPageWrapper = styled.div`

  .avs4you{
    text-transform: uppercase;
    color: #F59541;
    font-weight: 600;
  }

  .headerText{
    padding-bottom:25px;
  }

  .bodyHeader{
    text-align: center;
    padding-top:100px;
    padding-bottom:80px;
  }

  .headerDownloadButtons{
    margin-top: 50px;
  }

  .mobileFormWrapper{
    display: table;
    margin-left: 0;
  }

  .getCouponButton{
    display: block;
    text-align: center;
  }

  .headerContentWrapper{
    padding-top: 260px;
    padding-bottom: 320px;
    max-width: 750px;
  }

  .headerBackground{
    position:relative;
  }

  .headerBackgroundImage{
    position:absolute !important;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 1;
    transition: opacity 500ms ease 0s;
    z-index: -1;
  }

  @media (max-width: 1050px) {
    .headerBackground {
      background-position: 0 0;
    }

    .mobileFormWrapper{
      margin: auto;
    }

    .headerContentWrapper{
      max-width: 520px;
      margin: auto;
      padding-top: 60px;
      padding-bottom: 170px;
    }

    .headerText{
      font-size: 34px;
      line-height: normal;
      text-align: center;
    }

    .headerDescription{
      font-size: 18px;
      text-align: center;
    }

    .bodyHeader{
      font-size: 28px;
    }
  }

  @media (max-width: 750px) {

    .bodyHeader{
      padding-top: 50px;
      padding-bottom: 50px;
      font-weight: 700;
    }
  }

  @media (max-width: 450px) {

    .headerContentWrapper{
      padding-bottom: 100px;
    }

    .bodyHeader{
      font-size: 22px;
    }

    .HeaderListItem.mobile{
      font-size: 20px;
    }
  }
`;

class mainPage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      device: "",
    };

    this.getDevice = this.getDevice.bind(this);
  }


  getDevice(device){
    this.setState({ device: device });
  }

  render(){
  return (
    <Layout getDevice={this.getDevice} pageContext={this.props.pageContext} t={this.props.t}>
      <MainPageWrapper>
        <div className="headerBackground">
        <ImageGQ className="headerBackgroundImage" relativePath="header-image.png" maxWidth={1920}/>
          <PageContentWrapper>
            <div id="headerCoupon" className="headerContentWrapper" >
              <Text color="#ffffff" className="headerText" lineHeight="65px" fontSize={55} fontWeight={600} as="h1"><b className="avs4you">{this.props.t("avs4you")}</b> — {this.props.t("Ultimate multimedia editing family")}</Text>
              <Text color="#ffffff" className="headerDescription" as="h5" fontSize={24}>{this.props.t("Produce spectacular video, audio and photo content and even more, without any limitations")}</Text>

              <HeaderDownloadButtons 
                t={this.props.t}
                mainHref="/"
                secondaryHref="/"
                className="headerDownloadButtons"
              />
            </div>
          </PageContentWrapper>
        </div>
        
        <MainContentWrapper />
        <SomethingElseScreen scrollTo="headerCoupon"/>
        <ReviewScreen />
      </MainPageWrapper>
    </Layout>
  );
  }
};
export default withI18next({ ns: "common" })(mainPage);
