import React, { useState, useEffect } from "react";
import styled from "styled-components";
import galaxy from "../assets/galaxy.jpg";

const Clock = styled.div`
  background-image: ${(p) => `url(${p.src})`};
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow: hidden;
`;
const Time = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Text = styled.h1`
  color: #111;
  background-color: #00000022;
  font-size: 5rem;
  padding: 2rem;
  border-radius: 12px;
  width: 50%;
  text-align: left;
  padding-left: 10%;
`;
const Seconds = styled.span`
  color: #ffffffaa;
`;

const formatTime = (time) => {
  if (time < 10) return `0${time}`;
  return time;
};

export default ({}) => {
  const [now, setNow] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
      setNow(new Date());
    }, 1000);
  }, [count]);
  const hh = formatTime(now.getHours());
  const mm = formatTime(now.getMinutes());
  const ss = formatTime(now.getSeconds());
  return (
    <Clock src={galaxy}>
      <Time>
        <Text>
          {hh}:{mm}:<Seconds>{ss}</Seconds>
        </Text>
      </Time>
    </Clock>
  );
};
