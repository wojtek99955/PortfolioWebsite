import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  h2 {
    font-size: 8rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.basePurple};
  }
  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.grey};
    font-size: 2rem;
    padding: 1rem;
  }
`;

export const NoRoutes = (props) => {
  return (
    <Container>
      <Wrapper>
        <h2>404</h2>
        <p>Page Not Found</p>
      </Wrapper>
    </Container>
  );
};

export default NoRoutes;
