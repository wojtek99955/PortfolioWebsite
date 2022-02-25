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
box-shadow: ${({ scrolled }) => scrolled ? "0px 11px 53px 0px rgba(48, 49, 57, 0.21)" : 0};
position: ${({ scrolled }) => scrolled ? "fixed" : "absolute"};
width:100%;
z-index: 3;
background-color: ${({ toggle, scrolled, theme }) => {
        if (!toggle && scrolled) {
            return "#f6f7fb"
        } else if (toggle && scrolled) {
            return "black"
        }


    }};
`