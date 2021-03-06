import styled from "styled-components";
import { BsMouse } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { device } from "../../assets/device";
import { BiSend } from "react-icons/bi";
import { Link } from "react-scroll";
import { RiMessengerLine } from "react-icons/ri";
import bgr from "../../assets/img/main-bgr.svg";
import { HiOutlineCode } from "react-icons/hi";
import { GitMerge } from "@styled-icons/boxicons-regular/GitMerge";
import { DeveloperBoard } from "@styled-icons/fluentui-system-regular/DeveloperBoard";
import { WindowDevEdit } from "@styled-icons/fluentui-system-filled/WindowDevEdit";
import { Devices } from "@styled-icons/boxicons-solid/Devices";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { DeviceHub } from "@styled-icons/material-outlined/DeviceHub";

export const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 1rem;
  color: black;
  color: ${({ toggle, theme }) => (toggle ? "white" : theme.colors.black)};

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  span {
    color: ${({ theme }) => theme.colors.basePurple};
  }
`;

export const StyledH2 = styled.h2`
  color: ${({ toggle, theme }) => (toggle ? "white" : theme.colors.grey)};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 1rem;

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const StyledPar = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 2rem;

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const Img = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 14rem;
  height: 14rem;
  justify-self: center;
  position: relative;
  position: relative;
  z-index: 1;
  margin: auto;

  &::before {
    content: "";
    width: 12rem;
    height: 12rem;
    background-image: url(${bgr});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
    color: green;
    display: block;

    @media ${device.mobileM} {
      width: 16rem;
      height: 16rem;
    }

    @media ${device.tablet} {
      width: 18rem;
      height: 18rem;
    }
    @media ${device.laptop} {
      height: 21rem;
      width: 21rem;
    }
    @media ${device.laptopL} {
      width: 26rem;
      height: 26rem;
    }
  }

  @media ${device.mobileM} {
    width: 18rem;
    height: 18rem;
  }

  @media ${device.tablet} {
    grid-column: 3/4;
    height: 20rem;
    width: 20rem;
    margin-bottom: 0;
  }
  @media ${device.laptop} {
    height: 23rem;
    width: 23rem;
  }
  @media ${device.laptopL} {
    width: 30rem;
    height: 30rem;
  }

  img {
    width: 100%;
    -webkit-mask-image: url(data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CiAgICAgICAgICAgICAgPHN2ZyBpZD0ic3ctanMtYmxvYi1zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSI+CiAgICAgICAgICAgICAgICAgICAgPGRlZnM+IAogICAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InN3LWdyYWRpZW50IiB4MT0iMCIgeDI9IjEiIHkxPSIxIiB5Mj0iMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBpZD0ic3RvcDEiIHN0b3AtY29sb3I9InJnYmEoMjQ4LCAxMTcsIDU1LCAxKSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3AgaWQ9InN0b3AyIiBzdG9wLWNvbG9yPSJyZ2JhKDI1MSwgMTY4LCAzMSwgMSkiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgICAgICAgICAgICAgIDwvZGVmcz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9InVybCgjc3ctZ3JhZGllbnQpIiBkPSJNMzEuMiwtMjQuMkMzOC41LC0xNS45LDQwLjksLTMsMzcuNyw3LjZDMzQuNSwxOC4yLDI1LjYsMjYuNSwxNS42LDMwLjVDNS43LDM0LjUsLTUuNCwzNC4zLC0xMy42LDI5LjdDLTIxLjgsMjUuMiwtMjcuMiwxNi4zLC0zMC44LDUuNkMtMzQuMywtNS4xLC0zNiwtMTcuNiwtMzAuNiwtMjUuNkMtMjUuMiwtMzMuNSwtMTIuNiwtMzYuOSwtMC4zLC0zNi43QzEyLC0zNi41LDI0LC0zMi42LDMxLjIsLTI0LjJaIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiIHN0cm9rZS13aWR0aD0iMCIgc3R5bGU9InRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7Ij48L3BhdGg+CiAgICAgICAgICAgICAgPC9zdmc+);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: 90%;
    mask-size: 90%;
  }
