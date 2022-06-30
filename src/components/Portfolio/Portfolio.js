import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "../../projects";
import "aos/dist/aos.css";
import { useEffect, useContext } from "react";
import Aos from "aos";
import { SwitchContext } from "../../App";
import {
  Section,
  StyledContainer,
  StyledItem,
  StyledSlider,
  NextIcon,
  PrevIcon,
  DescriptionContainer,
  CheckmarkIcon,
  ButtonsContainer,
  DemoIcon,
  GithubIcon,
} from "./PortfolioStyles";
import { SectionTittle } from "../Atoms/SectionTittle";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <PrevIcon />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <NextIcon />
    </div>
  );
};

export default function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const context = useContext(SwitchContext);

  return (
    <Section id="projects" toggle={context.toggle}>
      <StyledContainer data-aos="fade-down">
        <SectionTittle toggle={context.toggle}>
          <h2>My Projects</h2>
          <h3>Most recent work</h3>
        </SectionTittle>
        <StyledSlider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          {...settings}
        >
          {projects.map((item, id) => {
            return (
              <StyledItem key={id}>
                <img src={item.src} alt="project-preview" />
                <div className="overlay">
                  <DescriptionContainer>
                    <h3>{item.name}</h3>
                    <h4>Technologies</h4>
                    {item.technologies.map((tech, id) => {
                      return (
                        <ul key={id}>
                          <li>
                            <CheckmarkIcon />
                            {tech}
                          </li>
                        </ul>
                      );
                    })}
                  </DescriptionContainer>
                  <ButtonsContainer>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <DemoIcon />
                      Demo
                    </a>
                    <a href={item.githubLink} target="_blank" rel="noreferrer">
                      <GithubIcon />
                      GitHub
                    </a>
                  </ButtonsContainer>
                </div>
              </StyledItem>
            );
          })}
        </StyledSlider>
      </StyledContainer>
    </Section>
  );
}
