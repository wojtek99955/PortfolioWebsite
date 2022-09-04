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
} from "./LatestProjectStyle";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const LatestProject = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Container>
      <SectionTittle data-aos="fade-down">
        <h2>Meet BeFit</h2>
        <h3>My latest project</h3>
      </SectionTittle>
      <IconsContainer data-aos="fade-up">
        <IconWrapper>
          <DatabaseIcon />
          <span>Realtime database</span>
        </IconWrapper>
        <IconWrapper>
          <CalculatorIcon />
          <span>Fitness calculators</span>
        </IconWrapper>
        <IconWrapper>
          <FoodIcon />
          <span>Calorie tracker</span>
        </IconWrapper>
      </IconsContainer>
      <Wrapper data-aos="fade-up">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          sed eaque provident temporibus deserunt laudantium cum cumque aperiam
          quaerat quia! Esse officiis fuga blanditiis sunt voluptatem ipsum
          minus odio dignissimos placeat enim, eligendi, architecto eius?
          Molestiae maiores voluptatum eum nulla tempore, ipsam ipsum natus illo
          nesciunt reiciendis. Illum perspiciatis iusto quam enim corporis
          laboriosam perferendis explicabo recusandae ex similique esse velit
          libero ipsa, ullam aliquid accusamus quasi quaerat reiciendis
          molestiae vel. Rem, eligendi cumque officia optio quo illo fugit.
          Voluptatum consectetur, rem recusandae possimus error perferendis
          corrupti odit, voluptatibus molestias explicabo impedit? Libero quae
          sint hic qui amet cum nobis molestias aspernatur, dolor perspiciatis
          dolore, exercitationem saepe repudiandae iusto harum. Praesentium,
          expedita. Voluptate culpa earum nam sit. Quidem assumenda obcaecati
          quia dolore! Minima necessitatibus aperiam ipsa harum dignissimos!
          Delectus dicta quam animi, dolore nulla ducimus suscipit labore
        </p>
        <ImageContainer>
          <ImageWrapper />
          <ImageBackground />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default LatestProject;
