import React from "react";
import styled from "styled-components";
import img from "../assets/education.svg";
import { FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <Container>
      <div>
        <img className="icon" src={img} alt="" />
      </div>
      <h2>Education</h2>
      <p className="secondary_text">
        Degrees and certifications in the specialized fields of data science and
        business analytics.
      </p>
      <hr />
      <div className="details">
        <div className="title">
          <h3>Princeton University</h3>
          <p className="secondary_text text">Master’s degree - Data Science</p>
        </div>
        <div className="secondary_text date">
          <FaCalendarAlt className="react_icon" size={11} />
          Sep 2015 - Dec 2016
        </div>
      </div>
      <hr />
      <div className="details">
        <div className="title">
          <h3>Montclair State University</h3>
          <p className="secondary_text text">
            Bachelor’s degree - Artificial Intelligence
          </p>
        </div>
        <div className="secondary_text date">
          <FaCalendarAlt className="react_icon" size={11} />
          Sep 2011 - Jun 2015
        </div>
      </div>
    </Container>
  );
};

export default Education;

const Container = styled.div`
  width: 52%;
  margin: auto;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  border: 1px solid rgb(237, 237, 238);
  div {
    margin: 20px;
  }
  h2 {
    margin-top: 0px;
    margin-left: 20px;
    font-weight: 400;
    font-size: 1.3rem;
  }
  p {
    width: 400px;
    font-size: 0.9rem;
    margin-top: 0px;
    margin-left: 20px;
  }
  hr {
    margin: 0;
    opacity: 0.4;
  }
  .details {
    margin-left: 0;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
      margin-top: 0;
      margin-left: 0;
      h3 {
        font-size: 1rem;
        font-weight: 500;
      }
      .text {
        margin-top: -9px;
        margin-left: 0;
        font-size: 13px;
      }
    }
    .date {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 140px;
      height: 15px;
      padding: 6px 10px;
      margin-top: -2px;
      border: 1px solid rgb(237, 237, 238);
      border-radius: 10px;
      gap: 5px;
    }
  }
  @media only screen and (max-width: 950px) {
    width: 70%;
    margin-top: 5px;
    .details {
      .title {
        margin-left: 15px;
      }
    }
  }
  @media only screen and (max-width: 770px) {
    width: 85%;
    margin-left: 100px;
    .details {
      .date {
        padding: 10px 0px;
      }
    }
  }
  @media only screen and (max-width: 550px) {
    width: 120%;
    margin-left: 60px;
    div {
      margin: 25px;
      .icon {
        border-radius: 20px;
        width: 10%;
        height: 10%;
      }
    }
    h2 {
      margin-left: 40px;
      margin-top: 10px;
      font-size: 2.3rem;
      font-weight: 400;
    }
    p {
      margin-left: 40px;
      font-size: 1.3rem;
      font-weight: 500;
    }
    .details {
      .date {
        width: 250px;
        height: 10px;
        margin: 0;
        gap: 10px;
        margin-bottom: 20px;
        padding: 20px 15px;
        font-size: 17px;
        .react_icon {
          width: 20px;
          height: 20px;
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
      margin-top: 20px;
      font-size: 2.7rem;
      font-weight: 400;
    }
    p {
      margin-left: 40px;
      font-size: 1.5rem;
      font-weight: 500;
    }
    .details {
      flex-direction: column;
      .title {
        gap: 10px;
        margin-left: -90px;
        h3 {
          margin-top: -20px;
          font-size: 2rem;
          font-weight: 400;
        }
        .text {
          font-size: 1.5rem;
          font-weight: 500;
        }
      }
      .date {
        width: 250px;
        height: 10px;
        margin: 0;
        margin-top: -30px;
        margin-bottom: 20px;
        margin-left: -230px;
        padding: 20px 15px;
        font-size: 23px;
        .react_icon {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
`;
