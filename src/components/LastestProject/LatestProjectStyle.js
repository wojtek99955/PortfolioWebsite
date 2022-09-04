import styled from "styled-components";
import projectImg from "../../assets/img/latestProject/befit-laptop.png";
import { ImDatabase } from "react-icons/im";
import { FaCalculator } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

export const Container = styled.section`
  background-color: ${({ toggle, theme }) =>
    toggle ? theme.colors.darkMode : theme.colors.white};
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    line-height: 1.7rem;
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.grey};
    text-align: center;
    margin-top: 2rem;
    width: 50%;
  }
`;
export const ImageWrapper = styled.div`
  background-image: url(${projectImg});
  background-size: contain;
  width: 24rem;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  animation-name: infinite-box;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 2000ms;

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
  justify-content: space-around;
  padding-bottom: 4rem;
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
  width: 20rem;
  height: 20rem;
  display: block;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  top: 5rem;
  left: 4rem;
  position: absolute;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const SectionWrapper = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 4rem 0;
`;
