import React from "react";
import styled from "styled-components";
import img from "../assets/language.svg";

const Language = () => {
  return (
    <Container>
      <div>
        <img className="icon" src={img} alt="" />
      </div>
      <h2>Languages</h2>
      <p className="secondary_text">
        Proficient in multiple languages, facilitating effective communication
        and collaboration in diverse settings.
      </p>
      <hr />
      <div className="details">
        <div className="title">
          <h3>🇬🇧 English</h3>
          <p className="secondary_text text">Native or bilingual proficiency</p>
        </div>
        <hr />
        <div className="title">
          <h3>🇫🇷 French</h3>
          <p className="secondary_text text">
            Professional working proficiency
          </p>
        </div>
        <hr />
        <div className="title">
          <h3>🇪🇸 Spanish</h3>
          <p className="secondary_text text">Elementary proficiency</p>
        </div>
      </div>
    </Container>
  );
};

export default Language;

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
    margin-left: 20px;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    .title {
      margin-top: 0;
      margin-left: 0;
      h3 {
        font-size: 1rem;
        font-weight: 500;
      }
      .text {
        margin-top: -8px;
        margin-left: 0;
        font-size: 14px;
      }
    }
  }
  @media only screen and (max-width: 950px) {
    width: 70%;
    margin-top: 5px;
  }
  @media only screen and (max-width: 770px) {
    width: 85%;
    margin-left: 100px;
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
      .title {
        h3 {
          font-size: 22px;
        }
        .text {
          font-size: 18px;
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
      font-size: 1.5rem;
      font-weight: 500;
    }
    .details {
      .title {
        margin-bottom: 0;
        margin-top: 10px;
        margin-left: -20px;
        padding: 15px;
        h3 {
          margin-top: -10px;
          margin-left: 30px;
          font-size: 2rem;
          font-weight: 400;
        }
        .text {
          margin-left: 30px;
          font-size: 1.5rem;
          font-weight: 500;
        }
      }
    }
  }
`;
