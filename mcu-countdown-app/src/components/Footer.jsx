import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/mdmathewdc" rel="noreferrer" target="_blank">
        <img src="/github.svg" alt="logo" />
      </a>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  img {
    height: 40px;
    width: 40px;
  }
`;

export default Footer;
