import React from "react";
import Imgfacebook from "../../assets/icons/Facebook-icn.svg";
import Imginstagram from "../../assets/icons/Instagram-icn.svg";
import Imgtwitter from "../../assets/icons/Twitter-icn.svg";
import Imgtiktok from "../../assets/icons/Tiktok-icn.svg";
import Imgyoutube from "../../assets/icons/youtube-icn.svg";
import Imgtelegram from "../../assets/icons/telegram-icn.svg";
import ImgWhatapp from "../../assets/icons/Whatsapp-icn.svg";
import "./FooterFeedback.css";

const FooterFeedback = () => {
  return (
    <>
      <footer className="py-5 text-center">
        <div className="row">
          <div className="col-12">
            <p className="fs-1 fw-bolder">Our other social media</p>
          </div>
          <div className="col-12 socialmedia-icn">
            {/* <a href="/" > */}
            <img src={Imgfacebook} alt="" />
            {/* </a> */}
            {/* <a href="/" > */}
            <img src={Imginstagram} alt="" />
            {/* </a> */}
            {/* <a href="/" > */}
            <img src={Imgtwitter} alt="" />
            {/* </a> */}
            {/* <a href="/" > */}
            <img src={Imgtiktok} alt="" />
            {/* </a> */}
            {/* <a href="/" > */}
            <img src={Imgyoutube} alt="" />
            {/* </a> */}
            {/* <a href="/" > */}
            <img src={Imgtelegram} alt="" />
            {/* </a> */}
            {/* <a href="/" > */}
            <img src={ImgWhatapp} alt="" />
            {/* </a> */}
            {/* <p className="fw-medium w-25 m-0 m-auto">
              All rights reserved by GoFit Designed & Developed by AdminGoFit.
            </p> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFeedback;
