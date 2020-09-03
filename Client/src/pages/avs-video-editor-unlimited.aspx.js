import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Layout from "../components/layout";
import PageContentWrapper from "../components/page-content-wrapper";
import ProductPagesWrapper from '../components/product-pages-wrapper';
import ImageGQL from '../components/image-gql';
import ScrollUpButton from '../components/scroll-up-button';
import HeaderRowItem from '../components/header-row-item';
import styled from 'styled-components';
import VideoEditorSlider from '../components/cinema-slider';
import CinemaSlider from '../components/cinema-slider-redactor';
import Button from '../components/button';
import {GroupCard} from '../components/content-card/card-index';

import CreateSlide from '../images/avs-video-editor-final/cinema-slider/cards-frame/Frame1.svg';
import CreateSlide1 from '../images/avs-video-editor-final/cinema-slider/cards-frame/Frame2.svg';
import CreateSlide2 from '../images/avs-video-editor-final/cinema-slider/cards-frame/Frame3.svg';
import CreateSlide3 from '../images/avs-video-editor-final/cinema-slider/cards-frame/Frame4.svg';
import CreateSlide4 from '../images/avs-video-editor-final/cinema-slider/cards-frame/Frame5.svg';
import CreateSlide5 from '../images/avs-video-editor-final/cinema-slider/cards-frame/Frame6.svg';
import CreateSlide6 from '../images/avs-video-editor-final/cinema-slider/cards-frame/Frame7.svg';
import CreateSlide7 from '../images/avs-video-editor-final/cinema-slider/cards-frame/Frame8.svg';

const MainPageWrapper = styled.div`
  .bodyHeader{
    text-align: center; 
  }

  .headerContentWrapper{
    max-width: 400px;
    padding-left:45%;
    font-family:Montserrat;
  }

  .headerBackground{
    position:relative;
    margin-bottom: 150px;
  }


  .headerBackgroundImage{
    position:absolute !important;
    top: 0px;
    right:0;
    width: 100%;
    padding-top: 9%;
    max-height: 350px;
    min-width: 1920px;
    height: 100%;
    object-fit: none;
    object-position: center center;
    opacity: 1;
    transition: opacity 500ms ease 0s;
    z-index: -1;
  }

  .footerInfoAVS35 {
    font-family:Montserrat;
    .headerDescriptionTitleAVS {
        padding-top: 15px;
        padding-left: 33%;
        padding-right: 33%;
        padding-bottom: 40px;
    }
}

  .headerDescription{
    padding-top:15px;
    font-family:Montserrat;
  }

  .buttonsWrapper{
    margin-top:35px;
  }

  @media (min-width: 2150px) {
    .headerBackground{
    .headerBackgroundImage{
      margin-bottom: 5%;
      top: -55px;
    }
  }
  }

  @media (max-width: 1050px) {
    .headerBackground {
      background-image: none;
      background-position: 0 0;
    }

    .headerBackgroundImage{
      padding-top: 7%;
    }

    .headerDownloadButtons{
      .headerButtonsWrapper{
        margin: auto;
      }
    }
  }

  @media (max-width: 1500px) {
    .headerBackground{
    .headerBackgroundImage{
      right: -20%;
      padding-top: 8%;
    }
  }
  .footerInfoAVS35 {
    .headerDescriptionTitleAVS {
        padding-left: 25%;
        padding-right: 25%;
    }
}
  }

  @media (max-width: 1480px) {
    .headerBackgroundImage{
      padding-top: 7%;
    }
    .headerText{
      line-height: 53px;
      font-size: 47px;
    }
    .headerContentWrapper{
      padding-top: 115px;
      padding-bottom: 160px;
    }

    .headerDownloadButtons{
      margin-top:22px;
    }
    
  }

  @media (max-width: 1290px) {
    .headerBackground{
      .headerBackgroundImage{
        right: -30%;
      }
    }
    .footerInfoAVS35 {
      .headerDescriptionTitleAVS {
          padding-left: 20%;
          padding-right: 20%;
      }
  }
   }

   @media (max-width: 1200px) {
    .headerBackground{
      .headerBackgroundImage{
        right: -35%;
      }
    }
   }

   @media (max-width: 1150px) {
    .headerBackground{
      .headerBackgroundImage{
        right: -40%;
      }
    }
   }
`;

