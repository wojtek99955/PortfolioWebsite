import styled from "styled-components";
import { Link } from "react-scroll";
import { device } from "../../../assets/device";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  li {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: ${({ toggle }) => (toggle ? "black" : "white")};
    position: fixed;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-200%)")};
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in;
    height: 100%;
    width: 100vw;
    top: 0;

    li {
      color: ${({ theme, toggle }) =>
        toggle ? theme.colors.white : theme.colors.black};
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ toggle }) => (toggle ? "white" : "black")};
  text-transform: uppercase;
  position: relative;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.basePurple};
  }
  &.active {
    color: ${({ theme }) => theme.colors.basePurple};

    &::before {
      content: "";
      position: absolute;
      width: 0.2rem;
      background-color: ${({ theme }) => theme.colors.basePurple};
      left: 50%;
      top: -100%;
      animation: active 400ms;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      display: none;

      @media ${device.tablet} {
        display: block;
      }
    }
  }

  @keyframes active {
    0% {
      height: 0rem;
    }
    100% {
      height: 1rem;
    }
  }
`;
