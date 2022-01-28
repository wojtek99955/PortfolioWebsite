import styled from 'styled-components';
import { SectionTittle } from '../Atoms/SectionTittle';
import { device } from '../../assets/device';
import img from '../../assets/img/ja.jpg';

export const StyledSection = styled.section`
background-color: ${({ toggle, theme }) => toggle ? theme.colors.darkMode : theme.colors.white};
padding-bottom:4rem ;
scroll-behavior: smooth;

`

export const Container = styled.div`
    max-width: 1100px;
    margin:auto;
`

export const AboutContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 90%;
margin:auto;
align-items: center;

@media (max-width: 720px){
    grid-template-columns: 1fr;
}

`
export const Image = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
border-radius: 10px;
width:270px;
height:220px;
margin:auto;
background-position: center;

`
export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:3rem; 

    p{
        line-height: 1.5rem;
        font-size: ${({ theme }) => theme.fontSize.s};
        color: ${({ theme }) => theme.colors.grey};
        text-align: center;
        margin-top: 2rem;

        @media ${device.tablet}{
            text-align: start;
        }
    }
    button{
        align-self:center;
        background-color: ${({ theme, toggle }) => toggle ? theme.colors.basePurple : theme.colors.basePurple};
        color: ${({ theme }) => theme.colors.white};

        @media ${device.tablet}{
            align-self: start;
        }

        i{
            vertical-align: middle;
            padding-left: 0.5rem;
            font-size: 1.2rem;
        }
    }

`

export const StyledSectionTittle = styled(SectionTittle)`
    h2{
        color: ${({ theme, toggle }) => toggle ? "white" : "black"};
    }
    h3{
        color: ${({ theme }) => theme.colors.grey};
    }
`

export const LinksContainer = styled.div`
display:flex;
gap:1rem;
justify-content:center;
margin-top:2rem;

@media ${device.tablet}{
    justify-content:start;
}
`

export const StyledH3 = styled.h3`
        text-decoration: ${({ isSelected }) => isSelected ? "underline" : "none"};
        text-underline-offset: 0.5rem;
        text-decoration-thickness: 0.2rem;
        text-decoration-color: ${({ theme, toggle }) => toggle ? theme.colors.basePurple : theme.colors.basePurple};
        cursor: pointer;
`