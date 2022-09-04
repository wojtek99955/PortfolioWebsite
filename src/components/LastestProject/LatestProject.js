import { SectionTittle } from "../Atoms/SectionTittle";
import styled from "styled-components";
import projectImg from "../../assets/img/latestProject/befit.png";
const Container = styled.section`
  max-width: 1100px;
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;

  p {
    line-height: 1.7rem;
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.grey};
    text-align: center;
    margin-top: 2rem;
  }
`;
const ImageContainer = styled.div`
  background-image: url(${projectImg});
  background-size: contain;
  width: 500%;
  background-repeat: no-repeat;
  background-position: center;

  height: 30rem;
`;
const LatestProject = () => {
  return (
    <Container>
      <SectionTittle>
        <h2>Meet BeFit</h2>
        <h3>My latest project</h3>
      </SectionTittle>
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
