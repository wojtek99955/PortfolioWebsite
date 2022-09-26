import styled from "styled-components";
import projectImg from "../../assets/img/latestProject/befit-laptop.png";
import { ImDatabase } from "react-icons/im";
import { FaCalculator } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { device } from "../../assets/device";

export const Container = styled.section`
  background-color: ${({ toggle, theme }) =>
    toggle ? theme.colors.darkMode : theme.colors.white};
  padding: 1rem;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  max-width: 900px;
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
  p {
    line-height: 1.7rem;
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.grey};
    text-align: center;
    margin-top: 2rem;
    padding: 0 1rem;
    @media ${device.tablet} {
      width: 50%;
    }
  }
`;
export const ImageWrapper = styled.div`
  background-image: url(${projectImg});
  background-size: contain;
  width: 12rem;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  animation-name: infinite-box;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 2000ms;
  @media ${device.tablet} {
    width: 20rem;
  }

  @keyframes infinite-box {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(15px);
    }
  }

  height: 30rem;
`;
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 3.5rem;
  padding: 4rem;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
export const DatabaseIcon = styled(ImDatabase)`
  color: ${({ theme }) => theme.colors.basePurple};
  font-size: 3rem;
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  span {
    font-size: 1.2rem;
    color: ${({ toggle, theme }) =>
      toggle ? theme.colors.white : theme.colors.black};
  }
`;
export const CalculatorIcon = styled(FaCalculator)`
  color: ${({ theme }) => theme.colors.basePurple};
  font-size: 3rem;
`;

export const FoodIcon = styled(MdFastfood)`
  color: ${({ theme }) => theme.colors.basePurple};
  font-size: 3rem;
`;

export const ImageBackground = styled.div`
  background-color: #c7c0f1;
  width: 10rem;
  height: 10rem;
  display: block;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  top: 8rem;
  left: 3rem;
  position: absolute;
  @media ${device.tablet} {
    width: 17rem;
    height: 17rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const SectionWrapper = styled.div`
  max-width: 1100px;
  margin: auto;
  padding-top: 4rem;
`;

export const StyledLink = styled.a`
  display: block;
  font-size: 1.4rem;
  border: ${({ theme }) => `2px solid ${theme.colors.basePurple}`};
  border-radius: 8px;
  padding: 0.2rem;
  background-color: ${({ theme, demo }) =>
    demo ? theme.colors.basePurple : "white"};
  color: ${({ demo }) => (demo ? "white" : "black")};
  cursor: pointer;
  width: 9rem;
  min-height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    box-shadow: ${({ demo }) =>
      demo ? "0px 0px 16px 0px rgba(66, 68, 90, 1)" : "none"};
    background-color: ${({ demo }) => (demo ? "#584ac1" : "#C7C0F1")};
  }
`;

export const AppDemo = styled.div``;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
