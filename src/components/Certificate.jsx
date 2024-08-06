import React from "react";
import styled from "styled-components";
import img from "../assets/Certificate.svg";
import { BsArrowUpRight } from "react-icons/bs";

const Certificate = () => {
  return (
    <Container>
      <div>
        <img className="icon" src={img} alt="" />
      </div>
      <h2>Licenses & Certifications</h2>
      <p className="secondary_text">
        Professional accreditations and certifications demonstrating expertise
        and compliance with industry standards.
      </p>
      <hr />
      <div className="certificates">
        <div className="certificate">
          <div>
            <h3>Data Analysis & Visualization</h3>
            <p className="secondary_text text">NexusWorks - Issued Jan 2024</p>
            <div className="secondary_btn">
              <BsArrowUpRight className="react_icon" size={15} />
              Show Credentials
            </div>
          </div>
          <div>
            <h3>Data Analytics Mastery</h3>
            <p className="secondary_text text">BrightByte - Issued Aug 2023</p>
            <div className="secondary_btn">
              <BsArrowUpRight className="react_icon" size={15} />
              Show Credentials
            </div>
          </div>
        </div>
        <div className="certificate">
          <div>
            <h3>Data Analysis Professional</h3>
            <p className="secondary_text text">StellarWave - Issued Nov 2023</p>
            <div className="secondary_btn">
              <BsArrowUpRight className="react_icon" size={15} />
              Show Credentials
            </div>
          </div>
          <div>
            <h3>Strategic Business Consulting</h3>
            <p className="secondary_text text">DataSpark - Issued Feb 2023</p>
            <div className="secondary_btn">
              <BsArrowUpRight className="react_icon" size={15} />
              Show Credentials
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Certificate;

const Container = styled.div`
  width: 52%;
  margin: auto;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: white;
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
  .certificates {
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    .certificate {
      width: 300px;
      div {
        margin-top: 0;
        margin-left: 0px;
        margin-right: 0px;
        h3 {
          font-size: 1rem;
          font-weight: 400;
        }
        .text {
          margin-top: -9px;
          margin-left: 0;
          font-size: 13px;
        }
        .secondary_btn {
          display: flex;
          align-items: center;
          margin-left: 0;
          gap: 5px;
          background-color: rgb(227, 227, 228);
          padding: 10px;
          width: 140px;
          color: rgb(51, 51, 59);
          font-size: 0.9rem;
          border-radius: 7px;
          text-align: center;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .certificates {
      margin-left: 180px;
      .certificate {
        margin-left: -70px;
      }
    }
  }

  @media only screen and (max-width: 950px) {
    width: 70%;
    margin-top: 5px;
    .certificates {
      padding-left: 20px;
      margin-left: 30px;
      .certificate {
        margin-left: 0px;
      }
    }
  }
  @media only screen and (max-width: 770px) {
    width: 85%;
    margin-left: 100px;
    .certificates {
      padding-left: 40px;
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
    .certificates {
      flex-direction: column;
      gap: 0;
      margin: 0;
      .certificate {
        width: 100%;
        margin-left: 0;
        margin-bottom: 0;
        div {
          h3 {
            margin-top: -20px;
            margin-left: 30px;
            font-size: 2rem;
            font-weight: 400;
          }
          .text {
            margin-left: 30px;
            font-size: 1.5rem;
            font-weight: 500;
          }
          .secondary_btn {
            width: 80%;
            margin: 30px;
            padding: 25px 30px;
            align-items: center;
            justify-content: center;
            font-size: 1.7rem;
            border-radius: 10px;
            .react_icon {
              margin-right: 10px;
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }
  }
`;
