import React from "react";
import img from "../assets/image1.svg";
import styled from "styled-components";
import { GrLocation } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";

const jobs = [
  {
    id: 1,
    title: "Data Scientist & Business Consultant",
    company: "TechNova",
    location_type: "Full Time",
    date: "Jun 2021 - Present",
    location: "Based in Phoenix",
    city: "Arizona",
    state: "USA",
    cls_name: "first",
    about:
      "Demonstrating a seamless integration of data science acumen and business consulting proficiency, effectively driving transformative initiatives and delivering strategic insights to optimize organizational performance and facilitate informed decision-making.",
  },
  {
    id: 2,
    title: "Data Analyst & Business Strategist",
    company: "SwiftEdge",
    location_type: "Contract",
    date: "Oct 2017 - May 2021",
    location: "Dallas",
    city: "Texas",
    state: "USA",
    cls_name: "first",
    about:
      "Skillfully combining data analysis proficiency with strategic business acumen, adeptly navigating complex datasets to inform strategic decision-making and drive organizational growth initiatives.",
  },
  {
    id: 3,
    title: "Analytics Specialist & Business Advisor",
    company: "NexusWorks",
    location_type: "Full Time",
    date: "Jan 2016 - Sep 2017",
    location: "Houston",
    city: "Texas",
    state: "USA",
    cls_name: "first",
    about:
      "Leveraging specialized analytics expertise alongside strategic business advisory skills, providing actionable insights and guidance to optimize business performance and achieve strategic objectives.",
  },
  {
    id: 4,
    title: "Business Consultant & Analytics Expert",
    company: "ProActive",
    location_type: "Internship",
    date: "Jan 2016 - Sep 2017",
    location: "Newark",
    city: " New Jersey",
    state: "USA",
    cls_name: "last",
    about:
      "Seamlessly integrating business consulting prowess with advanced analytics expertise, delivering tailored solutions and actionable insights to drive organizational success and enhance strategic decision-making processes.",
  },
];

const Experience = () => {
  return (
    <Container>
      <div>
        <img className="icon" src={img} alt="" />
      </div>
      <h2>Work Experience</h2>
      <p className="secondary_text">
        Proven track record in data science and business consulting, delivering
        impactful insights and results across industries.
      </p>
      <hr />
      {jobs.map(
        ({
          id,
          title,
          company,
          location_type,
          date,
          location,
          city,
          state,
          about,
          cls_name,
        }) => (
          <div key={id} className={`content ${cls_name}`}>
            <div className="details">
              <div className="title">
                <h2>{title}</h2>
                <p className="secondary_text">
                  {company} {location_type}
                </p>
              </div>
              <div className="secondary_text date">
                <FaCalendarAlt className="react_icon" size={11} />
                {date}
              </div>
            </div>
            <div className="secondary_text location">
              <GrLocation className="react_icon" size={15} />
              <p>
                {location},{city},{state}.
              </p>
            </div>
            <p className="secondart_text text">{about}</p>
          </div>
        )
      )}
    </Container>
  );
};

