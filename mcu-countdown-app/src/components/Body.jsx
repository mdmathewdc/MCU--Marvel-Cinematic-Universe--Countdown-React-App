import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button } from ".";

const Body = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://www.whenisthenextmcufilm.com/api?date=2022-05-03")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(JSON.stringify(data));
        });
    };
    fetchData();
  }, []);

  return (
    <BodyContainer>
      <p>{data}</p>
      <Button />
    </BodyContainer>
  );
};

const BodyContainer = styled.div`
  background-color: #202124;
  height: 100vh;
  color: white;
`;

export default Body;
