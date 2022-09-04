import { SectionTittle } from "../Atoms/SectionTittle";
import styled from "styled-components";
import projectImg from "../../assets/img/latestProject/befit-laptop.png";
import { ImDatabase } from "react-icons/im";
import { FaCalculator } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
const Container = styled.section`
  max-width: 1100px;
  margin: auto;
`;
const Wrapper = styled.div`
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
const ImageContainer = styled.div`
  background-image: url(${projectImg});
  background-size: contain;
  width: 24rem;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  height: 30rem;
  &::before {
    content: "";
    background-color: #c7c0f1;
    width: 20rem;
    height: 20rem;
    display: block;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    top: 5rem;
    left: 4rem;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4rem 0;
`;
const DatabaseIcon = styled(ImDatabase)`
  color: ${({ theme }) => theme.colors.basePurple};
  font-size: 3rem;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  span {
    font-size: 1.2rem;
  }
`;
const CalculatorIcon = styled(FaCalculator)`
  color: ${({ theme }) => theme.colors.basePurple};
  font-size: 3rem;
`;

const FoodIcon = styled(MdFastfood)`
  color: ${({ theme }) => theme.colors.basePurple};
  font-size: 3rem;
`;
const LatestProject = () => {
  return (
    <Container>
      <SectionTittle>
        <h2>Meet BeFit</h2>
        <h3>My latest project</h3>
      </SectionTittle>
      <IconsContainer>
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
      <Wrapper>
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
        <ImageContainer />
      </Wrapper>
    </Container>
  );
};

export default LatestProject;
