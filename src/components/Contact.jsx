import React from "react";
import img from "../assets/contact.svg";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <div>
        <img className="icon" src={img} alt="" />
      </div>
      <h2>Get in Touch with Me!</h2>
      <p className="secondary_text">
        Have a question, feedback, or just want to say hello? I'd love to hear
        from you! Your communication matters to me!
      </p>
      <hr />
      <div className="form">
        <input type="name" placeholder="Full Name"></input>
        <input type="email" placeholder="Email"></input>
        <input className="msg" type="text" placeholder="Message"></input>
        <div className="contact primary_btn">
          <a href="#">Send a Message</a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;

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
    margin-bottom: 30px;
  }
  hr {
    margin: 0;
    opacity: 0.4;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      background-color: rgb(249, 249, 249);
      padding: 20px 5px;
      padding-left: 20px;
      border: none;
      border-radius: 5px;
      font-weight: 600;
      font-size: 14px;
      &::placeholder {
        color: rgb(142, 142, 146);
      }
      &:focus {
        outline: none;
      }
    }
    .msg {
      padding-top: 0;
      height: 70px;
    }
    .contact {
      padding: 11px 10px;
      margin: 0;
      a {
        font-size: 0.9rem;
        font-weight: 500;
        text-decoration: none;
        color: white;
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
    .form {
      gap: 15px;
      input {
        padding: 25px 40px;
        padding-left: 30px;
        border-radius: 15px;
        font-weight: 600;
        font-size: 19px;
      }
      .contact {
        padding: 20px 50px;
        a {
          font-size: 1.4rem;
          font-weight: 500;
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
    .form {
      gap: 25px;
      input {
        padding: 40px;
        padding-left: 40px;
        border-radius: 15px;
        font-weight: 600;
        font-size: 27px;
      }
      .contact {
        padding: 35px 50px;
        a {
          font-size: 1.9rem;
          font-weight: 500;
        }
      }
    }
  }
`;
