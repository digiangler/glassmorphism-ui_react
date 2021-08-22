import React from "react";

import styled from "styled-components";

import { FiSearch } from "react-icons/fi";

import Apex from "../assets/apex_legends.jpg";
import Callofduty from "../assets/call_of_duty_warzone.jpg";
import Deadbydaylight from "../assets/dead_by_daylight.jpg";
import Fortnite from "../assets/fortnite.jpg";
import Valorant from "../assets/valorant.jpg";

import Game from "./ Game";

function MainContent() {
  return (
    <MainContentContainer>
      <MainTitle>Active Games</MainTitle>
      <InputContainer>
        <Input type="text" placeholder="search" />
        <FiSearch />
      </InputContainer>
      <GamesContainer>
        <Game
          image={Apex}
          title="Apex Legends"
          platform="PS5 Version"
          percent="70"
        />
        <Game
          image={Valorant}
          title="VALORANT"
          platform="PS5 Version"
          percent="48"
        />
        <Game
          image={Callofduty}
          title="Call of Duty: Warzone"
          platform="PS5 Version"
          percent="65"
        />
        <Game
          image={Fortnite}
          title="Fortnite"
          platform="PS5 Version"
          percent="80"
        />
        <Game
          image={Deadbydaylight}
          title="Dead by Daylight"
          platform="PS5 Version"
          percent="20"
        />
      </GamesContainer>
    </MainContentContainer>
  );
}
const MainContentContainer = styled.div`
  margin: 5rem 5rem 0 5rem;
  color: #aa0537;
`;

const MainTitle = styled.h1``;

const InputContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    right: 10rem;
    top: 1.5rem;
  }
`;

const Input = styled.input`
  border-radius: 2rem;
  border: none;
  width: 15rem;
  padding: 0.6rem 1rem;
  margin: 1rem 0 0 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  font-size: 0.9rem;
  color: #bd063d;
  &::placeholder {
    color: #bd063d;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;

const GamesContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default MainContent;
