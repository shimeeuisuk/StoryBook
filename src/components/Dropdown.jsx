import React from "react";
import styled from "styled-components";
import { BsFillInboxFill } from "react-icons/bs";
import { ImTrophy } from "react-icons/im";
import { FaQuestionCircle } from "react-icons/fa";
import { ImMenu } from "react-icons/im";

export default function Dropdown({
  text1,
  text2,
  text3,
  text4,
  bgcolor,
  ftsize,
}) {
  return (
    <Nav bgcolor={bgcolor} ftsize={ftsize}>
      <li className="dropdown">
        <div className="dropdown-menu">
          {text1} <BsFillInboxFill className="icon" />
        </div>
        <div className="dropdown-content">
          <li>Menu1-1</li>
          <li>Menu1-2</li>
          <li>Menu1-3</li>
          <li>Menu1-4</li>
        </div>
      </li>
      <li className="dropdown">
        <div className="dropdown-menu">
          {text2 !== undefined ? (
            <div className="icon">{text2}</div>
          ) : (
            <ImTrophy className="icon" />
          )}
        </div>
        <div className="dropdown-content">
          <li>Menu2-1</li>
          <li>Menu2-2</li>
          <li>Menu2-3</li>
          <li>Menu2-4</li>
        </div>
      </li>
      <li className="dropdown">
        <div className="dropdown-menu">
          {text3} <FaQuestionCircle className="icon" />
        </div>
        <div className="dropdown-content">
          <li>Menu3-1</li>
          <li>Menu3-2</li>
          <li>Menu3-3</li>
          <li>Menu3-4</li>
        </div>
      </li>
      <li className="dropdown">
        <div className="dropdown-menu">
          {text4} <ImMenu className="icon" />
        </div>
        <div className="dropdown-content">
          <li>Menu4-1</li>
          <li>Menu4-2</li>
          <li>Menu4-3</li>
          <li>Menu4-4</li>
        </div>
      </li>
    </Nav>
  );
}

const Nav = styled.ul`
  background-color: ${(props) => props.bgcolor || "#f8f9f9"};
  list-style-type: none;
  margin: 0;
  padding: 0;
  > li {
    display: inline-block;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropdown-menu {
    font-size: ${(props) => props.ftsize || 20}px;
    cursor: pointer;
  }
  .dropdown-content {
    position: absolute;
    display: none;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    > li:hover {
      background-color: #e3e6e8;
    }
  }
  .icon {
    padding: 20px 10px;
    :hover {
      background-color: #e3e6e8;
    }
  }
`;
