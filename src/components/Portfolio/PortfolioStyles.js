import styled from "styled-components";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { device } from "../../assets/device";
import Slider from "react-slick";
import { MdDoneOutline } from "react-icons/md";
import { MdWebAsset } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export const Section = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme, toggle }) =>
    toggle ? theme.colors.darkMode : theme.colors.white};
`;

export const StyledContainer = styled.div`
  max-width: 1100px;
  margin: auto;
`;

export const StyledItem = styled.div`
  height: 180px;
  position: relative;
  background-size: cover;

  @media ${device.mobileM} {
    height: 210px;
  }
  @media ${device.mobileL} {
    height: 230px;
  }
  @media ${device.tablet} {
    height: 220px;
  }

  @media ${device.laptop} {
    height: 240px;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.86);
    width: 100%;
    height: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    transition: 0.4s ease-in-out;
    overflow: hidden;

    p {
      color: white;
    }
  }

  &:hover .overlay {
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledSlider = styled(Slider)`
  width: 85%;
  margin: auto;
  display: flex;
  gap: 20px;
  .slick-prev::before,
  .slick-next::before {
    display: none;
  }

  .slick-arrow.slick-prev,
  .slick-arrow.slick-next {
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-slide > div {
    padding: 0 0.8rem;
  }

  .dotsClass {
    padding: 2rem;
  }

  .slick-dots li button::before {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.basePurple};
  }

  margin-bottom: 8rem;
`;

export const NextIcon = styled(MdOutlineNavigateNext)`
  color: ${({ theme }) => theme.colors.basePurple};
  font-size: 60px;
`;

export const PrevIcon = styled(MdOutlineNavigateBefore)`
  color: ${({ theme }) => theme.colors.basePurple};
  font-size: 60px;
`;
export const StyledButton = styled.button`
  &:last-child {
    background-color: green;
  }
`;

export const DescriptionContainer = styled.div`
  h3 {
    margin-bottom: 1.2rem;
    color: white;
    font-size: 1.3rem;
  }
  h4 {
    color: white;
    margin-bottom: 1rem;
  }
  ul {
    padding-left: 1rem;
    list-style: none;
  }
  li {
    color: white;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;
  }
`;

export const CheckmarkIcon = styled(MdDoneOutline)`
  color: ${({ theme }) => theme.colors.basePurple};
  margin-right: 0.5rem;
  font-size: 1rem;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    padding: 0.6rem 1.2rem;
    background-color: #705edc;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    margin-top: 1rem;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background-color: #584ac1;
    }

    &:nth-child(2) {
      background-color: transparent;
      border: ${({ theme }) => `3px solid ${theme.colors.basePurple}`};
      &:hover {
        background-color: rgba(129, 118, 196, 0.7);
      }
    }
  }
`;
export const DemoIcon = styled(MdWebAsset)`
  font-size: 1.2rem;
  color: white;
`;

export const GithubIcon = styled(FaGithub)`
  font-size: 1rem;
  color: white;
`;