`;

export const StyledButton = styled.button`
  padding: 0.6rem 1.8rem;
  background-color: #705edc;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  margin-top: 1rem;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSendIcon = styled(BiSend)`
  font-size: 1.3rem;
  color: white;
  margin-left: 0.6rem;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1300px;
  margin: auto;
  position: relative;

  @media ${device.mobileS} {
    padding: 0 1rem;
  }
`;

export const Mouse = styled(BsMouse)`
  color: ${({ theme }) => theme.colors.basePurple};
  font-size: 1.2rem;
`;

export const Scroll = styled.div`
  position: relative;
  top: 1.5rem;
  display: flex;
  align-items: center;
  justify-items: center;
  animation-name: infinite-box;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 1500ms;
  grid-column: 1/2;

  @media ${device.tablet} {
    grid-column: 2/3;
  }

  @keyframes infinite-box {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(20px);
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    color: ${({ theme }) => theme.colors.basePurple};
    white-space: nowrap;

    @media ${device.tablet} {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

export const Section = styled.section`
  background-color: ${({ toggle, theme }) =>
    toggle ? theme.colors.darkMode : "#f6f7fb"};
`;

export const LinkedInIcon = styled(FiLinkedin)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.basePurple};
  cursor: pointer;
`;

export const GitHubIcon = styled(FiGithub)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.basePurple};
  cursor: pointer;
`;
export const MessengerIcon = styled(RiMessengerLine)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.basePurple};
  cursor: pointer;
`;

export const Socials = styled.div`
  align-self: center;
  gap: 0.8rem;
  display: none;

  @media ${device.tablet} {
    display: block;
    display: flex;
    flex-direction: column;
  }
`;

export const MainSection = styled.div`
  grid-column: 1/4;
  position: relative;
  z-index: 2;

  @media ${device.tablet} {
    grid-column: 2/3;
    grid-row: 1/2;
    align-self: center;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 3rem 1fr 1fr;
    width: 100%;
  }
  @media ${device.laptop} {
    grid-template-columns: 5rem 1fr 1fr;
    width: 90%;
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const SendButton = styled(Link)`
  padding: 0.6rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.basePurple};
  border: none;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 10rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    display: block;
    animation-name: ${({ hovered }) => (hovered ? "none" : "pulse")};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
    z-index: -1;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.basePurple};

    @keyframes pulse {
      50% {
        width: 100%;
        height: 100%;
      }
      70% {
        opacity: 1;
      }
      100% {
        width: 120%;
        height: 150%;
        opacity: 0;
      }
    }
  }

  &:hover {
    box-shadow: 0px 0px 16px 0px rgba(66, 68, 90, 1);
    background-color: #584ac1;
  }

  &:active {
    background: #8176c4;
  }
`;

export const Icons = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 5;
`;

export const GitMergeIcon = styled(GitMerge)`
  width: 3rem;
  color: #dfdeee;
  position: absolute;
  left: 5%;
  top: 20vh;
  transform: rotate(50deg);
`;

export const CodeIcon = styled(HiOutlineCode)`
  font-size: 5rem;
  color: #c7c0f1;
  position: absolute;
  left: 45%;
  top: 45vh;
  transform: rotate(15deg);
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const DevBoard = styled(DeveloperBoard)`
  width: 2.5rem;
  color: #c7c0f1;
  position: absolute;
  top: 15vh;
  left: 80%;
  transform: rotate(30deg);

  @media ${device.tablet} {
    top: 25vh;
    left: 80%;
    width: 4rem;
  }
`;
export const WindowDev = styled(WindowDevEdit)`
  width: 3rem;
  color: #dfdeee;
  position: absolute;
  top: 15vh;
  left: 50%;
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const DevicesIcon = styled(Devices)`
  width: 2.5rem;
  color: #dfdeee;
  position: absolute;
  top: 60vh;
  left: 80%;

  @media ${device.tablet} {
    left: 90%;
    width: 3rem;
  }
`;

export const DeviceHubIcon = styled(DeviceHub)`
  width: 2.5rem;
  color: #dfdeee;
  position: absolute;
  left: 55%;
  top: 80vh;

  @media ${device.tablet} {
    top: 70vh;
    width: 3rem;
  }
`;

export const ParallaxContainer = styled(MouseParallaxContainer)`
  max-width: 1300px;
  margin: auto;
`;

export const ParallaxChild = styled(MouseParallaxChild)``;

export const Container = styled.div``;
