import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Ul = styled.ul`

  list-style: none;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
      flex-direction: column;
      background-color: ${({ toggle }) => toggle ? "black" : "white"};
      position: fixed;
      transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
      justify-content: center; 
      align-items: center; 
      transition: transform 0.3s ease-in;
      height: 100%;
      width:100vw;
      top:0;

        li {
            color: ${({ theme, toggle }) => toggle ? theme.colors.white : theme.colors.black};
            font-size: ${({ theme }) => theme.fontSize.xl};
        }
  }
`;

export const StyledLink = styled(Link)`
  color:${({ toggle }) => toggle ? "white" : "black"};

      &:hover{
        cursor: pointer;
        color: ${({ theme }) => theme.colors.basePurple};
    }
      &.active{
        color: ${({ theme }) => theme.colors.basePurple};
    }

`