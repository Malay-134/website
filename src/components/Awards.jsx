import React from "react";
import img from "../assets/awards.svg";
import styled from "styled-components";
import { FaCalendarAlt } from "react-icons/fa";

const Awards = () => {
  return (
    <Container>
      <div>
        <img className="icon" src={img} alt="" />
      </div>
      <h2>Honors & Awards</h2>
      <p className="secondary_text">
        Acknowledgments for exceptional achievements and contributions in
        professional endeavors.
      </p>
      <hr />
      <div className="awards">
        <div className="award">
          <div className="title">
            <h2>Business Innovation Award</h2>
            <p className="secondary_text">Issued by CCRSolution - Consulting</p>
          </div>
          <p className="secondary_text text">
            Commending exemplary expertise in business consulting, driving
            innovative strategies and impactful outcomes.
          </p>
          <div className="secondary_text date">
            <FaCalendarAlt className="react_icon" size={11} />
            Jul 2022
          </div>
        </div>
        <div className="award">
          <div className="title">
            <h2>Data Science Excellence Award</h2>
            <p className="secondary_text">Issued by Nexus - Data Science</p>
          </div>
          <p className="secondary_text text">
            Recognizing outstanding contributions in pioneering data-driven
            solutions and strategic insights.
          </p>
          <div className="secondary_text date">
            <FaCalendarAlt className="react_icon" size={11} />
            Dec 2023
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Awards;

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
  .awards {
    margin-top: 10px;
    margin-left: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .award {
      display: flex;
      flex-direction: column;
      margin-top: -10px;
      width: 300px;
      align-items: center;
      padding: 0;
      margin: 0;
      .title {
        width: 400px;
        h2 {
          font-size: 1rem;
          font-weight: 500;
        }
        p {
          font-size: 12px;
        }
      }
      .text {
        font-size: 12px;
        font-weight: 500;
        margin-left: -50px;
        margin-top: -10px;
        width: 310px;
      }
      .date {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 15px;
        padding: 6px 0;
        margin-top: -2px;
        margin-left: -260px;
        border: 1px solid rgb(237, 237, 238);
        border-radius: 10px;
        gap: 5px;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .awards {
      margin-left: 10px;
      .award {
        .title {
          width: 220px;
        }
        .text {
          width: 80%;
          margin-left: 25px;
        }
        .date {
          margin-left: -90px;
        }
      }
    }
  }
  @media only screen and (max-width: 950px) {
    width: 70%;
    margin-top: 5px;
    .awards {
      margin-left: -60px;
      gap: 10px;
      .award {
        padding: 5px;
        width: 330px;
        margin-left: -20px;
        margin-top: 0;
        h2 {
          width: 250px;
        }
        .text {
          width: 80%;
          margin-left: 85px;
        }
        .date {
          margin-left: -80px;
        }
      }
    }
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
      margin-left: 30px;
      margin-top: 10px;
      font-size: 2.3rem;
      font-weight: 400;
    }
    p {
      margin-left: 30px;
      font-size: 1.3rem;
      font-weight: 500;
    }
    .awards {
      gap: 0;
      flex-direction: column;
      margin: 0;
      .award {
        width: 100%;
        margin-left: -20px;
        align-items: start;
        .title {
          h2 {
            font-size: 26px;
            font-weight: 400;
          }
          p {
            font-size: 18px;
          }
        }
        .text {
          width: 80%;
          padding-right: -30px;
          margin-left: 55px;
          font-size: 18px;
        }
        .date {
          width: 130px;
          height: 10px;
          margin: 0;
          margin-bottom: 20px;
          margin-left: 55px;
          padding: 15px 10px;
          font-size: 18px;
          .react_icon {
            width: 20px;
            height: 20px;
          }
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
    .awards {
      .award {
        .title {
          h2 {
            margin-top: -20px;
            margin-left: 20px;
            font-size: 1.8rem;
            font-weight: 500;
          }
          p {
            margin-left: 20px;
            font-size: 22px;
            font-weight: 500;
          }
        }
        .text {
          width: 90%;
          margin-left: 55px;
          font-size: 25px;
        }
        .date {
          width: 150px;
          padding: 15px 10px;
          font-size: 23px;
          .react_icon {
            width: 25px;
            height: 25px;
          }
        }
      }
    }
  }
`;
