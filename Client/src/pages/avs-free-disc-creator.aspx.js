import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import { Link as ScrollLink } from "react-scroll";
import Text from '../components/text';
import Layout from "../components/layout";
import PageContentWrapper from "../components/page-content-wrapper";
import ContentRowItem from '../components/content-row-item';
import ReviewScreen from '../components/review-screen';
import ScreenshotsCarousel from '../components/screenshot-carousel';
import ProductPagesWrapper from '../components/product-pages-wrapper';
import HeaderDownloadButtons from '../components/header-download-buttons';
import DownloadScrollButton from '../components/download-scroll-button';
import ImageGQL from '../components/image-gql';
import ScrollUpButton from '../components/scroll-up-button';

import AvatarChenWang from '../images/common/review-carousel/chen_wang.png';
import AvatarAndyStephens from '../images/common/review-carousel/quote_2.png';
import AvatarWilliamHolmes from '../images/common/review-carousel/quote_1.png';

class avsFreeDiscCreator extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      device: "",
    };

    this.getDevice = this.getDevice.bind(this);
  }

  getDevice(device) {
    this.setState({ device: device });
  }

  render() {

    return (
      <Layout 
        getDevice={this.getDevice} 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title="AVS Free Disc Creator is a free CD /DVD burning software."
        metaDescription="Copy DVD with AVS Free Disc Creator software. Write DVD/CD/Blu-ray data discs. Download free DVD /Blu-ray burning software!"
        metaKeywords="copy dvd, Free Disc Creator, blu-ray"
      >
        <ProductPagesWrapper imageName="aquamarine_background_main.jpg">
          <div className="headerBackground">
            <ImageGQL className="headerBackgroundImage" imageName="aquamarine_background_main.png" style={{ position: "absolute" }} />
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >
                <Text as="span" className="flagBackground header">{this.props.t("Free")}
                  <div></div>
                </Text>
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("Free AVS Disc Creator")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>{this.props.t("Burn audio, video, images easily with Free AVS Disc Creator")}</Text>
                <HeaderDownloadButtons
                  t={this.props.t}
                  mainHref="https://new.avs4you.com/downloads/AVSDiscCreator.exe"
                  secondaryText="Windows 10/8/7/Vista/XP"
                  backgroundColor="orange"
                  mainPadding="12px 37px"
                  margin="auto"
                />
              </div>
            </PageContentWrapper>
            <ImageGQL className="headerImage" imageName="disc_creator_header.png" style={{ maxWidth: "1564px" }} alt="header-image" />
            <ImageGQL className="headerImage mobile" imageName="disc_creator_header.png" style={{ maxWidth: "1564px" }} alt="header-image-mobile" />
          </div>
          <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
          <div className="scrollLinksWrapper">
            <ScrollLink to="overview" spy={true} smooth={true} offset={-70} duration={500} className="scrollToButton overview">
              <Text color="#666666" align="center">{this.props.t("Overview")}</Text>
            </ScrollLink>
            <ScrollLink to="reviews" spy={true} smooth={true} offset={0} duration={600} className="scrollToButton reviews">
              <Text color="#666666" align="center">{this.props.t("Reviews")}</Text>
            </ScrollLink>
            <ScrollLink to="screenshotsCarousel" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton screentour">
              <Text color="#666666" align="center">{this.props.t("Screentour")}</Text>
            </ScrollLink>
            <ScrollLink to="downloadButton" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton download">
              <Text color="#666666" align="center">{this.props.t("Download")}</Text>
            </ScrollLink>
          </div>

          <PageContentWrapper>
            <ContentRowItem
              id="overview"
              imgLeft={true}
              imageName="disc_creator_slide1.png"
              headerText={this.props.t("Burn video discs")}          
            >
              <Text className="ListItem">{this.props.t("Burn video files available on HDD directly jn a DVD disk DVD R, DVD RW, DVD RAM, DoubleDual Layer DVD, etc")}</Text>
              <Text className="ListItem">{this.props.t("Write your data onto Blu-ray discs")}</Text>
              <Text className="ListItem">{this.props.t("Store your data in the highest quality with the BD data capacity of 25 or 50 GB per disc")}</Text>
              <Text className="ListItem">{this.props.t("Make an exact copy of the source disk in one click")}</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={false}
              imageName="disc_creator_slide2.png"
              headerText={this.props.t("Burn audio and data discs")}
            >
              <Text className="ListItem">{this.props.t("Write your audio onto CD (CD-R, CD-RW) discs")}</Text>
              <Text className="ListItem">{this.props.t("Create audio discs in MP3 and WMA audio formats")}</Text>
              <Text className="ListItem">{this.props.t("Burn data discs with files of any type documents txt, html, doc, odt, etc, audio files mp3, wma, wav, etc, video files avi, mov, mpeg, etc, image files png, png, gif, etc")}</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={true}
              imageName="disc_creator_slide3.png"
              headerText={this.props.t("Make ISO image")}
            >
              <Text className="ListItem">{this.props.t("Create an image of your personal video and save it on PC")}</Text>
              <Text className="ListItem">{this.props.t("Make an ISO image directly from a disc or HDD")}</Text>
              <Text className="ListItem">{this.props.t("Edit, delete or add new files to the ready disc images")}</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={false}
              imageName="disc_creator_slide4.png"
              headerText={this.props.t("Create boot discs")}
            >
              <Text className="ListItem">{this.props.t("Create boot CD/DVD discs and make a copy of your software to load and run an operating system or utility programs in case of emergency")}</Text>
              <Text className="ListItem">{this.props.t("Burn video files available on HDD directly on to a disc")}</Text>
            </ContentRowItem>

          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
          <ReviewScreen 
              reviewsData={
                [
                  {
                    name: "Chen Wang",
                    avatar: AvatarChenWang,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("For the price, this is certainly great value for money I mostly use AVS Video Editor and Video Converter and I find them to be both excellent, easy to use with quality results")
                  },
                  {
                    name: "Andy Stephens",
                    avatar: AvatarAndyStephens,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("The product is super easy to download and use Anyone can do this in just minutes The company is always supportive I highly recommend")
                  },
                  {
                    name: "William Holmes",
                    avatar: AvatarWilliamHolmes,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("I have been using AVS for several years and can say for sure that it is very convenient user friendly and functional")
                  }
                ]
              }
            />
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">{this.props.t("Free AVS Disc Creator")}</Text>
          <ScreenshotsCarousel
            imageNames={["disc_creator_slide1.png", "disc_creator_slide2.png", "disc_creator_slide3.png", "disc_creator_slide4.png"]}
            imageNamesPopup={["disc_creator_slide1_2x.png", "disc_creator_slide2_2x.png", "disc_creator_slide3_2x.png", "disc_creator_slide4_2x.png"]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4"]}

          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("File Size")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">63.07 MB</Text>
              </div>

              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Current Version")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">10.1.2.627</Text>
              </div>

              <div className="downloadInfoRow">        
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Platforms")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows 10, 8.1, 8, 7, XP, 2003, Vista (no Mac OS/Linux support)")}</Text>
              </div>
            </div>
            <DownloadScrollButton className="buttonWrapper" href="https://new.avs4you.com/downloads/AVSDiscCreator.exe" to="headerContentWrapper" />
            <div className="licenseText">
              <Text align="center" color="#110C0C" fontSize={13}>{this.props.t("By clicking the Download button you agree to")} <Link to="/license-agreement.aspx">{this.props.t("our End User License Agreement")}</Link></Text>
            </div>
          </PageContentWrapper>
          <div className="technicalSpecificationWrapper">
            <PageContentWrapper>
              <Text className="headerSpecification" color="#000000" fontSize={32} align="center" fontWeight={600}>{this.props.t("Technical specification")}</Text>
              <div className="specificationGrid">
                <div>
                  <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>{this.props.t("MINIMUM SYSTEM REQUIREMENTS")}</Text>

                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Processor")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("AMD Intel Core 2 Duo compatible at 3 GHz or higher")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("RAM")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("2 GB or higher")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Sound")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows compatible sound card")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Display")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("32-bit color depth")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("CD recorder")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("32-bit color depth")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("DVD recorder")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("for importing from DVD and creating Video DVD")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Video capture device")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("required for capturing")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Windows Media Player")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("11 or higher for WMV video playback")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("DirectX")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Microsoft DirectX 90c or later")}</Text>
                  </div>
                </div>
                <div>
                  <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>{this.props.t("RECOMMENDED SYSTEM REQUIREMENTS")}</Text>

                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Operating system")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows 10/Windows 8x/Windows 7")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Processor")}:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("AMD Intel Core 2 Quad compatible at 24 GHz or higher")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("RAM")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("2 GB or higher")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Video")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows 10/Windows 8x/Windows 7 compatible video card")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Sound")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows 10/Windows 8x/Windows 7 compatible sound card")}</Text>
                  </div>
                </div>
              </div>
              <Text className="systemInfo" color="#000000" fontSize={16} fontWeight={500}>*{this.props.t("Administrative permissions for program installation and Internet connection for activation")}</Text>
              <div className="attentionBlock">
                <Text fontSize={16} fontWeight={500}>{this.props.t("Please note that AVS4YOU programs do not allow you to copy protected material You may use this software in copying material in which you own the copyright or have obtained permission to copy from the copyright owner")}.</Text>
              </div>
            </PageContentWrapper>
          </div>
        </ProductPagesWrapper>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(avsFreeDiscCreator);
