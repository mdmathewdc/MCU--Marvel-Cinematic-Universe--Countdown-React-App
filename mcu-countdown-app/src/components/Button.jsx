import React from "react";
import styled from "styled-components";
import { useRef } from "react";

const Button = ({ clickAction }) => {
  const buttonText = "What's Next?";
  const buttonRef = useRef(null);

  const setLoader = () => {
    buttonRef.current.classList.add("loading");
    // Hide loader after 700 milliseconds
    setTimeout(() => buttonRef.current.classList.remove("loading"), 700);
  };

  return (
    <ActionButton
      ref={buttonRef}
      onClick={() => {
        setLoader();
        clickAction();
      }}
    >
      {buttonText}
    </ActionButton>
  );
};

const ActionButton = styled.button`
  background-color: #eb1b20;
  font-family: "Poppins";
  border: none;
  font-size: 15px;
  font-weight: 900;
  padding: 0.5em 1.25em;
  color: white;
  border-radius: 0.15em;
  transition: 0.3s;
  cursor: pointer;
  position: relative;
  margin: 1rem 0;

  &:hover {
    background-color: #fb0208;
  }

  &::after {
    content: "";
    display: block;
    width: 1.2em;
    height: 1.2em;
    position: absolute;
    left: calc(50% - 0.75em);
    top: calc(50% - 0.75em);
    border: 0.15em solid transparent;
    border-right-color: white;
    border-radius: 50%;
    animation: button-anim 0.7s linear infinite;
    opacity: 0;
  }

  @keyframes button-anim {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &.loading {
    color: transparent;
  }

  &.loading::after {
    opacity: 1;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
    margin-bottom: 4rem;
  }
`;

export default Button;
