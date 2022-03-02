import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button } from ".";
import { formatDate } from "../utils/date";

const Body = () => {

  /* Current Movie/TV-Series Details */
  const [daysUntil, setDaysUntil] = useState(null);
  const [poster, setPoster] = useState(null);
  const [title, setTitle] = useState(null);
  const [overview, setOverview] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  const fetchData = () => {
    fetch(`https://www.whenisthenextmcufilm.com/api?date=${releaseDate}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDaysUntil(data.days_until);
        setPoster(data.poster_url);
        setTitle(data.title);
        setOverview(data.overview);
        setReleaseDate(data.release_date);
        setMediaType(data.type);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <BodyContainer>
      <h2>{title}</h2>
      <h1>
        <span>{daysUntil}</span> DAYS
      </h1>
      <img src={poster} alt={title} />
      <h3>Release Date: {formatDate(releaseDate)} ({mediaType})</h3>
      <p>{overview}</p>
      <Button clickAction={handleClick} />
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #202124;
  color: white;

  p {
    word-break: break-word;
    margin: 0 10px;
    width: 90%;
    font-family: "Poppins";
    text-align: center;
  }

  h1 {
    font-family: "Kanit", sans-serif;
    margin: 0;
    text-align: center;
    line-height: 1;
  }

  h1 span {
    font-size: 75px;
    color: #f04a49;
    line-height: 0.8;
  }

  img {
    height: 300px;
    margin: 10px 0;
  }

  h2 {
    text-align: center;
    font-family: "Poppins";
    font-weight: 100;
    font-size: 20px;
  }

  h3 {
    margin-top: 0;
    font-weight: 200;
    font-size: 18px;
  }
`;

export default Body;
