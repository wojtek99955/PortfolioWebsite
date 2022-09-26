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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            sed eaque provident temporibus deserunt laudantium cum cumque
            aperiam quaerat quia! Esse officiis fuga blanditiis sunt voluptatem
            ipsum minus odio dignissimos placeat enim, eligendi, architecto
            eius? Molestiae maiores voluptatum eum nulla tempore, ipsam ipsum
            natus illo nesciunt reiciendis. Illum perspiciatis iusto quam enim
            corporis laboriosam perferendis explicabo recusandae ex similique
            esse velit libero ipsa, ullam aliquid accusamus quasi quaerat
            reiciendis molestiae vel. Rem, eligendi cumque officia optio quo
            illo fugit. Voluptatum consectetur, rem recusandae possimus error
            perferendis corrupti odit, voluptatibus molestias explicabo impedit?
            Libero quae sint hic qui amet cum nobis molestias aspernatur, dolor
            perspiciatis dolore, exercitationem saepe repudiandae iusto harum.
            Praesentium, expedita. Voluptate culpa earum nam sit. Quidem
            assumenda obcaecati quia dolore! Minima necessitatibus aperiam ipsa
            harum dignissimos! Delectus dicta quam animi, dolore nulla ducimus
            suscipit labore
          </p>
          <AppDemo>
            <ImageContainer>
              <ImageWrapper />
              <ImageBackground />
            </ImageContainer>
            <LinkContainer>
              <StyledLink demo>Check out</StyledLink>
              <StyledLink>Github</StyledLink>
            </LinkContainer>
          </AppDemo>
        </Wrapper>
      </SectionWrapper>
    </Container>
  );
};

export default LatestProject;
