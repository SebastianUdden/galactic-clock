import React, { useState, useEffect } from "react";
import styled from "styled-components";
import galaxy from "../assets/galaxy.jpg";

const Wrapper = styled.div`
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
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #000000bb;
  padding: 1rem 4rem;
`;
const Text = styled.h1`
  color: #111;
  font-family: monospace;
  font-size: calc(2px + 12vmin);
  white-space: nowrap;
`;
const Seconds = styled.span`
  color: #ffffffdd;
`;

const formatTime = (time) => {
  if (time < 10) return `0${time}`;
  return time;
};

const Clock = () => {
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
    <Wrapper src={galaxy}>
      <Time>
        <Center>
          <Text>
            <Seconds>
              {hh}:{mm}:{ss}
            </Seconds>
          </Text>
        </Center>
      </Time>
    </Wrapper>
  );
};

export default Clock;
