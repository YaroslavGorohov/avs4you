import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Text from '../components/text';
import Layout from "../components/layout";
import "../styles/support.less";
import ImageGQL from "../components/image-gql";
import mailIcon from "../images/partners/email.svg";
import Form from '../components/form-support';

class support extends React.PureComponent {

render(){

    return (
      <Layout className="support" pageContext={this.props.pageContext} t={this.props.t}>
        <div className="header">
          <ImageGQL className="headerBackgroundImage" imageName="support-header.png" style={{position: "absolute"}}/>
          <div className="header__background-gradient">
            <div className="header__body">
              <Text as="h1" className="header__heading">Support</Text>
              <Text as="h3" className="header__subtitle">All information related to AVS4YOU licensing, terms of use, purchase, lost key recovery and much more.</Text>
            </div>
          </div>
        </div>
        <div className="body-reseller screen-wrapper">
          <Text as="h2" className="common__heading">
            Find answers to any questions
          </Text>
          <div className="body-reseller__wrapper">
            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                AVS4YOU Support 
              </Text>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">Support form</Text>
              </Link>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">Read this first</Text>
              </Link>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">Refund policy</Text>
              </Link>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                FAQ 
              </Text>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">General Questions</Text>
              </Link>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">License Retrieval Questions</Text>
              </Link>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">Online Support System Questions</Text>
              </Link>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">Subscription Questions</Text>
              </Link>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                Knowledge Center
              </Text>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">Video how-to</Text>
              </Link>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">User Guides</Text>
              </Link>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">Online Help</Text>
              </Link>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                Download now
              </Text>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">AVS Video Converter</Text>
              </Link>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">AVS Video Editor</Text>
              </Link>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">AVS Video Remaker</Text>
              </Link>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">AVS Audio Editor</Text>
              </Link>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">AVS Audio Converter</Text>
              </Link>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">More product</Text>
              </Link>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                AVS4YOU License
              </Text>
              <Link className="common-info-block__link" to="/">
                <Text className="common-info-block__text">License retrieval</Text>
              </Link>
            </div>
          </div>
        </div>
        <div className="form screen-wrapper">
          <img src={mailIcon}/>
          <Text as="h2" className="common__heading">
            If you have not found the necessary information, please send a request
          </Text>
          <div className="reseller-from-wrapper">
            <Form></Form>
            <Text className="contact-us-text">If you have any questions about AVS4YOU Affiliate program, please contact us at <a href="mailto:affiliates@avs4you.com">affiliates@avs4you.com</a></Text>
          </div>
        </div>
        <div className="contact-body screen-wrapper">
          <div className="contact-body__max-width">
            <Text as="h2" className="common__heading">
              Contact AVS4YOU
            </Text>
            <div className="contact-body__wrapper">

              <div className="common-info-block">
                <Text as="h4" className="common-info-block__headline">
                  Affiliate Sales
                </Text>
                <Text className="common-info-block__text">
                  No need to pay for each program. 
                  You get a set of audio and video tools at the price of one application
                </Text>
              </div>

              <div className="common-info-block">
                <Text as="h4" className="common-info-block__headline">
                  Volume Sales
                </Text>
                <Text className="common-info-block__text">
                  To purchase a large number of licenses at a special price, 
                  contact our sales department at <a href="mailto:sales@avs4you.com">sales@avs4you.com</a>
                </Text>
              </div>

              <div className="common-info-block">
                <Text as="h4" className="common-info-block__headline">
                  Education
                </Text>
                <Text className="common-info-block__text">
                  To get a quote for schools and universities, 
                  please email us at <a href="mailto:sales@avs4you.com">sales@avs4you.com</a> or visit Education page
                </Text>
              </div>

              <div className="common-info-block">
                <Text as="h4" className="common-info-block__headline">
                  Customer Support
                </Text>
                <Text className="common-info-block__text">
                  For assistance with purchasing and using our products, 
                  please visit our Support Center
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(support);