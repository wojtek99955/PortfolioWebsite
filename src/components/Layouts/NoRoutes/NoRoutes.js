import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

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

const BackButton = styled(Link)`
  color: white;
  background-color: ${({ theme }) => theme.colors.basePurple};
  text-decoration: none;
  display: block;
  padding: 0.8rem 1.5rem;
  margin-top: 2rem;
  border-radius: 10px;
`;

export const NoRoutes = () => {
  return (
    <Container>
      <Wrapper>
        <h2>404</h2>
        <p>Page Not Found</p>
        <BackButton to="/">Back</BackButton>
      </Wrapper>
    </Container>
  );
};

export default NoRoutes;
