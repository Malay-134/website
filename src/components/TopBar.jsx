import React, { useState } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiPen } from "react-icons/bi";
import img from "../assets/profile_img.avif";

const TopBar = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("activeNavbar");
  };
  const removeNav = () => {
    setActive("navBar");
  };
  return (
    <Container>
      <div className="image">
        <img src={img} alt="image" />
      </div>
      <div className={active}>
        <div className="closeNavbar" onClick={removeNav}>
          <AiFillCloseCircle size={30} className="icon2" />
        </div>
        <ul className="navLists">
          <li className="navItem">
            <a href="" className="navLink">
              Home
            </a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">
              Profile
            </a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">
              Experience
            </a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">
              Education
            </a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">
              Skills
            </a>
          </li>
        </ul>
      </div>
      <div className="contact primary_btn">
        <a href="#" className="navLink">
          <BiPen size={15} className="pen" />
          Contact me
        </a>
      </div>
      <div className="toggleNavbar">
        <FiMenu className="icon" size={25} onClick={showNav} />
      </div>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  position: sticky;
  top: 0;
  margin: auto;
  margin-top: 25px;
  border: 1px solid rgb(237, 237, 238);
  border-radius: 15px;
  width: 52%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  .image {
    img {
      display: block;
      border-radius: 10px;
      border: 1px solid rgb(186, 83, 107);
      margin-left: 5px;
      height: 35px;
      width: 35px;
    }
  }
  .navBar {
    display: flex;
    .navLists {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      list-style: none;
      .navItem {
        padding: 8px 8px;
        border-radius: 5px;
        &:hover {
          background-color: rgb(246, 246, 246);
        }
        .navLink {
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgb(119, 119, 125);
        }
      }
    }
  }
  .activeNavbar {
    width: 600px;
    margin-right: -40px;
    margin-top: 260px;
    list-style: none;
    background-color: white;
    border: 1px solid rgb(240, 240, 240);
    border-radius: 10px;
    .navLists {
      display: flex;
      flex-direction: column;
      padding: 20px 20px;
      margin: auto;
      margin-top: -40px;
      gap: 15px;
      list-style: none;
      .navItem {
        .navLink {
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          color: rgb(119, 119, 125);
        }
      }
    }
  }
  .contact {
    padding: 11px 10px;
    margin-right: 10px;
    .navLink {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      gap: 5px;
      font-size: 0.9rem;
      font-weight: 500;
      color: white;
      .pen {
        transform: rotateZ(-45deg);
      }
    }
  }
  .toggleNavbar,
  .closeNavbar {
    display: none;
  }
  .icon {
    padding: 6px;
    border-radius: 10px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
  }

  @media screen and (max-width: 1250px) {
    margin: auto;
    margin-top: 25px;
    width: 52%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navBar {
      margin: 0;
      width: 100%;
      .navLists {
        .navItem {
          padding: 3px 10px;
          .navLink {
            font-size: 14px;
          }
        }
      }
    }
    .contact {
      padding: 7px 10px;
      margin-right: 10px;
      .navLink {
        margin: -5px;
        padding: 1px 12px;
        font-size: 0.8rem;
        .pen {
          height: 15px;
          width: 20px;
          position: relative;
          margin-left: -10px;
        }
      }
    }
  }
  @media only screen and (max-width: 1050px) {
    width: 60%;
    .navBar {
      .navLists {
        .navItem {
          padding: 3px 10px;
          .navLink {
            font-size: 13px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 950px) {
    margin: auto;
    width: 70%;
    height: 50px;
    .toggleNavbar {
      display: block;
    }
    .closeNavbar {
      display: block;
      top: 0;
      right: 0;
      margin: 5px 0 0 560px  ;
    }
    .navBar {
      display: none;
    }
    .contact {
      display: none;
    }
  }

  @media only screen and (max-width: 770px) {
    margin-left: 100px;
    width: 85%;
    .activeNavbar {
      width: 400px;
      margin-right: 0;
    }
    .closeNavbar {
      margin-left: 360px;
    }
  }

  @media only screen and (max-width: 550px) {
    width: 140%;
    margin-left: 10px;
    .activeNavbar {
      width: 300px;
      margin-right: 0;
    }
    .closeNavbar {
      margin-left: 260px;
    }
  }
  @media only screen and (max-width: 375px) {
    width: 195%;
    height: 90px;
    margin-left: 10px;
    .image {
      margin-left: 20px;
      width: 80px;
      height: 80px;
      img {
        margin: 0;
        width: 80px;
        height: 80px;
      }
    }
    .toggleNavbar {
      margin-right: 20px;
      .icon {
        width: 65px;
        height: 65px;
      }
    }
    .activeNavbar {
      position: absolute;
      width: 700px;
      margin-top: 450px;
      margin-right: 0;
      .navLists {
        padding: 20px 20px;
        gap: 25px;
        .navItem {
          .navLink {
            text-decoration: none;
            font-weight: 500;
            font-size: 1.8rem;
            color: rgb(119, 119, 125);
          }
        }
      }
    }
    .closeNavbar {
      .icon2 {
        width: 50px;
        height: 50px;
      }
      margin-top: 10px;
      margin-left: 610px;
    }
  }
`;
