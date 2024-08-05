import React from "react";
import img from "../assets/skill.svg";
import styled from "styled-components";
import { IoCheckmark } from "react-icons/io5";

const data_science_skill = [
  "Data Analysis",
  "Machine Learning",
  "Statistical Modeling",
  "Data Visualization",
  "Big Data Analytics",
  "Predictive Modeling",
  "Deep Learning",
  "Data Mining",
  "Statistical Inference",
  "Hypothesis Testing",
  "Data Cleaning",
];
const business_skill = [
  "Strategic Planning",
  "Business Analysis",
  "Market Research",
  "Financial Analysis",
  "Problem-Solving",
  "Project Management",
  "Risk Assessment",
  "Negotiation Skills",
];

const Skills = () => {
  return (
    <Container>
      <div>
        <img className="icon" src={img} alt="" />
      </div>
      <h2>Professional Skills</h2>
      <p className="secondary_text">
        Key competencies essential for navigating and excelling in various
        professional contexts.
      </p>
      <hr />
      <div className="details">
        <div className="title">
          <h3>Data Science</h3>
        </div>
        <div className="skills">
          {data_science_skill.map((skill, index) => {
            return (
              <div className="skill" key={index}>
                <IoCheckmark className="mark" size={12} />
                {skill}
              </div>
            );
          })}
        </div>
        <div className="title">
          <h3>Business Consultation</h3>
        </div>
        <div className="skills">
          {business_skill.map((skill, index) => {
            return (
              <div className="skill" key={index}>
                <IoCheckmark className="mark" size={12} />
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 52%;
  margin: auto;
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
    h3 {
      margin-left: -10px;
      font-size: 1rem;
      font-weight: 500;
    }
    .skills {
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 10px;
      column-gap: 10px;
      .skill {
        margin: 0;
        gap: 5px;
        padding: 5px;
        display: flex;
        width: 140px;
        height: auto;
        align-items: center;
        color: rgb(119, 119, 125);
        border: 1px solid;
        border: 1px solid rgb(237, 237, 238);
        border-radius: 7px;
        font-size: 13px;
      }
    }
  }
  @media only screen and (max-width: 950px) {
    width: 70%;
    margin-top: 5px;
    .details {
      .skills {
        gap: 3;
        .skill {
          margin: 0px;
          padding: 4;
          width: 140px;
        }
      }
    }
  }
  @media only screen and (max-width: 770px) {
    width: 85%;
    margin-left: 100px;
    .details {
      .skills {
        gap: 2;
        .skill {
          margin: 0px;
          padding: 3;
          width: 130px;
          font-size: 12px;
        }
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
      h3 {
        font-size: 19px;
      }
      .skills {
        /* gap: 2px ; */
        grid-template-columns: repeat(3, 1fr);
        .skill {
          margin: 0;
          padding: 5px 5px;
          width: 185px;
          height: 40px;
          font-size: 17px;
          .mark {
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
    .details {
      margin-top: 0;
      h3 {
        font-size: 30px;
      }
      .skills {
        grid-template-columns: repeat(2, 1fr);
        .skill {
          padding: 5px 15px;
          gap: 5px;
          width: 240px;
          height: 50px;
          font-size: 22px;
          font-weight: 500;
          .mark {
            width: 25px;
            height: 25px;
          }
        }
      }
    }
  }
`;
