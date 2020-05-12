import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Layout from "../components/layout";
import PanelCollapse from "../components/panel-collapse";
import "../styles/register.less";
import Button from "../components/button";
import ImageGQL from "../components/image-gql";
import Cookies from 'universal-cookie';
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

import VideoIcon from '../images/register/register-video-icon.svg';
import GuaranteeIcon from '../images/register/register-guarantee-icon.svg';
import ManyYearsIcon from '../images/register/register-many-years-icon.svg';
import SecureIcon from '../images/register/register-secure-icon.svg';
import SupportIcon from '../images/register/register-support-icon.svg';
import PeopleIcon from '../images/register/register-people-icon.svg';

const defaultHrefUnlim = "https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1";
const defaultHrefOneYear = "https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1";

const shareItHrefUnlim = "https://order.shareit.com/cart/add?vendorid=200281390&PRODUCT[300919255]=1";
const shareItHrefOneYear = "https://order.shareit.com/cart/add?vendorid=200281390&PRODUCT[300919254]=1";

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

const regExp = /=regnow:(.*):/;
const date = new Date();
const currentMounth = date.getMonth();
const currentYear = date.getFullYear();

const mounth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class Register extends React.PureComponent {

constructor(){
  super();
  this.cookies = new Cookies();

  this.affiliateID = "";
  this.siteTrasingCookie = this.cookies.get("Site_Tracing"); 

  if(this.siteTrasingCookie){
    this.affiliateID = this.siteTrasingCookie.match(regExp)[1];
  };

  this.state = {
    hrefUnlim: this.cookies.get("Site_Tracing") ? shareItHrefUnlim + `&languageid=1&currency=USD&affiliate=${this.affiliateID}` : defaultHrefUnlim,
    hrefOneYear: this.cookies.get("Site_Tracing") ? shareItHrefOneYear + `&languageid=1&currency=USD&affiliate=${this.affiliateID}` : defaultHrefOneYear,
    documentLoaded: false,
  };
}

componentDidMount(){
  this.setState({
   documentLoaded: true
 })
}

render(){
    return (
      <Layout 
       className="register" 
       pageContext={this.props.pageContext} 
       t={this.props.t}
       title="AVS4YOU Get professionals multimedia tools"
       metaDescription="AVS4YOU: Professional Multimedia Tools"
       metaKeywords=""
      >
        <Helmet>
          <script src={withPrefix('avangate-affiliates-run.js')} type="text/javascript" /> 
          {this.state.documentLoaded && <script src={withPrefix('impact-affiliates-run.js')} type="text/javascript" />}
        </Helmet>
        <div className="screen-wrapper first">
          <div className="sale-text">
            <Text as="h1">70% OFF! <br className="mobile-br"/> In {mounth[currentMounth]} only!</Text>
          </div>
          <Text className="get-tools-text" as="h5">AVS4YOU Multimedia Suite for Windows</Text>
          <div className="buy-block-wrapper">
            <div className="buy-block"> 
              <Text className="subscription-time-text" as="h3">1 year</Text>
              <Text className="access-sub-text">subscription</Text>
              <Text className="access-limit">1 year access</Text>
              <Text className="sub-now-text">Subscribe now for</Text>
              <div className="price-block">
                <Text className="prev-price-text">$69.00</Text>
                <Text className="current-price-text"><span>$</span>39.00</Text>
              </div>
              <Text className="limited-offer-text">Time limited offer</Text>
              <Text className="limited-offer-text last">prices valid till {mounth[currentMounth]} {getLastDayOfMonth(currentYear, currentMounth)}, {currentYear}</Text>
              <Button
                backgroundColor="orange"
                color="#ffffff"
                href={this.state.hrefOneYear}
                className="buy-block-button"
              >
                Buy now
              </Button>
            </div>
            <div className="buy-block unlimited-block">
              <div className="popular-banner">
                <Text as="p">Most popular</Text>
              </div>
              <div className="unlimited-block-content">
                <Text className="subscription-time-text" as="h3">Unlimited</Text>
                <Text className="access-sub-text">subscription</Text>
                <Text className="access-limit">Unlimited access</Text>
                <Text className="sub-now-text">Subscribe now for</Text>
                <div className="price-block">
                  <Text className="prev-price-text">$199.00</Text>
                  <Text className="current-price-text"><span>$</span>59.00</Text>
                </div>
                <Text className="limited-offer-text">Time limited offer</Text>
                <Text className="limited-offer-text last">prices valid till {mounth[currentMounth]} {getLastDayOfMonth(currentYear, currentMounth)}, {currentYear}</Text>
                <Button
                  href={this.state.hrefUnlim}
                  backgroundColor="orange"
                  color="#ffffff"
                  className="buy-block-button"
                >
                  Buy now
                </Button>
              </div>
            </div>
          </div>
          <div className="availableCarts">
            <ImageGQL imageName="register-available-carts.png"/>
          </div>
        </div>
        <div className="screen-wrapper">
          <Text as="h2" className="common__heading">
            Why choose AVS4YOU?
          </Text>
          <div className="why-choose-wrapper">
            <tr className="first-tr">
              <div className="why-choose-item">
                <img src={VideoIcon} className="icon" />
                <Text className="text">15 multimedia programs in 1 package</Text>
              </div>
              <div className="why-choose-item">
                <img src={SecureIcon} className="icon"/>
                <Text className="text">100% secure, ad-free, virus-free</Text>
              </div>
              <div className="why-choose-item">
                <img src={GuaranteeIcon} className="icon"/>
                <Text className="text">30-day Money-back guarantee</Text>
              </div>
            </tr>

            <tr>
            <div className="why-choose-item">
                <img src={ManyYearsIcon} className="icon"/>
                <Text className="text">No watermark</Text>
              </div>
              <div className="why-choose-item">
                <img src={SupportIcon} className="icon"/>
                <Text className="text">Free support, free updates</Text>
              </div>  
              <div className="why-choose-item">
                <img src={PeopleIcon} className="icon"/>
                <Text className="text">20M happy users worldwides</Text>
              </div>     
            </tr>
          </div>
        </div>
        <div>
          <div className="questions-wrapper">

            <Text as="h2" className="common__heading">
              Frequently asked questions
            </Text>

            <div className="questions-block">
              <PanelCollapse className="panelCollapse" panelName="What is the difference between 1 Year and Unlimited Subscription types?">
                <div className="collapseContent">
                    <Text className="hiddenText">1 Year Subscription grants you a full access to all AVS4YOU programs during a year whereas there are no 
                    time limitations for using AVS4YOU Unlimited Subscription.
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName="What happens when 1 year Subscription gets expired?">
                <div className="collapseContent">
                    <Text className="hiddenText">All AVS4YOU programs become unregistered and a watermark will be added to the output files.</Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName="What are the limitations of unactivated AVS4YOU software?">
                <div className="collapseContent">
                    <Text className="hiddenText">A voice logo is applied to output audio files and in the video programs a watermark is 
                    added to the output files throughout the whole video.
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName="How can I get rid of the annoying voice logo and watermark?">
                <div className="collapseContent">
                    <Text className="hiddenText">It is necessary to buy an AVS4YOU subscription and activate the software with the license key.
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName=" May I transfer the license key to a new computer?">
                <div className="collapseContent">
                    <Text className="hiddenText">According to AVS4YOU license policy it is not allowed to transfer the license from one computer to another. 
                    In this case it is necessary to buy an additional subscription.
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName="May I use AVS4YOU software on multiple computers with the same license key?">
                <div className="collapseContent">
                    <Text className="hiddenText">One license key can be used to activate the software on a single computer. 
                    If you want to use the software on multiple computers you need to buy the appropriate number of subscriptions.
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName="Is my payment information secure?">
                <div className="collapseContent">
                    <Text className="hiddenText">Yes, it is. All transactions are processed via the 2Checkout payment gateway. 
                    2Checkout provides the highest standards of online security and guarantees the safety of your payments and personal information.
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName="I want a refund. How can I get my money back?">
                <div className="collapseContent">
                    <Text className="hiddenText">If you experience technical or other problems that cannot be solved, you can get a complete refund of your purchase price within 30 days. Check our Refund Policy ( <a target="_blank" href="https://support.avs4you.com/refund.aspx">https://support.avs4you.com/refund.aspx</a> ) to find out if you are eligible for a full refund.
                    </Text>
                </div>
              </PanelCollapse>
            </div>

          </div>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(Register);
