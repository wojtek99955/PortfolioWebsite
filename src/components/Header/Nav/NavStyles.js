import styled from 'styled-components';

export const StyledNav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1300px;
margin:auto;
align-items: center;
padding: 0.6rem 0;
`

export const StyledLogo = styled.div`

display: flex;
align-items: center;
margin-left:1rem;
cursor:pointer;

    img{
        width:3rem;
    }

 `

export const StyledContainer = styled.div`
box-shadow: 0px 11px 53px 0px rgba(48, 49, 57, 0.21);
position: fixed;
width:100%;
z-index: 3;
background-color: ${({ toggle }) => toggle ? "black" : "white"};
`