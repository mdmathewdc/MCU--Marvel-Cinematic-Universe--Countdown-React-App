import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button } from ".";

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
          setReleaseDate(data.release_date);
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
