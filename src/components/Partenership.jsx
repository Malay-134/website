import React from "react";
import styled from "styled-components";
import img1 from "../assets/partner1.svg";
import img2 from "../assets/partner2.svg";
import img3 from "../assets/partner3.svg";
import img4 from "../assets/partner4.svg";
import img5 from "../assets/partner5.svg";

const partners = [img1, img2, img3, img4, img5];

const Partenership = () => {
  return (
    <Partner>
      <div className="secondary_text">Worked with</div>
      <hr />
      <div className="logos">
        {partners.map((partner, index) => (
          <img key={index} src={partner} alt="partner" />
        ))}
      </div>
    </Partner>
  );
};

export default Partenership;

const Partner = styled.div`
  background-color: white;
  border-radius: 20px;
  border: 1px solid rgb(237, 237, 238);
  width: 52%;
  margin: auto;
  margin-top: 5px;
  div {
    margin: 20px;
    display: flex;
    font-size: 0.8rem;
    align-items: center;
    justify-content: center;
  }
  hr {
    opacity: 0.4;
  }
  .logos {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    img {
      opacity: 0.6;
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 950px) {
    width: 70%;
    .logos {
      gap: 15px;
      img {
        height: 23px;
        width: 110px;
      }
    }
  }
  @media (max-width: 770px) {
    width: 85%;
    margin-left: 102px;
    .logos {
      gap: 10px;
      img {
        height: 20px;
        width: 98px;
      }
    }
  }

  @media (max-width: 550px) {
    width: 120%;
    margin-left: 60px;
    .logos {
      img {
        height: 18px;
        width: 90px;
      }
    }
  }
  @media (max-width: 375px) {
    width: 180%;
    margin-left: 35px;
  }
  
`;
