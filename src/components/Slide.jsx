import React from 'react';
import styled from "styled-components";
import { useEffect, useState } from "react";

function Slide() {
  const text = [
    "developer",
    "data scientist",
    "system admin",
    "mobile developer",
    "game developer",
  ];
  const [view, setView] = useState(text[0]);
  let count = -1;

  useEffect(() => {
    let timer = setInterval(() => {
      count = (count + 1) % 5;
      console.log(count);
      setView(text[count]);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <div className="text">Every</div>
      <div className="edit">{view}</div>
      <div className="text">has a</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #313539;
  .edit {
    position: relative;
    animation-duration: 1500ms;
    animation-name: down;
    animation-iteration-count: infinite;
    color: #f2740d;
    font-weight: bold;
    font-size: 55px;
    margin: 0px 5px;
  }
  .text {
    color: white;
    font-weight: bold;
    font-size: 55px;
  }
  @keyframes down {
    from {
      top: -50px;
    }
    to {
      top: 0px;
    }
  }
`;

export default Slide;
