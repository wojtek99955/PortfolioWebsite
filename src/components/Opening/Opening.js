import React, { useEffect, useContext, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import {
  StyledH1,
  StyledH2,
  StyledPar,
  Img,
  StyledWrapper,
  StyledContainer,
  Mouse,
  Scroll,
  Section,
  GitHubIcon,
  LinkedInIcon,
  MessengerIcon,
  Socials,
  MainSection,
  StyledSendIcon,
  SendButton,
  GitMergeIcon,
  CodeIcon,
  ParallaxContainer,
  ParallaxChild,
  DevBoard,
  WindowDev,
  DevicesIcon,
  DeviceHubIcon,
  Container,
} from "./OpeningStyles";
import { SwitchContext } from "../../App";
import Typewriter from "typewriter-effect";
import img3 from "../../assets/img/main-img-compressed.jpg";

export default function Opening() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const context = useContext(SwitchContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Section id="home" toggle={context.toggle}>
      <Container data-aos="fade-up" data-aos-delay="600">
        <ParallaxContainer>
          <ParallaxChild factorX={0.03} factorY={0.05}>
            <GitMergeIcon />
            <CodeIcon />
            <DevBoard />
            <DeviceHubIcon />
            <WindowDev />
            <DevicesIcon />
          </ParallaxChild>
          <StyledContainer>
            <StyledWrapper>
              <Socials>
                <a
                  href="https://github.com/wojtek99955"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://m.me/wojtek.ksiazek.14"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessengerIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/wojtek-ksi%C4%85%C5%BCek-8732b41a9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </Socials>
              <Img>
                <img src={img3} alt="Wojtek" />
              </Img>
              <MainSection>
                <StyledH1 big toggle={context.toggle}>
                  <span>Hi,</span> I'm Wojtek
                </StyledH1>
                <StyledH2 toggle={context.toggle}>
                  <Typewriter
                    cursorClassName={{ "background-color": "green" }}
                    options={{
                      delay: 220,
                    }}
                    onInit={(typewriter) => {
                      typewriter.typeString("Frontend Developer ").start();
                    }}
                  />
                </StyledH2>
                <StyledPar toggle={context.toggle}>
                  A passionate frontend developer <br /> from Poland, producing
                  quality work
                </StyledPar>
                <SendButton
                  to="contact"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  hovered={isHovered}
                >
                  Contact Me
                  <i>
                    <StyledSendIcon />
                  </i>
                </SendButton>
              </MainSection>
              <Scroll>
                <Mouse />
                <p>Scroll down </p>
              </Scroll>
            </StyledWrapper>
          </StyledContainer>
        </ParallaxContainer>
      </Container>
    </Section>
  );
}
