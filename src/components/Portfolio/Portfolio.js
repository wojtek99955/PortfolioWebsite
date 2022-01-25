import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledButton } from '../Opening/OpeningStyles';
import images from '../../images';
import "aos/dist/aos.css";
import { useEffect, useContext } from 'react';
import Aos from 'aos';
import { SwitchContext } from '../../App';
import { Section, StyledContainer, StyledItem, StyledSlider, NextIcon, PrevIcon } from './PortfolioStyles';
import { SectionTittle } from "../Atoms/SectionTittle";





const PreviousBtn = (props) => {
  console.log(props);
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
    Aos.init({ duration: 1000, once: true, })
  }, [])

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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const context = useContext(SwitchContext);


  return (
    <Section id="projects" toggle={context.toggle}>
      <StyledContainer data-aos="fade-down">
        <SectionTittle toggle={context.toggle} >
          <h2>My Projects</h2>
          <h3>Most recent work</h3>
        </SectionTittle>
        <StyledSlider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} {...settings}>
          {images.map((item, id) => {
            return <StyledItem>
              <img src={item.src} alt="project-preview" />
              {item.description}
              <div className="overlay">
                <p>{item.description}</p>
                <p>{item.id}</p>
                <StyledButton>Demo</StyledButton>
              </div>
            </StyledItem>
          })}
        </StyledSlider>
      </StyledContainer>
    </Section>
  )
}


