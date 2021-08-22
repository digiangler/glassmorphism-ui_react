import React from "react";

import styled from "styled-components";

import { ImTwitch, ImBook } from "react-icons/im";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaSteam } from "react-icons/fa";

import AvatarImage from "../assets/avatarImage.png";
import Controller from "../assets/controller.png";

import Link from "./Link";

function Sidebar() {
  const defaultStyle = { fill: "url(#gradient)" };
  return (
    <SidebarContainer>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Digi-Angler</Name>
        <Title>Full Stack Web Developer | Freelancer</Title>
      </ProfileContainer>
      <LinksContainer>
        <Link title="Streams">
          <ImTwitch style={defaultStyle} />
        </Link>
        <Link title="Games">
          <FaSteam style={defaultStyle} />
        </Link>
        <Link title="Upcoming">
          <IoLogoGameControllerB style={defaultStyle} />
        </Link>
        <Link title="Library">
          <ImBook style={defaultStyle} />
        </Link>
      </LinksContainer>
      <ProBox>
        <ProText>Join pro for free games.</ProText>
        <Image src={Controller} />
      </ProBox>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 30%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(14px);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 25%;
  padding: 3rem 0 1rem 0;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 5rem;
`;

const Name = styled.h1`
  color: #a53b11;
  margin: 1rem 0 0.2rem 0;
`;

const Title = styled.h2`
  color: #a53b11;
  font-size: 1rem;
`;

const LinksContainer = styled.div`
  padding-left: 5rem;
  margin: 2rem 0;
`;

const ProBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  padding: 1rem;
  background: linear-gradient(to right, #ff6a00, #ee0979);
`;

const ProText = styled.span`
  color: #e7e7e7;
  font-weight: bolder;
`;

const Image = styled.img`
  height: 4rem;
  transform: rotate(-60deg);
`;

export default Sidebar;
