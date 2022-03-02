import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button } from ".";
import { formatDate } from "../utils/date";

const Body = () => {

  /* Current Movie/TV-Series Details */
  const [data, setData] = useState(null);
  const [daysUntil, setDaysUntil] = useState(null);
  const [poster, setPoster] = useState(null);
  const [title, setTitle] = useState(null);
  const [overview, setOverview] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  /* Next Movie/TV-Series Details */
  const [nextDaysUntil, setNextDaysUntil] = useState(null);
  const [nextPoster, setNextPoster] = useState(null);
  const [nextTitle, setNextTitle] = useState(null);
  const [nextOverview, setNextOverview] = useState(null);
  const [nextReleaseDate, setNextReleaseDate] = useState(null);
  const [nextMediaType, setNextMediaType] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://www.whenisthenextmcufilm.com/api?date=2022-05-03")
        .then((response) => {
          return response.json();
        })
        .then((data) => {

          // Current details
          setData(JSON.stringify(data));
          setDaysUntil(data.days_until);
          setPoster(data.poster_url);
          setTitle(data.title);
          setOverview(data.overview);
          setReleaseDate(formatDate(data.release_date));
          setMediaType(data.type);

          // Next details
          setNextDaysUntil(data.following_production.days_until);
          setNextPoster(data.following_production.poster_url);
          setNextTitle(data.following_production.title);
          setNextOverview(data.following_production.overview);
          setNextReleaseDate(data.following_production.release_date);
          setNextMediaType(data.following_production.type);

        });
    };
    fetchData();
  }, []);

  return (
    <BodyContainer>
      <h2>{title}</h2>
      <h1><span>{daysUntil}</span> DAYS</h1>
      <img src={poster} alt={title} />
      <h3>Release Date: {releaseDate}</h3>
      <p>{overview}</p>


      {/* <p>{data}</p> */}
      <Button />
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
  }

  h1 {
    font-family: 'Kanit', sans-serif;
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
    font-family: 'Poppins';
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
