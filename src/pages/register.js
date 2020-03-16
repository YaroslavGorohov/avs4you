import React from "react";
import Slider from "react-slick";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Link from '../components/link';
import Layout from "../components/layout";
import ContentRowItem from '../components/content-row-item';
import "../styles/register.less";
import Button from "../components/button";
import ImageGQL from "../components/image-gql";

class Register extends React.PureComponent {

render(){
    return (
      <Layout className="register" pageContext={this.props.pageContext} t={this.props.t}>
        <div className="screen-wrapper">
          <div className="limited-offer">
            <Text as="p">In November only!</Text>
          </div>
          <div className="sale-text">
            <Text as="h1">70% OFF! <span>Reduced Prices!</span></Text>
          </div>
          <Text className="get-tools-text" as="h5">Get 5 Multimedia Professional Tools in One Package</Text>
          <div className="featuresWrapper">
            <div className="featuresItem">
              <ImageGQL className="image" imageName="register-endless-trial.png"/>
              <Text>No trial limitations</Text>
            </div>
            <div className="featuresItem">
              <ImageGQL className="image" imageName="register-free-support-icon.png"/>
              <Text>No trial limitations</Text>
            </div>
            <div className="featuresItem">
              <ImageGQL className="image" imageName="register-free-updates.png"/>
              <Text>No trial limitations</Text>
            </div>
          </div>
          <ImageGQL className="product-boxes-image" imageName="register-product-boxes.png"/>
          <div className="buy-block-wrapper">
            <div className="buy-block"> 
              <Text className="subscription-time-text" as="h3">1 year</Text>
              <Text className="access-sub-text">access subscription</Text>
              <Text className="sub-now-text">Subscribe now for</Text>
              <Text className="prev-price-text">$69.00</Text>
              <Text className="current-price-text">$39.00</Text>
              <Text className="limited-offer-text">Time limited offer</Text>
              <Text className="limited-offer-text">prices valid up to November 30, 2019</Text>
              <Button
                backgroundColor="orange"
                color="#ffffff"
                href="/"
                className="buy-block-button"
              >
                Buy now
              </Button>
            </div>
            <div className="buy-block">
              <Text className="subscription-time-text" as="h3">Unlimited</Text>
              <Text className="access-sub-text">access subscription</Text>
              <Text className="sub-now-text">Subscribe now for</Text>
              <Text className="prev-price-text">$199.00</Text>
              <Text className="current-price-text">$59.00</Text>
              <Text className="limited-offer-text">Time limited offer</Text>
              <Text className="limited-offer-text">prices valid up to November 30, 2019</Text>
              <Button
                backgroundColor="orange"
                color="#ffffff"
                href="/"
                className="buy-block-button"
              >
                Buy now
              </Button>
            </div>
          </div>
          <div className="availableCarts">
            <ImageGQL imageName="register-available-carts.png"/>
          </div>
          <Text as="h2" className="common__heading">
            Why choose AVS4YOU?
          </Text>
          <div className="why-choose-wrapper">
            <div className="why-choose-item">
              <ImageGQL className="icon" imageName="register-secure-icon.png"/>
              <Text className="text">100% secure</Text>
            </div>
            <div className="why-choose-item">
              <ImageGQL className="icon" imageName="register-support-icon.png"/>
              <Text className="text">First-rate Support Service</Text>
            </div>
            <div className="why-choose-item">
              <ImageGQL className="icon" imageName="register-guarantee-icon.png"/>
              <Text className="text">30-day Money-back guarantee</Text>
            </div>
            <div className="why-choose-item">
              <ImageGQL className="icon" imageName="register-many-years-icon.png"/>
              <Text className="text">10+ years on the market</Text>
            </div>
            <div className="why-choose-item">
              <ImageGQL className="icon" imageName="register-world-icon.png"/>
              <Text className="text">20.000.000 satisfied customers</Text>
            </div>
          </div>
          <Text as="h2" className="common__heading">
            What programs offers AVS4YOU subscription?
          </Text>

          <div className="programs-slider-wrapper">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}
            >
              <ContentRowItem 
                imgLeft={true}
                imageName="slider_video_editor.png"
                headerText="AVS Video Editor"
                free={false}
                blueButtonLink="/"
                smallButtonLink="/"  
                scrollTo="headerCoupon"    
              >
                <Text className="ListItem" color="#555555" fontWeight={500}>Edit all key video formats</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join video files</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Apply effects and transitions</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Add audio, comments, subtitles</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Capture PC screen</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Use Chroma key, Slow Motion</Text>
              </ContentRowItem>

              <ContentRowItem 
                imgLeft={true}
                imageName="slider_video_converter.png"
                headerText="AVS Video Converter"
                free={false}
                blueButtonLink="/"
                smallButtonLink="/" 
                scrollTo="headerCoupon"
              >
                <Text className="ListItem" color="#555555" fontWeight={500}>Convert all key video formats and file sizes</Text>
                <Text  className="ListItem" color="#555555" fontWeight={500}>Smart conversion presets</Text>
                <Text  className="ListItem" color="#555555" fontWeight={500}>GPU conversion acceleration</Text>
              </ContentRowItem>

              <ContentRowItem 
                imgLeft={true}
                imageName="slider_video_remaker.png"
                headerText="AVS Video ReMaker"
                free={false}
                blueButtonLink="/"
                smallButtonLink="/"   
                scrollTo="headerCoupon"   
              >
                <Text className="ListItem" color="#555555" fontWeight={500}>Edit video files without reconversion</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Support of all key video formats</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join video files</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Transfer video from camcorders and video cameras</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Capture PC screen</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Create DVD and Blu-ray menus and discs</Text>
              </ContentRowItem>

              <ContentRowItem 
                imgLeft={true}
                imageName="slider_audio_converter.png"
                headerText="AVS Audio Converter"
                free={false}
                blueButtonLink="/"
                smallButtonLink="/"   
                scrollTo="headerCoupon"   
              >
                <Text className="ListItem" color="#555555" fontWeight={500}>Convert all key audio formats</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join and mix audio files</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Modify audio file information</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Create Audiobooks and Ringtones</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Export audio from video</Text>
             </ContentRowItem>

             <ContentRowItem 
                imgLeft={true}
                imageName="slider_audio_editor.png"
                headerText="AVS Audio Editor"
                free={false}
                blueButtonLink="/"
                smallButtonLink="/"  
                scrollTo="headerCoupon"    
              >
                <Text className="ListItem" color="#555555" fontWeight={500}>Record audio data</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join and mix audio files</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Improve sound quality</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Remove noise</Text>
                <Text className="ListItem" color="#555555" fontWeight={500}>Text to Speech</Text>
              </ContentRowItem>
            </Slider>
          </div>
          <div className="trademark-wrapper">
            <Text className="trademark-text">
              <a href="/">Read FAQ</a> to find out more information about registration terms and license types. 
              If for some reason you are not satisfied with our software and would like your payment to be refunded, please check our <a href="/">Refund Policy</a> page.  
            </Text>
            <Text className="trademark-text">
              *We guarantee that you can have your money back within 30 days since the purchase of any software from the <a href="/">www.avs4you.com</a> web site.
              <a href="/">Click here</a> to find out more on terms of moneyback.
            </Text>
            <Text className="trademark-text">By using our services, you agree to our use of cookies.</Text>
          </div>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(Register);