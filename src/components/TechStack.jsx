import styled from "styled-components";
import { useState } from "react";

function TechStack({ text }) {
  const [input, setInput] = useState("");
  const tech = [
    {
      color: "#F7DF1E",
      text: "javascript",
    },
    {
      color: "#61DAFB",
      text: "react",
    },
    {
      color: "#E34F26",
      text: "html",
    },
    {
      color: "#339933",
      text: "node",
    },
  ];
  const pick = tech.find((el) => {
    return el.text.toLowerCase() === text.toLowerCase();
  });
  return (
    <>
      {pick === undefined ? (
        <Container>not defined</Container>
      ) : (
        <Container
          onChange={() => {
            setInput(text);
          }}
          bgcolor={pick.color}
        >
          {pick.text}
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${(props) => props.bgcolor || "#000000"};
  border-radius: 0.2rem;
  width: ${(props) => props.width || 80}px;
  height: ${(props) => props.height || 22}px;
`;

export default TechStack;