export default Experience;

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
  .content {
    display: flex;
    flex-direction: column;
    margin-left: 0px;
    margin-top: 0;
    gap: 5px;
    .details {
      display: flex;
      .title {
        margin-left: 0;
        width: 400px;
        h2 {
          font-size: 1rem;
          font-weight: 500;
        }
        p {
          font-size: 14px;
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
        border: 1px solid rgb(237, 237, 238);
        border-radius: 10px;
        gap: 5px;
      }
    }
    .location {
      width: 240px;
      display: flex;
      align-items: center;
      margin-left: 40px;
      margin-top: -60px;
      align-items: center;
      font-size: 13px;
      font-weight: 400;
      .react_icon {
        width: 25px;
        height: 25px;
      }
      p {
        margin-top: 15px;
        margin-left: 10px;
      }
    }
    .text {
      color: rgb(119, 119, 125);
      font-size: 0.8rem;
      font-weight: 500;
      margin-left: 43px;
      margin-top: -10px;
      margin-bottom: -20px;
    }
    &::before {
      content: "";
      z-index: 1;
      display: block;
      position: absolute;
      margin-top: 46px;
      margin-left: 17px;
      border-top: 7px solid rgb(142, 142, 146);
      width: 7px;
      border-radius: 5px;
    }
  }
  .first {
    &::after {
      content: "";
      display: block;
      position: absolute;
      margin-top: 46px;
      margin-left: 20px;
      border-bottom: 209px solid rgb(246, 246, 246);
      width: 1px;
      border-radius: 5px;
      z-index: 0;
    }
  }
  .last {
    margin-bottom: 40px;
    &::after {
      content: "";
      display: block;
      position: absolute;
      margin-top: 46px;
      margin-left: 20px;
      border-bottom: 165px solid rgb(246, 246, 246);
      width: 1px;
      border-radius: 5px;
    }
  }
  @media only screen and (max-width: 950px) {
    width: 70%;
    margin-top: 5px;
    .content {
      .details {
        .date {
          width: 160px;
          height: 10px;
          padding: 10px 0px;
          font-size: 11px;
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
    padding-bottom: 10px;
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
    .content {
      .details {
        .title {
          align-items: center;
          margin-bottom: 10px;
          gap: 0;
          h2 {
            margin-top: -20px;
            font-size: 26px;
            font-weight: 400;
          }
          p {
            margin-left: 40px;
            font-size: 18px;
            font-weight: 500;
          }
        }
        .date {
          width: 250px;
          height: 10px;
          margin: 0;
          gap: 10px;
          margin-bottom: 20px;
          padding: 20px 15px;
          font-size: 15px;
          .react_icon {
            width: 20px;
            height: 20px;
          }
        }
      }
      .location {
        margin-left: 65px;
        font-size: 1.8rem;
        gap: 10px;
        .react_icon {
          width: 30px;
          height: 30px;
        }
        p {
          width: 100%;
          font-size: 21px;
          margin-left: 5px;
        }
      }
      .text {
        margin-left: 70px;
        margin-right: 10px;
        font-size: 18px;
        font-weight: 500;
      }
      &::before {
        margin-top: 46px;
        margin-left: 30px;
        border-top: 14px solid rgb(142, 142, 146);
        width: 14px;
        border-radius: 10px;
      }
    }
    .first {
      &::after {
        margin-top: 47px;
        margin-left: 35px;
        border-bottom: 400px solid rgb(246, 246, 246);
        width: 3px;
      }
    }
    .last {
      margin-bottom: 40px;
      &::after {
        margin-top: 47px;
        margin-left: 35px;
        border-bottom: 310px solid rgb(246, 246, 246);
        width: 3px;
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
    .content {
      .details {
        display: flex;
        flex-direction: column;
        gap: 0;
        margin-bottom: 60px;
        .title {
          align-items: center;
          margin-bottom: 10px;
          gap: 0;
          h2 {
            margin-top: -40px;
            margin-bottom: 10px;
            font-size: 2rem;
            font-weight: 400;
          }
          p {
            margin-left: 40px;
            font-size: 1.5rem;
            font-weight: 500;
          }
        }
        .date {
          width: 250px;
          height: 10px;
          margin: 0;
          margin-left: 40px;
          padding: 20px 15px;
          font-size: 23px;
          .react_icon {
            width: 25px;
            height: 25px;
          }
        }
      }
      .location {
        margin-left: 80px;
        font-size: 1.8rem;
        gap: 10px;
        .react_icon {
          width: 50px;
          height: 50px;
        }
        p {
          font-size: 21px;
          margin-left: 5px;
        }
      }
      .text {
        margin-left: 80px;
        margin-right: 10px;
        font-size: 1.8rem;
        font-weight: 500;
      }

      &::before {
        margin-top: 46px;
        margin-left: 30px;
        border-top: 14px solid rgb(142, 142, 146);
        width: 14px;
        border-radius: 10px;
      }
    }
    .first {
      &::after {
        margin-top: 47px;
        margin-left: 35px;
        border-bottom: 710px solid rgb(246, 246, 246);
        width: 3px;
      }
    }
    .last {
      margin-bottom: 40px;
      &::after {
        margin-top: 47px;
        margin-left: 35px;
        border-bottom: 570px solid rgb(246, 246, 246);
        width: 3px;
      }
    }
  }
`;
