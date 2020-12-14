import React from "react";
import withI18next from "../components/withI18next";
import "../styles/youtube-video-editor.less";
import ProductPagesWrapper from '../components/product-pages-wrapper';
import Text from '../components/text';
import ImageGQL from '../components/image-gql';
import ScrollUpButton from '../components/scroll-up-button';
import Button from '../components/button';
import { Link as ScrollLink } from "react-scroll";
import Slider from "react-slick";
import styled, { css } from 'styled-components';
import Layout from "../components/layout";

const StyleSlick = styled.div`
.slick-active{
  width: 120px;
  .lfb_btn_capture  {
      left: -735px;
      top: -435px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
  .lfb_btn_cut {
      left: -755px;
      top: -315px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
   .lfb_btn_remove {
      left: -795px;
      top: -80px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
   .lfb_btn_apply {
      left: -775px;
      top: -195px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
  
  .lfb_btn_use {
      right: -510px;
      top: -435px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
  .lfb_btn_addtracks {
      right: -490px;
      top: -315px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
  .lfb_btn_insert {
      right: -470px;
      top: -195px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
   .lfb_btn_save {
      right: -450px;
      top: -80px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
}
.lfb_btn_capture  {
  left: -710px;
  top: -435px;
}
.lfb_btn_cut {
  left: -730px;
  top: -315px;
}
.lfb_btn_remove {
  left: -770px;
  top: -80px;
}
.lfb_btn_apply {
  left: -750px;
  top: -195px;
}

.lfb_btn_use {
  right: -510px;
  top: -435px;
}
.lfb_btn_addtracks {
  right: -490px;
  top: -315px;
}
.lfb_btn_insert {
  right: -470px;
  top: -195px;
}
.lfb_btn_save {
  right: -450px;
  top: -80px;
}

.lfb_carousel {
  margin-bottom: 4vw;
  margin-left: -5.5%;
  width: 110%;
}

.slick-reviews .item {
  border-radius: 0.3vw;
  color: #333333;
  display: inline-block;
  margin-right: 2%;
  margin-top: 2vw;
  padding: 4.2vw 2.1vw 3vw;
  vertical-align: top;
  width: 25% !important;
}

.slick-reviews .item:first-child {
  margin-left: 2.5vw;
}

.slick-reviews .item:hover {
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1);
}

.slick-reviews .item:last-child {
  margin-bottom: 3vw;
  margin-right: 0;
  width: 26% !important;
}



#slick_steps li.slick-active .lfb_es_icon{
  background-position-y: -3.35vw;
  transition-delay: 100ms;
}

#slick_steps li.slick-active .lfb_tab {
  background-color: #796bc0;
  color: #ffffff;
  width: 13.4vw;
}

#slick_steps li.slick-active .lfb_btn_capture, #slick_steps li.slick-active .lfb_btn_cut, #slick_steps li.slick-active .lfb_btn_remove, #slick_steps li.slick-active .lfb_btn_apply {
  left: -10%;
}

#slick_steps ul {
  height: 20vw;
  list-style: none;
  position: absolute;
  top: 5vw;
  width: 48vw;
}

#slick_steps .slick-list {
  position: relative;
  z-index: 1;
}
.slick-active{
  width: 120px;
  .lfb_btn_capture  {
      left: -735px;
      top: -435px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
  .lfb_btn_cut {
      left: -755px;
      top: -315px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
   .lfb_btn_remove {
      left: -795px;
      top: -80px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
   .lfb_btn_apply {
      left: -775px;
      top: -195px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
  
  .lfb_btn_use {
      right: -510px;
      top: -435px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
  .lfb_btn_addtracks {
      right: -490px;
      top: -315px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
  .lfb_btn_insert {
      right: -470px;
      top: -195px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
   .lfb_btn_save {
      right: -450px;
      top: -80px;
      width: 250px;
      background-color: #796bc0;;
      color: white;
  }
}
.lfb_btn_capture  {
  left: -710px;
  top: -435px;
}
.lfb_btn_cut {
  left: -730px;
  top: -315px;
}
.lfb_btn_remove {
  left: -770px;
  top: -80px;
}
.lfb_btn_apply {
  left: -750px;
  top: -195px;
}

.lfb_btn_use {
  right: -510px;
  top: -435px;
}
.lfb_btn_addtracks {
  right: -490px;
  top: -315px;
}
.lfb_btn_insert {
  right: -470px;
  top: -195px;
}
.lfb_btn_save {
  right: -450px;
  top: -80px;
}

.lfb_carousel {
  margin-bottom: 4vw;
  margin-left: -5.5%;
  width: 110%;
}

.lfb_header {
  color: #ffffff;
  margin-left: 10%;
  text-align: right;
  width: 80%;
}

.lfb_download_btn {
  background: #78E9EC;
  border-radius: 3em;
  font-weight: 600;
  padding: 0.7em 2.6em;
}

.lfb_download_btn:hover {
  background: #FFFFFF;
}

.lfb_easy_steps {
  color: #333333;
  font-size: 3.35vw;
  font-weight: 600;
  line-height: 1.2em;
  margin: 2.5vw auto 2vw;
  padding-top: 1vw;
  text-align: center;
  width: 52%;
}

.lfb_easy_steps::before {
  background: #333333;
  content: '';
  display: block;
  height: 4px;
  margin: 0 auto;
  position: relative;
  top: -2.5vw;
  width: 6vw;
}

.lfb_easy_steps_car {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/blue_dot.svg), url(https://imgs.avs4you.com/en/landing-for-bloggers/images/orange_dot.svg);
  background-position: 0 0, 100% 93%;
  background-repeat: no-repeat;
  background-size: 20%;
  margin: 0 auto 4vw;
  padding: 2vw;
  width: 47vw;
}

.lfb_es_icon {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/slider_icons.svg);
  background-repeat: no-repeat;
  background-size: 25vw;
  height: 1.7vw;
  left: 1.25vw;
  position: absolute;
  top: 0.97vw;
  width: 1.7vw;
}

.lfb_es_label {
  background: rgba(118, 104, 188, 0.95);
  border-bottom-left-radius: 0.5vw;
  border-bottom-right-radius: 0.5vw;
  color: #FFFFFF;
  font-size: 1vw;
  line-height: 1.6vw;
  padding: 1.6vw 10%;
  position: absolute;
  text-align: center;
  top: 29.3vw;
  width: 80%;
}

.lfb_es_add_text {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/slider_images/add_text.png);
}

.lfb_es_apply {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/slider_images/apply_effects.png);
}

.lfb_es_addtracks {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/slider_images/add_you_audio_tracks.png);
}

.lfb_es_capture {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/slider_images/capture_video.png);
}

.lfb_es_change {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/slider_images/change_background.png);
}

.lfb_es_cut {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/slider_images/cut_trim_join.png);
}

.lfb_es_remove {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/slider_images/remove_defects.png);
}

.lfb_es_upload {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/slider_images/upload_to_youtube.png);
}

.lfb_head_img {
  display: inline-block;
  margin-bottom: 2vw;
  margin-top: -2vw;
  width: 50%;
}

.lfb_head_img img {
  height: auto;
  width: 100%;
}

.lfb_head_text {
  color: #ffffff;
  display: inline-block;
  float: left;
  margin-left: 10%;
  width: 37%;
}

.lfb_ht_header {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/youtube_icon.svg);
  background-position: 85% 6%;
  background-repeat: no-repeat;
  background-size: 13%;
  font-size: 3.75vw;
  font-weight: bold;
  line-height: 1.25em;
}

.lfb_ht_header span {
  color: #78E9EC;
}

.lfb_ht_subheader {
  font-size: 1.7vw;
  line-height: 1.2em;
  padding-top: 30px;
}

.lfb_i {
  bottom: 0;
  height: auto;
  position: relative;
  width: 87%;
}

.lfb_img {
  display: inline-block;
  padding-top: 7vw;
  width: 50%;
}

.lfb_img_l {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/orange_dot.svg);
  background-position-x: left;
  background-repeat: no-repeat;
  background-size: 29%;
  padding-left: 5%;
}

.lfb_img_r {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/blue_dot.svg);
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: 31%;
  float: right;
}

.lfb_logo, .footer_logo {
  background-image: url(https://imgs.avs4you.com/en/2019.04/images/logo_white.svg);
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  float: left;
  height: 3.2vw;
  margin-top: 1.7vw;
  width: 5.4vw;
}

.lfb_name {
  font-size: 1vw;
  font-weight: 600;
}

.lfb_ocs {
  color: #333333;
  display: inline-block;
  font-size: 2.8vw;
  font-weight: 600;
  line-height: 1.2em;
  padding-top: 5vw;
  text-transform: uppercase;
}

.lfb_perf_sln {
  background: #F7F3FE;
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/laptops_and_table.png);
  background-repeat: no-repeat;
  background-size: cover;
  color: #333333;
}

.lfb_profile {
  display: inline-block;
  line-height: 1.6vw;
  position: relative;
  top: -0.8vw;
}

.lfb_ps_h {
  font-size: 3.75vw;
  font-weight: 600;
  line-height: 1.2em;
  padding: 11vw 10vw 2vw 0;
}

.lfb_ps_sh {
  font-size: 1.9vw;
  font-weight: 500;
}

.lfb_psln {
  display: block;
  margin-left: 52vw;
  width: 46%;
}

.lfb_psln .lfb_txt_div {
  padding: 6vw 0 14vw;
}

.lfb_psln a.lfb_download_btn {
  background: #5846B0;
  color: #ffffff;
}

.lfb_reas_block {
  display: inline-block;
  vertical-align: top;
}

.lfb_reas_btn {
  padding-bottom: 12vw;
  padding-top: 2vw !important;
  text-align: center;
}

.lfb_reas_h {
  font-size: 1.5vw;
  font-weight: 600;
  line-height: 1.2em;
  padding: 1vw 0 0.6vw;
}

.lfb_reas_i {
  border-radius: 0.35vw;
  width: 100%;
}

.lfb_reason {
  width: 18.1vw;
}

.lfb_reason_center {
  margin: 0 1.25vw;
  width: 38.8vw;
}

.lfb_reason_center .lfb_reas_h {
  font-size: 1.9vw;
  padding: 1.4vw 0 1.1vw;
}

.lfb_reasons {
  margin: 0 auto;
  width: 80%;
}

.lfb_reas_t {
  font-size: 0.95vw;
  line-height: 1.35em;
  padding-bottom: 2vw;
}

.lfb_rev {
  font-size: 1.25vw;
  line-height: 1.5em;
  margin-top: 2vw;
}

.lfb_s_h {
  color: #333333;
  font-size: 3.2vw;
  font-weight: 600;
  line-height: 1.2em;
  margin: 0 auto -2.5vw;
  text-align: center;
  text-transform: uppercase;
  width: 58%;
}

.lfb_star {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/star.svg);
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  height: 1.7vw;
  margin-bottom: 0.05vw;
  margin-right: 0.95vw;
  width: 1.7vw;
}

.lfb_stars {
  display: inline-block;
  margin-left: 2vw;
}


.vel_stars_tools {
   .vel_narrow {
      padding: 50px 0;
  }
  .vel_stars_tools{
      background-color: none;
  }
  .vel_users {
      font-size: 20px;
      font-weight: 300;
  }
  background-color: #F5F5F5;
  text-align: center;
}
.vel_bottom_eula a {
  color: #3E3D62;
  text-decoration: underline;
}
.lfb_st_btn {
  background: #F0F0F0;
  border-radius: 3vw;
  color: #5240AC;
  cursor: pointer;
  font-size: 0.95vw;
  font-weight: 600;
  line-height: 1.2em;
  margin-top: 3vw;
  padding: 0.95vw 0;
  text-align: center;
  width: 9.75vw;
}

.lfb_st_btn:hover {
  background: #7465C3;
  color: #FFFFFF;
}

.lfb_st_btn:hover a {
  color: #FFFFFF;
}

.lfb_st_btn a {
  color: #5240AC;
}

.lfb_step {
  margin-bottom: 6vw;
  padding-top: 4vw;
}

.lfb_steps {
  margin: 2vw auto 0;
  padding-top: 4.5vw;
  width: 80%;
}

.lfb_s_text {
  display: inline-block;
  margin-bottom: 4vw;
  transition-duration: 1s;
  width: 40%;
}

.lfb_st_h {
  color: #5240AC;
  font-size: 2.8vw;
  line-height: 1.2em;
  padding-top: 7vw;
}

.lfb_st_sh {
  color: #333333;
  font-size: 1.15vw;
  font-weight: 600;
  line-height: 1.5em;
  padding-top: 38px;
}

.lfb_tab {
  background-color: #ffffff;
  border-radius: 0.5vw;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: block;
  font-size: 0.85vw;
  font-weight: 600;
  line-height: 1.3vw;
  margin-bottom: 2vw;
  padding: 1.2vw 0 1.2vw 3.75vw;
  position: relative;
  transition-duration: 200ms;
  width: 11.6vw;
}

.lfb_top_main {
  background: linear-gradient(189.23deg, #7F70CA 14.11%, #5240AC 83.99%);
  padding-top: 11vw;
  a{
      text-decoration: none;
  }
}

.lfb_tm_btn {
  color: #6752CE;
  font-size: 1.45vw;
  font-weight: 600;
  padding: 0.65em 1.8em;
}

.lfb_tm_btn:hover {
  background: #FFFFFF;
  color: #6752CE;
}

.lfb_txt_div {
  padding-top: 5vw;
}

.lfb_vb {
  font-size: 0.9vw;
}

.lfb_wcaqm {
  color: #ffffff;
  background: linear-gradient(195.42deg, #7F70CA 14.11%, #5240AC 83.99%);
  padding-top: 4.5vw;
}

.lfb_wcaqm_h {
  font-size: 3.35vw;
  font-weight: 600;
  line-height: 1.2em;
  margin: 0 auto 5.5vw;
  padding-top: 5.5vw;
  text-align: center;
}

.lfb_wc_i {
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: 26%;
  display: inline-block;
  font-size: 1.45vw;
  padding: 7vw 2vw 0;
}

.lfb_wci_cam {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/any_type_icon.svg);
}

.lfb_wc_icons {
  margin: 0 auto;
  width: 78%;
}

.lfb_wci_mp4 {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/format_icon.svg);
}

.lfb_wci_screen {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/simle_icon.svg);
  background-position-y: -20%;
  background-size: 30%;
}

.lfb_wci_set {
  background-image: url(https://imgs.avs4you.com/en/landing-for-bloggers/images/smart_icon.svg);
  background-position-y: 8%;
  background-size: 44%;
}

.lfb_wc_h {
  font-size: 2.8vw;
  font-weight: bold;
  margin: 0 auto;
  padding: 7vw 0 6vw;
  width: 33%;
}

.lfb_why_choose {
  background: linear-gradient(76.37deg, #AA40AC 2.85%, #5442AD 105.87%);
  color: #ffffff;
  padding-bottom: 7vw;
  text-align: center;
}

.lfb_step_2, .lfb_step_4 {
  margin-left: -5.4%;
}

.lfb_step_2 .lfb_s_text, .lfb_step_4 .lfb_s_text {
  float: right;
}

.slick-reviews .item {
  border-radius: 0.3vw;
  color: #333333;
  display: inline-block;
  margin-right: 2%;
  margin-top: 2vw;
  padding: 4.2vw 2.1vw 3vw;
  vertical-align: top;
  width: 25% !important;
}

.slick-reviews .item:first-child {
  margin-left: 2.5vw;
}

.slick-reviews .item:hover {
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1);
}

.slick-reviews .item:last-child {
  margin-bottom: 3vw;
  margin-right: 0;
  width: 26% !important;
}



#slick_steps li.slick-active .lfb_es_icon{
  background-position-y: -3.35vw;
  transition-delay: 100ms;
}

#slick_steps li.slick-active .lfb_tab {
  background-color: #796bc0;
  color: #ffffff;
  width: 13.4vw;
}

#slick_steps li.slick-active .lfb_btn_capture, #slick_steps li.slick-active .lfb_btn_cut, #slick_steps li.slick-active .lfb_btn_remove, #slick_steps li.slick-active .lfb_btn_apply {
  left: -10%;
}

#slick_steps ul {
  height: 20vw;
  list-style: none;
  position: absolute;
  top: 5vw;
  width: 48vw;
}

#slick_steps .slick-list {
  position: relative;
  z-index: 1;
}

.testimonials {
  margin-left: 10%;
  width: 80%;
}

.topmainmenu {
  display: inline-block;
  font-size: 0.95vw;
  font-weight: normal;
  margin-top: 2.45vw;
  text-transform: none;
  width: 78%;
}

.topmainmenu li {
  display: inline-block;
  margin-left: 6%;
  padding: 0.5vw;
}

.topmainmenu li a:hover, .topmainmenu li a.selected {
  border-bottom: none;
}

.topmenuoption {
  cursor: pointer;
}

.vel_footer {
  background-color: #32393E;
  color: #ffffff;
  height: 4vw;
  padding: 3.25vw 0 2.5vw;
  width: 100%;
}

.vel_page_footer {
  width: 80%;
  margin: 0 auto;
}

.vph_copyright {
  font-size: 0.78vw;
  padding-top: 1.8vw;
  text-align: left;
}

.vph_logo {
  height: 3vw;
  float: left;
  width: 5vw;
}

.vph_logo a {
  background-image: url(https://imgs.avs4you.com/en/2019.04/images/logo_white.svg);
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: 3vw;
  width: 4.5vw;
}

.vph_menu_footer {
  float: left;
  margin-left: 8%;
  padding-top: 0.85vw;
  text-align: left;
}

.vph_menu_footer ul {
  padding: 0;
  margin: 0;
}

.vph_menu_footer a {
  color: #ffffff;
  text-decoration: none;
}

.vph_menu_footer ul li {
  display: inline-block;
  font-size: 1vw;
  text-transform: uppercase;
  line-height: 1.2em;
}

.vph_menu_footer ul li:after {
  content: '|';
  padding: 0 5px 0 10px;
  display: inline-block;
}

.vph_menu_footer ul li:last-of-type:after {
  display: none;
}

.lfn-social {
  display: inline-block;
  float: right;
  text-align: center;
  width: 20%;
}

.lfns-button {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
  display: inline-block;
  height: 3vw;
  margin: 0;
  width: 3vw;
}

.lfnsb-fb {
  background-image: url(https://imgs.avs4you.com/en/2019.04/images/facebook.svg);
}

.lfnsb-pi {
  background-image: url(https://imgs.avs4you.com/en/2019.04/images/pinterest.svg);
}

.lfnsb-tw {
  background-image: url(https://imgs.avs4you.com/en/2019.04/images/twitter.svg);
}

.lfnsb-yt {
  background-image: url(https://imgs.avs4you.com/en/2019.04/images/youtube.svg);
}
@media screen and (max-width: 1580px){
  .slick-active{
      width: 70px;
      .lfb_btn_capture  {
          left: -635px;
          top: -435px;
          width: 250px;
          background-color: #796bc0;;
          color: white;
      }
      .lfb_btn_cut {
          left: -655px;
          top: -315px;
          width: 250px;
          background-color: #796bc0;;
          color: white;
      }
       .lfb_btn_remove {
          left: -695px;
          top: -80px;
          width: 250px;
          background-color: #796bc0;;
          color: white;
      }
       .lfb_btn_apply {
          left: -675px;
          top: -195px;
          width: 250px;
          background-color: #796bc0;;
          color: white;
      }
      
      .lfb_btn_use {
          right: -410px;
          top: -435px;
          width: 250px;
          background-color: #796bc0;;
          color: white;
      }
      .lfb_btn_addtracks {
          right: -390px;
          top: -315px;
          width: 250px;
          background-color: #796bc0;;
          color: white;
      }
      .lfb_btn_insert {
          right: -370px;
          top: -195px;
          width: 250px;
          background-color: #796bc0;;
          color: white;
      }
       .lfb_btn_save {
          right: -350px;
          top: -80px;
          width: 250px;
          background-color: #796bc0;;
          color: white;
      }
  }
  .lfb_btn_capture  {
      left: -610px;
      top: -435px;
  }
   .lfb_btn_cut {
      left: -630px;
      top: -315px;
  }
   .lfb_btn_remove {
      left: -670px;
      top: -80px;
  }
   .lfb_btn_apply {
      left: -650px;
      top: -195px;
  }
  
  .lfb_btn_use {
      right: -410px;
      top: -435px;
  }
  .lfb_btn_addtracks {
      right: -390px;
      top: -315px;
  }
  .lfb_btn_insert {
      right: -370px;
      top: -195px;
  }
   .lfb_btn_save {
      right: -350px;
      top: -80px;
  }
}

@media screen and (max-width: 1395px){
  .slick-active{
      .lfb_btn_capture  {
          left: -535px;
          top: -435px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
      .lfb_btn_cut {
          left: -555px;
          top: -315px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
       .lfb_btn_remove {
          left: -595px;
          top: -80px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
       .lfb_btn_apply {
          left: -575px;
          top: -195px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
      
      .lfb_btn_use {
          right: -410px;
          top: -435px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
      .lfb_btn_addtracks {
          right: -390px;
          top: -315px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
      .lfb_btn_insert {
          right: -370px;
          top: -195px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
       .lfb_btn_save {
          right: -350px;
          top: -80px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
  }
  .lfb_btn_capture  {
      left: -510px;
      top: -435px;
  }
   .lfb_btn_cut {
      left: -530px;
      top: -315px;
  }
   .lfb_btn_remove {
      left: -570px;
      top: -80px;
  }
   .lfb_btn_apply {
      left: -550px;
      top: -195px;
  }
  
  .lfb_btn_use {
      right: -410px;
      top: -435px;
  }
  .lfb_btn_addtracks {
      right: -390px;
      top: -315px;
  }
  .lfb_btn_insert {
      right: -370px;
      top: -195px;
  }
   .lfb_btn_save {
      right: -350px;
      top: -80px;
  }
}

@media screen and (max-width: 1280px) {
  .slick-active{
      .lfb_btn_capture  {
          left: -455px;
          top: -435px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
      .lfb_btn_cut {
          left: -475px;
          top: -315px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
       .lfb_btn_remove {
          left: -515px;
          top: -80px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
       .lfb_btn_apply {
          left: -495px;
          top: -195px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
      
      .lfb_btn_use {
          right: -310px;
          top: -435px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
      .lfb_btn_addtracks {
          right: -290px;
          top: -315px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
      .lfb_btn_insert {
          right: -270px;
          top: -195px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
       .lfb_btn_save {
          right: -250px;
          top: -80px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
  }
  .lfb_btn_capture  {
      left: -430px;
      top: -435px;
  }
   .lfb_btn_cut {
      left: -450px;
      top: -315px;
  }
   .lfb_btn_remove {
      left: -490px;
      top: -80px;
  }
   .lfb_btn_apply {
      left: -470px;
      top: -195px;
  }
  
  .lfb_btn_use {
      right: -310px;
      top: -435px;
  }
  .lfb_btn_addtracks {
      right: -290px;
      top: -315px;
  }
  .lfb_btn_insert {
      right: -270px;
      top: -195px;
  }
   .lfb_btn_save {
      right: -250px;
      top: -80px;
  }
  .lfb_av {
      height: 4.25vw;
      width: 4.25vw;
  }
  .lfb_name {
      font-size: 1.15vw;
  }
  .lfb_ocs {
      font-size: 2.95vw;
  }
  .lfb_profile {
      top: -1.0vw;
  }
  .lfb_st_btn {
      width: 12vw;
  }
  .lfb_st_btn, .topmainmenu {
      font-size: 1.15vw;
  }
  .lfb_s_text {
      margin-bottom: 0;
  }
  .lfb_st_h {
      font-size: 2.95vw;
  }
  .lfb_st_sh {
      font-size: 1.3vw;
  }
  .lfb_vb {
      font-size: 1.05vw;
  }
  .lfns-button {
      height: 3.5vw;
      width: 3.5vw;
  }
  .lfn-social {
      width: 25%;
  }
  .vel_footer {
      height: 5vw;
  }
  .vph_copyright {
      font-size: 0.9vw;
      padding-top: 2vw;
  }
  .vph_logo {
      height: 4vw;
      width: 6vw;
  }
  .vph_logo a {
      height: 3.5vw;
      width: 5.5vw;
  }
  .vph_menu_footer {
      padding-top: 1vw;
  }
  .vph_menu_footer ul li {
      font-size: 1.15vw;
  }
}

@media screen and (max-width: 1024px) {
  .lfb_av {
      height: 4.9vw;
      margin-right: 4%;
      width: 4.9vw;
  }
  .lfn-social {
      width: 30%;
  }
  .lfb_easy_steps {
      font-size: 4.2vw;
      margin: 4vw auto 5vw;
      width: 70%;
  }
  .lfb_easy_steps::before {
      height: 3px;
      top: -4vw;
  }
  .lfb_es_label {
      font-size: 1.4vw;
      line-height: 2vw;
      padding: 1.8vw 8%;
      width: 84%;
  }
  .lfb_logo {
      height: 4vw;
      width: 6.7vw;
  }
  .lfb_name {
      font-size: 1.3vw;
  }
  .lfb_profile {
      line-height: 1.8vw;
      top: -1.2vw;
  }
  .lfb_reas_h {
      font-size: 1.7vw;
  }
  .lfb_reason_center .lfb_reas_h {
      font-size: 2.1vw;
  }
  .lfb_reas_t {
      font-size: 1.2vw;
  }
  .lfb_rev {
      font-size: 1.4vw;
  }
  .lfb_st_h {
      font-size: 3.25vw;
  }
  .lfb_st_sh {
      font-size: 1.4vw;
  }
  .lfb_tab {
      font-size: 1.2vw;
      width: 15vw;
  }
  .lfb_vb {
      font-size: 1.15vw;
  }
  .lfb_st_btn, .topmainmenu {
      font-size: 1.3vw;
  }
  .lfb_wcaqm_h {
      font-size: 4vw;
  }
  .lfns-button {
      height: 3.6vw;
      width: 3.6vw;
  }
  .slick-reviews .item:hover {
      box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  }
  #slick_steps .item {
      margin-bottom: 8vw;
  }
  #slick_steps li.slick-active .lfb_btn_capture, #slick_steps li.slick-active .lfb_btn_cut, #slick_steps li.slick-active .lfb_btn_remove, #slick_steps li.slick-active .lfb_btn_apply {
      left: -52%;
  }
  #slick_steps li.slick-active .lfb_tab {
      width: 17vw;
  }
  .topmainmenu {
      width: 85%;
  }
  .vel_footer {
      height: 5.5vw;
  }
  .vph_copyright {
      font-size: 1.05vw;
  }
  .vph_menu_footer ul li {
      font-size: 1.3vw;
  }
}

@media screen and (max-width: 900px){
  .slick-active{
      .lfb_btn_capture  {
          left: -335px;
          top: -250px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
      .lfb_btn_cut {
          left: -355px;
          top: -190px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
       .lfb_btn_remove {
          left: -395px;
          top: -70px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
       .lfb_btn_apply {
          left: -375px;
          top: -130px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
      
      .lfb_btn_use {
          right: -210px;
          top: -250px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
      .lfb_btn_addtracks {
          right: -190px;
          top: -190px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
      .lfb_btn_insert {
          right: -170px;
          top: -130px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
       .lfb_btn_save {
          right: -150px;
          top: -70px;
          width: 180px;
          background-color: #796bc0;;
          color: white;
      }
  }
  .lfb_btn_capture  {
      left: -310px;
      top: -250px;
  }
   .lfb_btn_cut {
      left: -330px;
      top: -190px;
  }
   .lfb_btn_remove {
      left: -370px;
      top: -70px;
  }
   .lfb_btn_apply {
      left: -350px;
      top: -130px;
  }
  
  .lfb_btn_use {
      right: -210px;
      top: -250px;
  }
  .lfb_btn_addtracks {
      right: -190px;
      top: -190px;
  }
  .lfb_btn_insert {
      right: -170px;
      top: -130px;
  }
   .lfb_btn_save {
      right: -150px;
      top: -70px;
  }
}

`;

  function customPaging(i) {
    return (
        <ul className="slick-dots" id="slick-steps">
            {i === 0 ? 
             <li aria-hidden="false" ><div className="lfb_tab lfb_btn_capture"><div className="lfb_es_icon"></div>Capture video</div></li>
            : i === 1 ? <li aria-hidden="true" ><div className="lfb_tab lfb_btn_cut" ><div className="lfb_es_icon"></div>Cut, trim and join</div></li>
            : i === 2 ? <li aria-hidden="true" ><div className="lfb_tab lfb_btn_apply" ><div className="lfb_es_icon"></div>Apply effects</div></li>
            : i === 3 ? <li aria-hidden="true" ><div className="lfb_tab lfb_btn_remove" ><div className="lfb_es_icon"></div>Remove defects</div></li>
            : i === 4 ? <li aria-hidden="true" ><div className="lfb_tab lfb_btn_use" ><div className="lfb_es_icon"></div>Change background</div></li>
            : i === 5 ? <li aria-hidden="true" ><div className="lfb_tab lfb_btn_addtracks" ><div className="lfb_es_icon"></div>Add your audio tracks</div></li>
            : i === 6 ? <li aria-hidden="true" ><div className="lfb_tab lfb_btn_insert" ><div className="lfb_es_icon"></div>Add text</div></li>
            : i === 7 ? <li aria-hidden="true" ><div className="lfb_tab lfb_btn_save" ><div className="lfb_es_icon"></div>Upload to YouTube</div></li> 
            : ''}
        </ul>
    );
  }
