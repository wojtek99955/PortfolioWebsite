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
    max-width: 1300px;
    margin:auto;
`

export const AboutContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
width: 80%;
margin:auto;
@media ${device.tablet}{
    grid-template-columns: 1fr 1fr;
}
`
export const Image = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
border-radius: 50%;
width:12rem;
height:12rem;
background-position: center;
position: relative;
margin: auto;
@media ${device.tablet}{
    margin:0;
    align-self:center;
}
@media ${device.laptop}{
    width:16rem;
    height:16rem;
    justify-self: flex-start;
}
&::after{
    content: "";
    width:12rem;
    height:12rem;
    background-color: #c7c0f1;
    border-radius: 50%;
    display: block;
    position:absolute;
    z-index: -2;
    left:40px;
    top:30px;
    @media ${device.laptop}{
        width:16rem;
        height:16rem;
    }
}
`
export const DescriptionContainer = styled.div`
    margin:auto;
    display: flex;
    flex-direction: column;
    gap:3rem; 
    align-items:center;
    width:80%;

    @media ${device.tablet}{
        align-items: flex-start;
    }

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
        @media ${device.tablet}{
            align-self: start;
        }
        i{
            vertical-align: middle;
            padding-left: 0.5rem;
            font-size: 1.2rem;
            color: white;
            animation: ${({ hovered }) => hovered ? "900ms ease-in-out 0s infinite normal none running download" : "none"} ;
            position:relative;

            @keyframes download{

                0%{
                    top: 0;
                    opacity: 1;
                }
                100%{
                    top:0.5rem;
                    opacity: 0;
                }
    }

        }
        a{
            text-decoration: none;
            color: ${({ theme }) => theme.colors.white};
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
padding-top:2rem;
@media ${device.tablet}{
    justify-content:start;
    padding-top:0;
}
`

export const StyledH3 = styled.h3`
        text-decoration: ${({ isSelected }) => isSelected ? "underline" : "none"};
        text-underline-offset: 0.5rem;
        text-decoration-thickness: 0.2rem;
        text-decoration-color: ${({ theme, toggle }) => toggle ? theme.colors.basePurple : theme.colors.basePurple};
        cursor: pointer;
        color: ${({ context }) => context ? "white" : "black"};
`

export const Text = styled.div`
    min-height:8rem;
`