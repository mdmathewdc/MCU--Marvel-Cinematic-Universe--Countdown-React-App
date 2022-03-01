import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src="/marvel-logo.png" alt="logo" />
      <h1>Countdown App</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  height: 56px;
  background-color: #020001;
  justify-content: center;

  h1 {
    color: white;
    font-family:'Poppins', sans-serif;
    font-size: 20px;
    margin-left: 5px;
  }
`;
const HeaderLogo = styled.img`
  height: 50px;
  margin-top: 3px;
  position: sticky;
  top: 0;
`;

export default Header;
