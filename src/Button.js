import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.color || "white"};
  width: ${(props) => `${props.width}px` || "100px"};
  height: ${(props) => `${props.height}px` || "40px"};
`;

const Button = ({ color, width, height, text }) => (
  <StyledButton color={color} width={width} height={height}>
    {text}
  </StyledButton>
);

export default Button;