class avsYoutubeVideoEditor extends React.PureComponent {

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
    const settings = {
        fade:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinity:false,
        dots: true,
        dotsClass: "slick-dots",
        customPaging: customPaging,
      };
      const youtubeSlidesImage = [{
        nameSlide:"capture_video.webp",  
      },{
        nameSlide:"cut_trim_join.webp",  
      },{
        nameSlide:"apply_effects.webp",  
      },{
        nameSlide:"remove_defects.webp",  
      },{
        nameSlide:"change_background.webp",  
      },{
        nameSlide:"add_you_audio_tracks.webp",  
      },{
        nameSlide:"add_text.webp",  
      },,{
        nameSlide:"upload_to_youtube.webp",  
      },
    ]
      const youtubeSlides = () =>  
      youtubeSlidesImage.map(num => (
          <div className="youtubeSlides">
            <ImageGQL imageName={num.nameSlide} className={num.nameSlide}/>
          </div>    
        ));  
    return (
      
      <Layout 
      headerIsDisabled={true}
      footerIsDisabled={true}
      className="youtube-video-editor" 
      pageContext={this.props.pageContext} 
      t={this.props.t}
      metaDescription=""
      metaKeywords=""
    > 
          <header className="Youtubeheader">
    <div className="lfb_header">
        <a className="lfb_logo" href="https://www.avs4you.com/index.aspx" target="_blank"></a><ul className="topmainmenu max-width-1">
            <li className="topmenuoption"><a href="https://www.avs4you.com/index.aspx" target="_blank">Main</a></li>
            <ScrollLink to="to_easy_steps" spy={true} smooth={true}>
            <li className="topmenuoption to_easy_steps">Steps</li>
            </ScrollLink>
            <ScrollLink to="to_wcaqm" spy={true} smooth={true}>
            <li className="topmenuoption to_wcaqm">Advantages</li>
            </ScrollLink>
            <ScrollLink to="to_testimonials" spy={true} smooth={true}>
            <li className="topmenuoption to_testimonials">Testimonials</li>
            </ScrollLink>
            <li className="topmenuoption with_link"><a className="lfb_download_btn" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></li>
            <li className="aclose">×</li>
        </ul>
    </div>
</header>

                        
<div className="lfb_top_main">
  <div className="lfb_head_text">
    <div className="lfb_ht_header">
      Your YouTube career starts with <span>AVS Video Editor</span>
    </div>
    <div className="lfb_ht_subheader">
      Easily create professional-looking clips or vlogs
    </div>
    <div className="lfb_txt_div"><a className="lfb_download_btn lfb_tm_btn" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></div>
  </div>
  <div className="lfb_head_img"><ImageGQL imageName="main_picture-youtube.png" alt="Professional-looking clips or vlogs" /></div>
</div>
    <div id="mainbody">
    <StyleSlick>
    <div className="lfb_steps" id="to_easy_steps">
        <div className="lfb_easy_steps">Easy steps for creating your captivating video</div>
            <div className="lfb_easy_steps_car">
            <Slider
                className="youtubePersonSlider"
                {...settings}>
                {youtubeSlides()}
                </Slider>         
        </div>
    </div>  
    </StyleSlick>

<div className="lfb_wcaqm" id="to_wcaqm">
    <div className="lfb_wcaqm_h">Why choose AVS4YOU</div>
    <div className="lfb_reasons">
        <div className="lfb_reas_block">
        <div className="lfb_reason">
            <ImageGQL className="lfb_reas_i" imageName="any.png" />
            <div className="lfb_reas_h">Any type of content</div>
            <div className="lfb_reas_t">Generate content for any blogging format, from tutorials and training videos to slideshows and reviews</div>
        </div>
        <div className="lfb_reason">
            <ImageGQL className="lfb_reas_i" imageName="smart.png" />
            <div className="lfb_reas_h">Smart presets</div>
            <div className="lfb_reas_t">Use specially designed templates depending on the desired quality of the output video when saving your project</div>
        </div>
        </div>
        <div className="lfb_reas_block">
        <div className="lfb_reason lfb_reason_center">
            <ImageGQL className="lfb_reas_i" imageName="simple.png" />
            <div className="lfb_reas_h">Simple, but feature-rich</div>
            <div className="lfb_reas_t">AVS Video Editor is easy to learn, regardless of skill level. It is simple but has all necessary tools to make high-quality video</div>
        </div>
        </div>
        <div className="lfb_reas_block">
        <div className="lfb_reason">
            <ImageGQL className="lfb_reas_i" imageName="popular.png" />
            <div className="lfb_reas_h">Popular video formats</div>
            <div className="lfb_reas_t">Work with all key video formats such as MP4, MOV, AVI, WMV, FLV, AVCHD, MPEG and common video codecs H.264, MPEG-4,DivX,MPEG-2, HEVC (H.265)</div>
        </div>
        <div className="lfb_reason">
            <ImageGQL className="lfb_reas_i" imageName="high.png" />
            <div className="lfb_reas_h">High-definition video</div>
            <div className="lfb_reas_t">Create video with different frame sizes: HD, Full HD, 2K Quad HD, 4K Ultra HD and DCI 4K</div>
        </div>
        </div>
        <div className="lfb_txt_div lfb_reas_btn"><a className="lfb_download_btn lfb_tm_btn" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></div>
    </div>
</div>

                    </div>
                    <div id="testimonials">
                        
    

<div className="testimonials" id="to_testimonials">
    <div className="lfb_ocs">Our customers say</div>
    <div className="lfb_stars">
        <div className="lfb_star"></div>
        <div className="lfb_star"></div>
        <div className="lfb_star"></div>
        <div className="lfb_star"></div>
        <div className="lfb_star"></div>
    </div>
    <div className="lfb_carousel">
        <div className="slick-reviews slick-initialized slick-slider">
            <div aria-live="polite" className="slick-list draggable" tabindex="0"><div className="slick-track"><div className="item slick-slide slick-active" data-slick-index="0" aria-hidden="false">
                <div className="lfb_av lfb_av_as"></div>
                <div className="lfb_profile">
                    <div className="lfb_name">Andy Stephens</div>
                    <div className="lfb_vb">Video blogger</div>
                </div>
                <div className="lfb_rev">I love the editor and all your apps which have helped me create nearly 2000 YouTube vids!</div>
            </div><div className="item slick-slide slick-active" data-slick-index="1" aria-hidden="false">
                <div className="lfb_av lfb_av_wh"></div>
                <div className="lfb_profile">
                    <div className="lfb_name">William Holmes</div>
                    <div className="lfb_vb">Video blogger</div>
                </div>
                <div className="lfb_rev">I've been using AVS Video Editor for more than 10 years and it is an excellent product, in my opinion.</div>
            </div><div className="item slick-slide slick-active" data-slick-index="2" aria-hidden="false">
                <div className="lfb_av lfb_av_os"></div>
                <div className="lfb_profile">
                    <div className="lfb_name">Olivia Seltzer</div>
                    <div className="lfb_vb">Video blogger</div>
                </div>
                <div className="lfb_rev">In spite of being a person who did not have a formal computer training, I was able to edit 40 hours of video into 4 hours. I have been constantly using AVS Video Editor for the past two and half years. I am thrilled with the results</div>
            </div></div></div>
            
            
        </div>
    </div>
</div>
    

<div className="lfb_perf_sln">
    <div className="lfb_psln">
        <div className="lfb_ps_h">Perfect solution for video bloggers</div>
        <div className="lfb_ps_sh">Create your first video right now!</div>
        <div className="lfb_txt_div"><a className="lfb_download_btn lfb_tm_btn" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></div>
    </div>
</div>

                    </div>
                    <div className="hFooter"></div>
         
                <div id="footer">
                    
<div className="vel_footer">
    <div className="vel_page_footer">
        <div className="vph_logo"><a href="https://www.avs4you.com/index.aspx" target="_blank"></a></div>
        <div className="vph_menu_footer">
            <ul>
                <li><a href="https://www.avs4you.com/downloads.aspx" target="_blank">Downloads</a></li>
                <li><a href="https://www.avs4you.com/register.aspx" target="_blank">Buy now</a></li>
                <li><a href="https://www.avs4you.com/Guides/index.aspx" target="_blank">Help</a></li>
                <li><a href="https://support.avs4you.com/login.aspx" target="_blank">Support</a></li>
                <li><a href="https://www.avs4you.com/contact.aspx" target="_blank">Contact us</a></li>
            </ul>
            <div className="vph_copyright">© <a className="blacklink" href="https://www.avs4you.com/index.aspx" target="_blank">Online Media Technologies&nbsp;Ltd.,&nbsp;UK</a> 2020 &nbsp; All rights reserved.</div>
        </div>
        <div className="lfn-social">
            <a className="lfns-button lfnsb-yt" target="_blank" title="Follow us on YouTube" href="https://www.youtube.com/user/avs4you"></a>
            <a className="lfns-button lfnsb-fb" target="_blank" title="Follow us on Facebook" href="https://www.facebook.com/avs4you"></a>
            <a className="lfns-button lfnsb-tw" target="_blank" title="Follow us on Twitter" href="https://www.twitter.com/avs4you"></a>
            <a className="lfns-button lfnsb-pi" target="_blank" title="Follow us on Pinterest" href="https://pinterest.com/avs4you/"></a>
        </div>
    </div>
</div>
                </div>
        </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(avsYoutubeVideoEditor);