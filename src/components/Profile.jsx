import React from "react";
import styled from "styled-components";
import image from "../assets/image.avif";
import { GrLocation } from "react-icons/gr";
import profile from "../assets/profile.svg";

const Profile = () => {
  return (
    <Profile_container>
      <div className="img_div">
        <img src={image} alt="image" />
      </div>
      <div className="text_div">
        <div className="profile_image">
          <img className="icon" src={profile} alt="" />
        </div>
        <h2>Professional Profile</h2>
        <p className="secondary_text">
          Accomplished Senior Data Scientist & Business Consultant with a proven
          track record of leveraging advanced analytics to drive strategic
          decision-making and optimize business processes. Demonstrated
          expertise in developing innovative solutions to complex problems,
          coupled with exceptional communication skills to effectively convey
          insights to stakeholders at all levels.
        </p>
        <div className="secondary_text location">
          <GrLocation />
          <p>Based on Phoenix,Arizona,USA</p>
        </div>
      </div>
    </Profile_container>
  );
};

export default Profile;

const Profile_container = styled.div`
  width: 52%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  gap: 10px;
  .img_div {
    width: 1600px;
    overflow: hidden;
    border-radius: 20px;
    border: 1px solid rgb(237, 237, 238);
    img {
      margin-left: -125px;
      margin-bottom: -10px;
      align-items: center;
      z-index: -1;
    }
  }
  .text_div {
    height: 365px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid rgb(237, 237, 238);
    .profile_image {
      margin: 25px;
    }
    h2 {
      margin-top: 30px;
      margin-left: 20px;
      font-weight: 400;
      font-size: 1.3rem;
    }
    p {
      margin-left: 20px;
      font-size: 0.9rem;
      font-weight: 500;
    }
    .location {
      display: flex;
      margin-left: 20px;
      font-size: 0.8rem;
      align-items: center;
      p {
        font-size: 13px;
        margin-left: 5px;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .text_div {
      width: 650px;
      height: 370px;
      .profile_image {
        margin: 15px;
        img {
          border-radius: 10px;
        }
      }
      h2 {
        margin-top: 0;
      }
      p{
        font-size: 0.8rem;
      }
      .location {
        width: 90%;
        margin-left: 18px;
        font-size: 1.3rem;
        p {
          width: 200px;
          font-size: 14px;
          margin-left: 5px;
        }
      }
    }
  }

  @media only screen and (max-width: 950px) {
    width: 70%;
    flex-direction: column;
    .img_div {
      width: 650px;
      height: 450px;
      img {
        width: 100%;
        height: 100%;
        margin-left: 0;
        margin-bottom: -10px;
        align-items: center;
        z-index: -1;
      }
    }
  }
  @media only screen and (max-width: 770px) {
    width: 85%;
    margin-left: 102px;
    flex-direction: column;
    .img_div {
      width: 640px;
      height: 450px;
    }
  }

  @media only screen and (max-width: 550px) {
    width: 140%;
    margin-left: 10px;
    .text_div {
      width: 85%;
      padding-bottom: 70px;
      .profile_image {
        margin: 25px;
        .icon {
          border-radius: 20px;
          width: 10%;
          height: 10%;
        }
      }
      h2 {
        margin-left: 30px;
        margin-top: 10px;
        font-size: 2.3rem;
        font-weight: 400;
      }
      .secondary_text {
        margin-left: 30px;
        font-size: 1.2rem;
        font-weight: 500;
      }
      .location {
        margin-top: -10px;
        p {
          font-size: 1.2rem;
          font-weight: 500;
        }
      }
    }
  }
  @media only screen and (max-width: 375px) {
    width: 195%;
    margin-left: 10px;

    .img_div {
      width: 650px;
      height: 800px;
      img {
        margin-left: -170px;
        width: 150%;
        height: 100%;
      }
    }
    .text_div {
      width: 650px;
      height: 450px;
      .profile_image {
        margin: 40px;
        img {
          border-radius: 20px;
          width: 12%;
          height: 12%;
        }
      }
      h2 {
        margin-left: 40px;
        margin-top: 70px;
        font-size: 2.7rem;
        font-weight: 500;
      }
      p {
        margin-left: 40px;
        margin-right: 10px;
        font-size: 1.8rem;
        font-weight: 500;
      }
      .location {
        margin-left: 40px;
        font-size: 1.8rem;
        p {
          font-size: 23px;
          margin-left: 5px;
        }
      }
    }
  }
`;
