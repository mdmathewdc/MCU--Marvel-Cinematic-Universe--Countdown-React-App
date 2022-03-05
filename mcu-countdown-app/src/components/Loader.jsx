import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledLoader className="loader">
      <div className="one"></div>
      <div className="two"></div>
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  display: flex;
  margin-top: 50%;
  justify-content: center;
  align-items: center;

  .loader {
    position: relative;
    top: 50%;
    left: 50%;
  }

  .one {
    position: absolute;
    border-radius: 50%;
    background: #ffffff;
    opacity: 0;
    animation: loading 1.3s 0.65s infinite;
    height: 20px;
    width: 20px;
  }

  .two {
    position: absolute;
    border-radius: 50%;
    background: red;
    opacity: 0;
    animation: loading 1.3s infinite;
    height: 20px;
    width: 20px;
  }

  @keyframes loading {
    0% {
      opacity: 0;
      transform: scale(0.15);
      box-shadow: 0 0 2px rgba(black, 0.1);
    }
    50% {
      opacity: 1;
      transform: scale(2);
      box-shadow: 0 0 10px rgba(black, 0.1);
    }
    100% {
      opacity: 0;
      transform: scale(0.15);
      box-shadow: 0 0 2px rgba(black, 0.1);
    }
  }
`;

export default Loader;