const StyleTextMontserrat = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
@font-face {
  font-family: 'Montserrat';
  src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
}
`;
class avsVideoEditorUnlimited extends React.PureComponent {

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
      <StyleTextMontserrat>
      <Layout 
        getDevice={this.getDevice} 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title="AVS Video Editor - easy video editing software for Windows."
        metaDescription="AVS Video Editor is an easy video editing program. Create, edit video, capture video/ make a video slideshow/ cut, merge, trim video files/ save to any format."
        metaKeywords="video editor, video editing software, video editing, download video editor, avs video editor, avs editor, avs movie editor, video editing tips,  windows movie maker, video editor app, edit video, edit video on iphone, cut video, download edit video, video edit software, mp4 editor, movie maker software, create video slideshow"
      >
        <ProductPagesWrapper>        
          <div className="headerBackground" style={{marginBottom:"2%", marginTop:"1%"}}>
            <PageContentWrapper>
              <HeaderRowItem 
               className="flexWrapper"
               imgLeft={true}
               imageName="VE 1.png"      
              >
                <div className="tableWrapperHeader35">
                <Text color="#ffffff" align="left" className="headerDescription" as="h5" color="#32393e" fontSize={45} fontWeight={700}>AVS Video Editor</Text>
                <Text color="#ffffff" align="left" className="headerText" lineHeight="45px" color="#32393e" fontSize={14} fontWeight={600} as="h1">{this.props.t("License AVS Video Editor 1 Year Subscription")}</Text>
                <Text color="#ffffff" align="left" className="headerText" lineHeight="25px" color="#32393e" fontSize={25} fontWeight={600} as="h1">{this.props.t("Create impressive videos - no experience required")}</Text>
                <Text color="#ffffff" align="left" className="headerDescription" lineHeight="10px" color="#32393e"  style={{paddingBottom:"10px"}} fontSize={18} fontWeight={600} as="h5">{this.props.t("Key features")}</Text>
                <div className="HeaderListItemTable" style={{paddingLeft:"15px"}}>
                   <div className="HeaderListItem35">
                      <Text className="ListItem">{this.props.t("All key formats supported")}</Text>
                      <Text className="ListItem">{this.props.t("User-friendly Timeline/Storyboard")}</Text>
                      <Text className="ListItem">{this.props.t("Trim, cut, split, merge, rotate")}</Text>
                   </div>
                   <div className="HeaderListItem">
                      <Text className="ListItem">{this.props.t("300+ modern video effects")}</Text>
                      <Text className="ListItem">{this.props.t("Video recording and capturing")}</Text>
                      <Text className="ListItem">{this.props.t("Exporting & publishing")}</Text>
                    </div>
                </div>
                <Text color="#ffffff" align="left" className="headerDescription" lineHeight="50px" color="#32393e" fontSize={14} fontWeight={600} as="h5">{this.props.t("Platforms: Windows 10, 8.1, 8, 7, XP, 2003, Vista")}</Text>
                <Text color="#ffffff" align="left" className="headerDescription" color="#32393e" fontSize={14} as="h5">{this.props.t("In stock")}</Text>
                <Text color="#ffffff" align="left" className="headerDescription" as="h5" color="#32393e" fontSize={35} fontWeight={900}>{this.props.t("$ 59.00")}</Text>
                <div className="buttonsWrapper" style={{display:"flex"}}>
                <div className="HeaderListItem35">  
                <Button
                    className="mainButton" 
                    fontSize={18}
                    padding="16.5px 92.5px"
                    textTransform="uppercase"
                    href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&">
                      {this.props.t("Buy")}</Button>
                </div>
                <div className="HeaderListItem" style={{marginLeft:"115px"}}>
                  <Button
                    className="secondaryButton" 
                    fontSize={18}
                    padding="15px 28.5px"
                    textTransform="uppercase"
                    href="https://new.avs4you.com/downloads/AVSVideoEditor.exe">
                     {this.props.t("Download now")}</Button>
                </div>
                    </div>
                </div>
              </HeaderRowItem>                     
            </PageContentWrapper>
            </div>        
            <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />

            <GroupCard>
            <GroupCard.Text align="center" className="headerDescription" as="h5" color="#32393e" fontWeight={700} fontSize={28}>{this.props.t("Work with all formats")}</GroupCard.Text>
              <GroupCard.GridRow>
                <GroupCard.GridColumn sm='2' xl='2'>
                  <GroupCard.Card>
                      <GroupCard.CardImage style={{ backgroundImage: `url(${CreateSlide})`}}></GroupCard.CardImage>    
                      <GroupCard.CardTitle>{this.props.t("All key video formats and codecs")}</GroupCard.CardTitle>
                      <GroupCard.CardDescription>{this.props.t("Edit & save video files in AVI, VOB, MP4, DVD, WMV, 3GP, MOV, MKV, using popular codecs H.264, MPEG-4, H.263 etc. Process video with different frame sizes")}: {this.props.t("HD, Full HD, 2K Quad HD, 4K Ultra HD and DCI 4K.")}</GroupCard.CardDescription>
                  </GroupCard.Card>
                </GroupCard.GridColumn>

                <GroupCard.GridColumn sm='2' xl='2'>
                  <GroupCard.Card>
                    <GroupCard.CardImage style={{ backgroundImage: `url(${CreateSlide1})`}}></GroupCard.CardImage>
                      <GroupCard.CardTitle>{this.props.t("Video capturing and recording")}</GroupCard.CardTitle>
                      <GroupCard.CardDescription>{this.props.t("Transfer video from DV/HDV cameras, webcams or VHS cameras. Record media files from your PC screen.")}</GroupCard.CardDescription>            
                  </GroupCard.Card>
                </GroupCard.GridColumn>

                <GroupCard.GridColumn sm='2' xl='2'>
                  <GroupCard.Card >
                    <GroupCard.CardImage style={{ backgroundImage: `url(${CreateSlide2})`}}></GroupCard.CardImage>
                      <GroupCard.CardTitle>{this.props.t("Creating slideshows")}</GroupCard.CardTitle>
                      <GroupCard.CardDescription>{this.props.t("Make slideshows with your photos. BMP, JPEG, PNG, TIFF, GIF, ICO, WMF, EMF, PCX, TGA, RAS, PSD formats are supported.")}</GroupCard.CardDescription>
                  </GroupCard.Card>
                </GroupCard.GridColumn>

                <GroupCard.GridColumn sm='2' xl='2'>
                  <GroupCard.Card>
                    <GroupCard.CardImage style={{ backgroundImage: `url(${CreateSlide3})`}}></GroupCard.CardImage>
                      <GroupCard.CardTitle>{this.props.t("Adding soundtracks")}</GroupCard.CardTitle>
                      <GroupCard.CardDescription>{this.props.t("Record voice and add your favourite audio tracks. Adjust audio applying different effects")}: {this.props.t(" Amplify,  Noise Removal,  Equalizer,  Normalize,  Compressor,  Pitch Shift.")}</GroupCard.CardDescription>
                  </GroupCard.Card>
                </GroupCard.GridColumn>
              </GroupCard.GridRow>
            </GroupCard>

          <CinemaSlider /> 
          
          <VideoEditorSlider />
          
          <GroupCard>
            <GroupCard.Text align="center" className="headerDescription" as="h5" color="#32393e" fontWeight={700} fontSize={28}>{this.props.t("Save to computer or devices")},<br /> {this.props.t("burn discs or upload to social media networks")}</GroupCard.Text>
              <GroupCard.GridRow>    
                <GroupCard.GridColumn sm='2' lg='2'>
                  <GroupCard.CardCenter >
                    <GroupCard.CardImageCenter style={{ backgroundImage: `url(${CreateSlide4})`}}></GroupCard.CardImageCenter>
                      <GroupCard.CardTitleCenter>{this.props.t("Save to file")}</GroupCard.CardTitleCenter>
                      <GroupCard.CardDescriptionCenter>{this.props.t("Save an  MP4, DVD, MOV, AVI, MPEG, WMV,  MKV,  M2TS,  TS, GIF video file onto your computer hard disk drive")}</GroupCard.CardDescriptionCenter>
                  </GroupCard.CardCenter>
                </GroupCard.GridColumn>

                <GroupCard.GridColumn sm='2' lg='2'>
                  <GroupCard.CardCenter >
                    <GroupCard.CardImageCenter style={{ backgroundImage: `url(${CreateSlide5})`}}></GroupCard.CardImageCenter>
                      <GroupCard.CardTitleCenter>{this.props.t("Save to disc")}</GroupCard.CardTitleCenter>
                      <GroupCard.CardDescriptionCenter>{this.props.t("Create a DVD-video or Blu-ray disc with a menu, or a DivX & Xvid disc compatible with most up-to-date hardware DVD players.")}</GroupCard.CardDescriptionCenter>
                  </GroupCard.CardCenter>
                </GroupCard.GridColumn>

                <GroupCard.GridColumn sm='2' lg='2'>
                  <GroupCard.CardCenter >
                    <GroupCard.CardImageCenter style={{ backgroundImage: `url(${CreateSlide6})`}}></GroupCard.CardImageCenter>
                      <GroupCard.CardTitleCenter>{this.props.t("Save to devices")}</GroupCard.CardTitleCenter>
                      <GroupCard.CardDescriptionCenter>{this.props.t("Create a video for mobile phones or gaming consoles such as Apple iPod, Apple iPhone, Apple iPad, Sony PSP, Android and BlackBerry and upload it right to the device.")}</GroupCard.CardDescriptionCenter>
                  </GroupCard.CardCenter>
                </GroupCard.GridColumn>

                <GroupCard.GridColumn sm='2' lg='2'>
                  <GroupCard.CardCenter >
                    <GroupCard.CardImageCenter style={{ backgroundImage: `url(${CreateSlide7})`}}></GroupCard.CardImageCenter>
                      <GroupCard.CardTitleCenter>{this.props.t("Save for Web")}</GroupCard.CardTitleCenter>
                      <GroupCard.CardDescriptionCenter>{this.props.t("Save video into Flash or WebM format and upload to the popular web services")}: {this.props.t("YouTube, Facebook, Telly, Dailymotion, Flickr and Dropbox.")}</GroupCard.CardDescriptionCenter>
                  </GroupCard.CardCenter>
                </GroupCard.GridColumn>
            </GroupCard.GridRow>
            </GroupCard>
         
        <MainPageWrapper>
        <div className="headerBackground">
        <ImageGQL className="headerBackgroundImage" imageName="fonImage.png"/> 
          <PageContentWrapper>
            <div id="headerCoupon" className="headerContentWrapper">   
              <Text align="left" color="#32393e" fontWeight={600} className="headerDescription" as="h5" fontSize={30}>{this.props.t("Become an expert in video editing right now")}:</Text>
              <div className="buttonsWrapper">
                  <Button
                    className="mainButton" 
                    fontSize={18} 
                    padding="16px 43px"
                    style={{backgroundColor:"#FC4B15"}}
                    textTransform="uppercase"
                    href="https://new.avs4you.com/downloads/AVSVideoEditor.exe">
                      {this.props.t("Download now")}</Button>
                    </div>
            </div>
          </PageContentWrapper>
        </div>
        <div className="footerInfoAVS35">
        <Text align="center" color="#32393e" className="headerDescriptionTitleAVS" as="h5" fontSize={13} >{this.props.t("Purchasing AVS Video Editor unlimited subscription, you acquire full access to the program without any time limitations. There is no need to renew the subscription.")}</Text>
        </div>
        </MainPageWrapper>
        </ProductPagesWrapper>
      </Layout>
      </StyleTextMontserrat>
    );
  }
};
export default withI18next({ ns: "common" })(avsVideoEditorUnlimited);