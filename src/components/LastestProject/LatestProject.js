import { SectionTittle } from "../Atoms/SectionTittle";
import {
  Container,
  Wrapper,
  ImageWrapper,
  ImageContainer,
  IconWrapper,
  IconsContainer,
  CalculatorIcon,
  DatabaseIcon,
  FoodIcon,
  ImageBackground,
  SectionWrapper,
  StyledLink,
  AppDemo,
  LinkContainer,
} from "./LatestProjectStyle";
import { useEffect, useContext } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SwitchContext } from "../../App";

const LatestProject = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const context = useContext(SwitchContext);

  return (
    <Container toggle={context.toggle}>
      <SectionWrapper>
        <SectionTittle data-aos="fade-down" toggle={context.toggle}>
          <h2>Meet BeFit</h2>
          <h3>My latest project</h3>
        </SectionTittle>
        <IconsContainer data-aos="fade-up">
          <IconWrapper toggle={context.toggle}>
            <DatabaseIcon />
            <span>Realtime database</span>
          </IconWrapper>
          <IconWrapper toggle={context.toggle}>
            <CalculatorIcon />
            <span>Fitness calculators</span>
          </IconWrapper>
          <IconWrapper toggle={context.toggle}>
            <FoodIcon />
            <span>Calorie tracker</span>
          </IconWrapper>
        </IconsContainer>
        <Wrapper data-aos="fade-up">
          <p>
            BeFit is a fitness app that helps people stay in shape. It offers a
            bunch of fitness calculators including bmi, daily calorie intake and
            activity calculators. Users can track their calorie intake and
            amount of nutrients during the day. All the data is stored in a
            firebase database so that the user can see how their intake changes
            throughout the month in the statistics section. Users are able to
            change their name, email and password in the user settings section.
            The firebase storage allows users adding avatar image to their
            profile. In case of password loss users can reset their password via
            email received from the app.
          </p>
          <AppDemo>
            <ImageContainer>
              <ImageWrapper />
              <ImageBackground />
            </ImageContainer>
            <LinkContainer>
              <StyledLink
                demo
                href="https://wojtekk-be-fit.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Try out
              </StyledLink>
              <StyledLink
                href="https://github.com/wojtek99955/Be-Fit"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </StyledLink>
            </LinkContainer>
          </AppDemo>
        </Wrapper>
      </SectionWrapper>
    </Container>
  );
};

export default LatestProject;
