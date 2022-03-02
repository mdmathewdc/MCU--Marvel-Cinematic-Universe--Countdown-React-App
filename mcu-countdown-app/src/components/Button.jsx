import React from "react";
import styled from "styled-components";

const Button = () => {
  return <StyledButton>What's next?</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #eb1b20;
  color: white;
  padding: 10px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 900;
  font-family: "Poppins";
  display: block;
  border: 1px solid red;
  margin: 20px;

  &:hover, :active {
    background-color: #fb0208;
    cursor: pointer;
  }
`;

export default Button;
