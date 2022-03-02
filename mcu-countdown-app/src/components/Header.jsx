import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src="/marvel-logo.png" alt="logo" />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  height: 72px;
  background-color: #020001;
  justify-content: center;
`;
const HeaderLogo = styled.img`
  height: 48px;
  margin: 12px 0;
  position: sticky;
  top: 0;
`;

export default Header;
