import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <hr />
      <p className="secondary_text">© 2024, All Right Reserved</p>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  padding-top: 80px;
  width: 52%;
  margin: auto;
  hr {
    opacity: 0.4;
  }
  p {
    font-size: 14px;
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
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
    p {
      font-size: 1.3rem;
    }
  }
  @media only screen and (max-width: 375px) {
    width: 180%;
    margin-left: 35px;
    p {
      font-size: 1.6rem;
    }
  }
`;
