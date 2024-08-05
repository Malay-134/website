import React from "react";
import { CiMail } from "react-icons/ci";
import { TfiDownload } from "react-icons/tfi";
import styled from "styled-components";

const TextContent = () => {
  return (
    <Content>
      <div className="secondary_text box">Available for work</div>
      <h1>Thomas Scott</h1>
      <p className="secondary_text">
        Senior Data Scientist & Business Consultant
      </p>
      <div className="buttons">
        <div className="primary_btn btn">
          <CiMail size={20} />
          Send Email
        </div>
        <div className="secondary_btn">
          <TfiDownload size={15} />
          Download CV
        </div>
      </div>
    </Content>
  );
};

export default TextContent;

const Content = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  .box {
    padding: 5px 16px;
    display: flex;
    align-items: center;
    background-color: white;
    border: 1px solid rgb(237, 237, 238);
    border-radius: 5px;
    &::before {
      content: "";
      opacity: 1;
      z-index: 1;
      display: block;
      position: absolute;
      margin-left: -11px;
      border-top: 6px solid rgb(57, 240, 134);
      width: 6px;
      border-radius: 5px;
    }
  }
  h1 {
    margin: 0;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 3rem;
  }
  p {
    font-size: 1.1rem;
    font-weight: 500;
  }
  .buttons {
    display: flex;
    gap: 20px;
    .btn {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 10px 20px;
      color: white;
      font-size: 0.9rem;
      font-weight: 500;
    }
    .secondary_btn {
      display: flex;
      align-items: center;
      gap: 5px;
      background-color: rgb(227, 227, 228);
      padding: 10px 20px;
      color: rgb(51, 51, 59);
      font-size: 0.9rem;
      border-radius: 7px;
      text-align: center;
    }
  }
  @media only screen and (max-width: 850px) {
    width: 80%;
  }
  @media only screen and (max-width: 770px) {
    width: 85%;
    margin-left: 100px;
  }
  @media only screen and (max-width: 550px) {
    width: 90%;
    .buttons {
      width: 90%;
      flex-direction: column;
      gap: 10px;
      .btn {
        justify-content: center;
      }
      .secondary_btn {
        justify-content: center;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    width: 195%;
    margin-left: 10px;
    .box {
      padding: 5px 16px;
      display: flex;
      align-items: center;
      background-color: white;
      border: 1px solid rgb(237, 237, 238);
      border-radius: 5px;
    }
    .secondary_text {
      font-size: 1.4rem;
    }
    h1 {
      margin: 0;
      margin-bottom: 0;
      font-weight: 400;
      font-size: 3.5rem;
    }
    p {
      font-size: 1.8rem;
      font-weight: 500;
    }
    .buttons {
      display: flex;
      gap: 20px;
      .btn {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 15px 5px;
        color: white;
        font-size: 1.5rem;
        font-weight: 500;
      }
      .secondary_btn {
        display: flex;
        align-items: center;
        gap: 5px;
        background-color: rgb(227, 227, 228);
        padding: 15px 5px;
        color: rgb(51, 51, 59);
        font-size: 1.5rem;
        font-weight: 500;
        border-radius: 7px;
        text-align: center;
      }
    }
  }
`;
