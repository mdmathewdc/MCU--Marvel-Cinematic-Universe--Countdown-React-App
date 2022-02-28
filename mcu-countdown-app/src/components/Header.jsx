import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src="/marvel-logo.png" alt="logo" />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 50px;
  background-color: #161b22;
`;
const HeaderLogo = styled.img`
  height: 50px;
`;
export default Header;
