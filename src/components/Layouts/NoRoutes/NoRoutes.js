import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  h2 {
    font-size: 5rem;
  }
`;

export const NoRoutes = (props) => {
  return (
    <Container>
      <Wrapper>
        <h2>404</h2>
        <div>Page Not Found</div>
      </Wrapper>
    </Container>
  );
};

export default NoRoutes;
