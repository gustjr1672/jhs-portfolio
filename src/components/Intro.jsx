import React from "react";
import "../styles/intro.css";
import profileImg from "../assets/tiger.webp"; // 프로필 이미지

const Intro = () => {
  return (
    <section id="intro" className="intro">
      <img src={profileImg} alt="Profile" className="profile-img" />
      <div className="intro-text">
        <h1>안녕하세요, 저는 [이름]입니다.</h1>
        <button className="contact-btn">연락하기</button>
      </div>
    </section>
  );
};

export default Intro;
