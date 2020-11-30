import React from "react";
import withI18next from "../components/withI18next";
import Link from "../components/link";
import Text from "../components/text";
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import "../styles/advent-calendar.less";
import styled from 'styled-components';
import CalendarItem from "../components/calendar-item";
import Modal from '../components/modal';
import CopyLink from '../images/advent-calendar/copy_link.svg';

import {
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

import MusicOn from "../images/advent-calendar/music.svg";
import MusicOff from "../images/advent-calendar/music.svg";
import AudioCalendar from "../images/advent-calendar/Illusion_disclosure.mp3";

const MenuWrstyle = styled.div`
.share {
	position: fixed;
	top: 30px;
  right: 10px;
	@include breakpoint(tablet) {
		right: unset;
		bottom: unset;
	}
	&__toggle:checked {
		~ .share__button {
    transform: rotate(-180deg);
		}
		~ .share__icon--facebook {
			transform: translateY(55px) rotate(0);
		}
		~ .share__icon--twitter {
			transform: translateY(110px) rotate(0);
		}
		~ .share__icon--pinterest {
			transform: translateY(165px) rotate(0);
		}
		~ .share__icon--youtube {
			transform: translateY(220px) rotate(0);
		}
	}
	&__button {
		position: relative;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
    height: 50px;
    background-position: 50%;
		color: white;
		background-color:rgb(20, 45, 51);
		border-radius: 50px;
		box-shadow: 0px 0px 0px 1px rgb(20, 45, 51);
		cursor: pointer;
		transition: .3s ease;
	}
	&__icon {
		position: absolute;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		border-radius: 50px;
		transform: translateX(0) rotate(180deg);
		cursor: pointer;
		transition: .3s ease-in-out;
    &--facebook {
			background-color: #3b5998;
		}
		&--twitter {
			background-color: #1da1f2;
		}
		&--pinterest {
			background-color: #bd081c;
		}
		&--youtube {
			background-color: #bd081c;
		}
	}
}
`;


const ModalStyle = styled.div`
.ModalShaer{
  display: grid;
  }
  .ModalShaerClose{
    margin: 10px 0px 0px;
    width: 50px;
    height: 50px;
    padding: 10px;
    border: none;
    border-radius: 25px;
    position: absolute;
    top: -65px;
    right: -55px;
  }
  
  .ModalShaerText{
    margin: 15px;
  }
  .Demo__some-network {
    vertical-align: top;
    display: inline-block;
    margin-right: 10px;
    text-align: center;
  }
  
  .Demo__some-network__share-button {
    display: inline-flex;
    justify-content: center;
    white-space: nowrap;
    overflow: visible;
    cursor: pointer;
    padding-bottom: 15px;
  }
  
  .Demo__some-network__share-button:hover:not(:active) {
    opacity: 0.75;
  }
  .Demo__some-network__image_copylink
  {
    width: 64px;
  }
`;

class adventCalendar extends React.PureComponent {
    constructor(props) {
        super(props);
          this.state = {
              play: true,
              autoplay: false,
              device: "",
              isModalOpen: false,
              isInnerModalOpen: false,
            }
            this.audio = new Audio(AudioCalendar);
            this.getDevice = this.getDevice.bind(this);
            this.closeModal = this.closeModal.bind(this);
            this.openModal = this.openModal.bind(this);
    }

    getDevice(device){
      this.setState({ device: device });
    }
  
    // close modal (set isModalOpen, true)
    closeModal() {
      this.setState({
        isModalOpen: false
      });
    }
  
    // open modal (set isModalOpen, false)
    openModal() {
      this.setState({
        isModalOpen: true
      });
    }

      componentDidMount() {
        this.audio.load();
        this.playAudio();
        this.audio.addEventListener('ended', () => this.setState({ play: true }));
      }
    
      componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({ play: true }));
      }

      playAudio() {
        const audioPromise = this.audio.play(!this.state.autoplay)
        if (audioPromise !== undefined) {
          audioPromise
            .then(_ => {
              // autoplay started
            })
            .catch(err => {
              // catch dom exception
              console.info(err)
            })
        }
    }
     
      togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
          this.state.play ? this.audio.play() : this.audio.pause();
        });
      }

  render() {
    const shareUrl = 'http://avs4you.com/advent-calendar.aspx';
    const title = 'AVS4YOU';


    return (
      <Layout
        headerIsDisabled={true}
        footerIsDisabled={true}
        className="advent-calendar"
        pageContext={this.props.pageContext}
        t={this.props.t}
        title={this.props.t(
          "AVS4YOU best software for processing video, audio, image"
        )}
        metaDescription=""
        metaKeywords=""
      >
        <div className="advent_main_part">
          <div id="particles-js"></div>
          <div className="social_block">
            <div className="social_block_opacity"></div>
            <div className="social_box"></div>
          </div>
          <div className="advent_header_top">
            <div className="aht_narrow">
              <div className="afh_logo">
                <a className="afh_logo_link" href="https://avs4you.com"></a>
              </div>
              <div className="afh_share_block">
            <div className="share">
            <MenuWrstyle>
                <input type="checkbox" id="toggle" class="share__toggle" hidden />
                <label for="toggle" class="share__button">
                    <img src="https://www.dropbox.com/s/7xu7sivp4wzscer/share.png?raw=1" alt="" onClick={() => this.openModal()}/>
                </label>
                </MenuWrstyle>
                <Modal
                    isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                  >
                    <ModalStyle>
                    <button
                    className="ModalShaerClose"
                      onClick={this.closeModal}
                    >
                      x
                    </button>
                    
                    <FacebookShareButton
                      url={shareUrl}
                      quote={title}
                      style={{
                        paddingBottom: "15px"
                      }}
                      className="Demo__some-network__share-button"
                    >
                      <FacebookIcon size={64} round />
                      <Text className="ModalShaerText">Share</Text>
                    </FacebookShareButton>

                    <TwitterShareButton
                      url={shareUrl}
                      title={title}
                      style={{
                        paddingBottom: "15px"
                      }}
                      className="Demo__some-network__share-button"
                    >
                      <TwitterIcon size={64} round />
                      <Text className="ModalShaerText">Tweet</Text>
                    </TwitterShareButton>


                    <button 
                        onClick={() =>  navigator.clipboard.writeText({shareUrl})}
                        style={{
                          paddingBottom: "15px",
                          border: "none",
                          backgroundColor: "#ffffff",
                        }}
                        className="Demo__some-network__share-button"
                      >
                        <img className=".Demo__some-network__image_copylink" 
                        size={64} 
                        round src={CopyLink}
                        style={{
                          width: "64px"
                        }}/>
                        <Text className="ModalShaerText">Copy the link</Text>
                      </button>
                    </ModalStyle>
                  </Modal>
            </div>
              </div>
              <div className="afh_music_block">
                <button class="afh_music" onClick={this.togglePlay}>
                    {(this.state.play && !this.state.autoplay) 
                        ? <img src={MusicOff}/>  // pause
                        : <img src={MusicOn}/>   // play
                    }
                </button>
              </div>
              <audio class="audio_christmas" src="" type="audio/wav" autoplay="true"></audio>
            </div>
          </div>
          <div className="advent_heading">
            <h1>
              The exciting 24 days of <br /> Magic Christmas Countdown with
              AVS4YOU
            </h1>
            <div className="advent_header_sub">
              Enjoy amazing gifts and non-stop discounts each day up to{" "}
              <b>99% Off!</b>
            </div>
          </div>

          <div className="adventCalendarContainer">
            <CalendarItem
              imageCoordinate={0}
              date={new Date(2020, 11, 1)}
              popupTitle="Happy first Sunday of Advent 2020!"
              popupDiscount="AVS4YOU wishes you a miraculous festive season!"
              popupCoupon="Get a $20 gift card for a review of AVS4YOU programs on Capterra"
              popupSub="just contact us with your first name and a relevant email address"
            />
            <CalendarItem
              imageCoordinate={-184}
              date={new Date(2020, 11, 2)}
              popupTitle="On the second Day of Christmas AVS4YOU gives"
              popupDiscount="a 20% discount coupon on AVS4YOU Unlimited Subscription"
              popupCoupon="Unlim20"
              popupSub="*Just use this coupon while purchasing"
            />
            <CalendarItem imageCoordinate={-369} date={new Date(2020, 11, 3)} 
              popupTitle="On the third  Day of Christmas AVS4YOU gives"
              popupDiscount="a 15% discount coupon on AVS4YOU 1 Year Subscription!"
              popupCoupon="Annual15"
              popupSub="*Just use this coupon while purchasing"
              />
            <CalendarItem imageCoordinate={-553} date={new Date(2020, 11, 4)} 
              popupTitle="On the fourth day of Christmas Get a special gift from our partner ONLYOFFICE, an online office suite manufacturer,"
              popupDiscount="1 year cloud subscription for 1-2 users with a 50% discount!"
              popupCoupon="Cloud50"
              popupSub="*Just use this coupon while purchasing"
              />
            <CalendarItem imageCoordinate={-737} date={new Date(2020, 11, 5)} 
              popupTitle="On the 6th day of Christmas"
              popupDiscount="AVS4YOU grants you a 20% promo code on 1 Year Subscription"
              popupCoupon="Annual20"
              popupSub="*Just use this coupon while purchasing"
              />
            <CalendarItem imageCoordinate={-921} date={new Date(2020, 11, 6)} />
            <CalendarItem
              imageCoordinate={-1106}
              date={new Date(2020, 11, 7)}
            />
            <CalendarItem
              imageCoordinate={-1290}
              date={new Date(2020, 11, 8)}
            />
           <CalendarItem
              imageCoordinate={-1474}
              date={new Date(2020, 11, 9)}
            />
            <CalendarItem
              imageCoordinate={-1658}
              date={new Date(2020, 11, 10)}
            />
            <CalendarItem
              imageCoordinate={-1842}
              date={new Date(2020, 11, 11)}
            />
            <CalendarItem
              imageCoordinate={-2026}
              date={new Date(2020, 11, 12)}
            />
            <CalendarItem
              imageCoordinate={-2210}
              date={new Date(2020, 11, 13)}
            />
            <CalendarItem
              imageCoordinate={-2394}
              date={new Date(2020, 11, 14)}
            />
            <CalendarItem
              imageCoordinate={-2578}
              date={new Date(2020, 11, 15)}
            />
            <CalendarItem
              imageCoordinate={-2762}
              date={new Date(2020, 11, 16)}
            />
            <CalendarItem
              imageCoordinate={-2946}
              date={new Date(2020, 11, 17)}
            />
            <CalendarItem
              imageCoordinate={-3130}
              date={new Date(2020, 11, 18)}
            />
            <CalendarItem
              imageCoordinate={-3314}
              date={new Date(2020, 11, 19)}
            />
            <CalendarItem
              imageCoordinate={-3498}
              date={new Date(2020, 11, 20)}
            />
            <CalendarItem
              imageCoordinate={-3682}
              date={new Date(2020, 11, 21)}
            />
            <CalendarItem
              imageCoordinate={-3866}
              date={new Date(2020, 11, 22)}
            />
            <CalendarItem
              imageCoordinate={-4050}
              date={new Date(2020, 11, 23)}
            />
            <CalendarItem
              imageCoordinate={-4236}
              date={new Date(2020, 11, 24)}
            />
          </div>
          <div className="advent_footer_block">
            <div className="afb_logo">
              <div className="afb_logo_link"></div>
            </div>
            <div className="afb_copyright">
              Online Media Technologies Ltd., UK 2020 All rights reserved.
            </div>
          </div>
        </div>

      </Layout>
    );
  }
}
export default withI18next({ ns: "common" })(adventCalendar);
