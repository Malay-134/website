import React from "react";
import styled from "styled-components";
import img from "../assets/recommend.svg";

const Recommandtion = () => {
  return (
    <Container>
      <div>
        <img className="icon" src={img} alt="" />
      </div>
      <h2>Recommendations</h2>
      <p className="secondary_text">
        Endorsements and testimonials highlighting professional aptitude and
        contributions from colleagues and partners.
      </p>
      <hr />
      <div className="recommendations">
        <div className="detail abby">
          <div className="title">
            <h2>Abby Nichols</h2>
            <p className="secondary_text">Data Engineer - Oct 2023</p>
          </div>
          <p className="secondary_text text">
            I am delighted to endorse Thomas Scott for his exemplary
            professionalism and remarkable contributions. Throughout our
            collaboration, Thomas consistently demonstrated a profound
            understanding of complex data dynamics and business intricacies. His
            innovative strategies and meticulous attention to detail have
            significantly elevated project outcomes. Thomas's dedication,
            coupled with his exceptional communication skills, makes him an
            invaluable asset to any endeavor.
          </p>
        </div>
        <div className="detail steve">
          <div className="title">
            <h2>Steve Anderson</h2>
            <p className="secondary_text">Data Scientist - Nov 2022</p>
          </div>
          <p className="secondary_text text">
            It is with great pleasure that I recommend Thomas Scott for his
            outstanding proficiency and unwavering commitment. Thomas's
            adeptness in navigating intricate data landscapes, coupled with his
            astute business acumen, has consistently resulted in strategic
            insights of immense value.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Recommandtion;

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
  .recommendations {
    margin: 0;
    .detail {
      display: flex;
      flex-direction: column;
      margin-top: -10px;
      margin: 0;
      .title {
        h2 {
          font-size: 1rem;
          font-weight: 500;
        }
        p {
          margin-top: -5px;
          font-size: 12px;
        }
      }
      .text {
        width: 500px;
        font-size: 11px;
        margin-top: -15px;
        margin-left: 40px;
      }
    }
    .abby {
      &::before {
        content: "";
        display: block;
        position: absolute;
        margin-top: 22px;
        margin-left: 20px;
        border-top: 120px solid rgb(46, 222, 127);
        width: 2px;
      }
    }
    .steve {
      &::before {
        content: "";
        display: block;
        position: absolute;
        margin-top: 22px;
        margin-left: 20px;
        border-top: 95px solid rgb(47, 128, 222);
        width: 2px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .recommendations {
      .detail {
        .text {
          width: 91%;
        }
      }
      .abby {
        &::before {
          border-top: 135px solid rgb(46, 222, 127);
        }
      }
      .steve {
        &::before {
          border-top: 110px solid rgb(47, 128, 222);
        }
      }
    }
  }
  @media only screen and (max-width: 950px) {
    width: 70%;
    margin-top: 5px;
    .recommendations {
      .abby {
        &::before {
          border-top: 110px solid rgb(46, 222, 127);
        }
      }
      .steve {
        &::before {
          border-top: 95px solid rgb(47, 128, 222);
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
    .recommendations {
      .detail {
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
      }
      .abby {
        &::before {
          margin-top: 30px;
          border-top: 310px solid rgb(46, 222, 127);
          width: 3px;
        }
      }
      .steve {
        &::before {
          margin-top: 30px;
          border-top: 220px solid rgb(47, 128, 222);
          width: 3px;
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
    .recommendations {
      .detail {
        .title {
          h2 {
            margin-top: -10px;
            margin-left: 20px;
            font-size: 1.9rem;
            font-weight: 500;
          }
          p {
            margin-left: 20px;
            font-size: 23px;
            font-weight: 500;
          }
        }
        .text {
          margin-top: -40px;
          width: 80%;
          margin-left: 55px;
          font-size: 22px;
          font-weight: 500;
        }
      }
      .abby {
        &::before {
          border-top: 370px solid rgb(46, 222, 127); /* height: 10px; */
        }
      }
      .steve {
        &::before {
          border-top: 260px solid rgb(47, 128, 222); /* height: 10px; */
        }
      }
    }
  }
`;
