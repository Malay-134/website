import React from "react";
import styled from "styled-components";
import { CiMail } from "react-icons/ci";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img from "../assets/profile_img.avif";

const About = () => {
  return (
    <Container>
      <div className="image">
        <img src={img} alt="image" />
      </div>
      <h2>Feel Free To Reach Out</h2>
      <p className="secondary_text">Let's start a productive conversation</p>
      <div className="primary_btn btn">
        <CiMail className="react_icon" size={25} />
        Send Email
      </div>
      <div className="social_links">
        <a href="#">
          <IoLogoLinkedin className="react_icon" size={30} />
        </a>
        <a href="#">
          <FaFacebook className="react_icon" size={25} />
        </a>
        <a href="#">
          <FaTelegram className="react_icon" size={25} />
        </a>
        <a href="#">
          <FaXTwitter className="react_icon" size={25} />
        </a>
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 52%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  .image {
    img {
      display: block;
      border-radius: 10px;
      border: 1px solid rgb(186, 83, 107);
      margin-left: 5px;
      height: 80px;
      width: 80px;
    }
  }
  h2 {
    margin-top: 25px;
    font-size: 1.3rem;
    font-weight: 400;
  }
  p {
    margin-top: -5px;
    font-size: 1.1rem;
    font-weight: 500;
  }
  .btn {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 25px 50px;
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
  }
  .social_links {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    a {
      color: rgb(119, 119, 125);
    }
  }
  @media only screen and (max-width: 1024px) {
    h2 {
      display: flex;
      justify-content: center;
      width: 70%;
    }
    p {
      display: flex;
      justify-content: center;
      width: 70%;
    }
  }
  @media only screen and (max-width: 950px) {
    width: 70%;
    margin-top: 70px;
  }
  @media only screen and (max-width: 770px) {
    width: 85%;
    margin-left: 100px;
  }
  @media only screen and (max-width: 550px) {
    width: 120%;
    margin-left: 60px;
    .image {
      img {
        height: 100px;
        width: 100px;
      }
    }
    h2 {
      margin-left: 30px;
      margin-top: 10px;
      font-size: 2.3rem;
      font-weight: 400;
    }
    p {
      margin-top: -20px;
      margin-left: 30px;
      font-size: 1.3rem;
      font-weight: 500;
    }
    .btn {
      width: 85%;
      padding: 35px;
      justify-content: center;
      font-size: 1.6rem;
      font-weight: 500;
      .react_icon {
        height: 35px;
        width: 35px;
      }
    }
    .social_links {
      a {
        .react_icon {
          height: 35px;
          width: 35px;
        }
      }
    }
  }
  @media only screen and (max-width: 375px) {
    width: 180%;
    margin-left: 35px;
    div {
      margin: 35px;
      .icon {
        border-radius: 20px;
        width: 12%;
        height: 12%;
      }
    }
    h2 {
      margin-left: 40px;
      margin-top: 10px;
      font-size: 2.7rem;
      font-weight: 400;
    }
    p {
      margin-left: 40px;
      font-size: 2rem;
      font-weight: 500;
    }
    .btn {
      width: 80%;
      padding: 45px;
      font-size: 1.8rem;
      .react_icon {
        height: 40px;
        width: 40px;
      }
    }
    .social_links {
      gap: 50px;
      a {
        .react_icon {
          height: 50px;
          width: 50px;
        }
      }
    }
  }
`;
