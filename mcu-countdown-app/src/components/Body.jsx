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
        console.log(data);
        setDaysUntil(data.days_until);
        setPoster(data.poster_url);
        setTitle(data.title);
        setOverview(data.overview);
        setReleaseDate(data.release_date);
        setMediaType(data.type);
        if (Object.keys(data.following_production).length === 0) {
          setReleaseDate(null);
        }
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
      <div className="poster">
        <img src={poster} alt={title} />
      </div>
      <div className="info">
        <h2>{title}</h2>
        <div className="day">
          <h1>{daysUntil}</h1> <p>DAYS</p>
        </div>
        <h3>Releasing on: {formatDate(releaseDate)}</h3>
        <span className="release-type">{mediaType}</span>
        <p>{overview}</p>
        <Button clickAction={handleClick} />
      </div>
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  display: flex;
  min-height: calc(100vh - 72px);
  justify-content: center;
  align-items: center;
  background-color: #000103;
  color: #eee;

  p {
    word-break: break-word;
    font-family: "Poppins";
  }

  .day h1 {
    font-family: "Kanit", sans-serif;
    font-size: 8rem;
    color: #f04a49;
    font-weight: 900;
    line-height: 0.8;
  }
  .day p {
    font-size: 3rem;
    font-family: "Kanit", sans-serif;
    margin-bottom: 0.5rem;
  }

  img {
    width: 300px;
    max-width: 100%;
    border-radius: 1rem;
    box-shadow: 0px 3px 16px rgb(1, 1, 1, 0.5);
  }

  h2 {
    font-family: "Poppins";
    font-weight: 100;
    font-size: 20px;
  }

  h3 {
    font-weight: 200;
    font-size: 18px;
  }
  .poster {
    max-width: calc(100% / 12 * 4);
    margin: 0 3rem;
  }
  .info {
    max-width: calc(100% / 12 * 4);
    text-align: left;
  }
  .release-type {
    margin: 0.5rem 0;
    display: inline-block;
    padding: 4px;
    border: 1px solid white;
    border-radius: 4px;
  }
  @media only screen and (max-width: 567px) {
    flex-direction: column;
    .poster,
    .info {
      max-width: 90%;
    }
    .poster {
      margin: 3rem 0;
    }
    .info {
      text-align: center;
    }
  }
`;

export default Body;
