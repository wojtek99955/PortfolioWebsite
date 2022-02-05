import styled from "styled-components";
import { device } from '../../assets/device';
import desk from '../../assets/img/desk.jpg';

export const HireSection = styled.section`
    background-color: ${({ theme, toggle }) => toggle ? theme.colors.darkMode : theme.colors.basePurple};
    @media ${device.tablet}{
        background-color: ${({ theme, toggle }) => toggle ? theme.colors.darkMode : theme.colors.white};
    }
`

export const HireWrapper = styled.div`
    max-width: 1300px;
    margin:auto;
`

export const HireContainer = styled.div`
    width:100%;
    margin: auto;
    background: url(${desk});
    background-size: cover;
    background-position: center;
    position:relative;
    z-index: 1;
    @media ${device.tablet}{
        width:85%;
        border-radius: 15px;
    }
    h2{
        padding:2rem;
        color: ${({ theme }) => theme.colors.white};
    }
    p{
        margin-left: 2rem;
        margin-bottom: 1.5rem;
        color: ${({ theme }) => theme.colors.white};
    }
    button{
        margin-left: 2rem;
        margin-bottom: 2rem;
        padding: .8rem 1.6rem;
        color: ${({ toggle, theme }) => toggle ? theme.colors.white : theme.colors.basePurple};
        border: none;
        border-radius: 10px;
        font-size: ${({ theme }) => theme.fontSize.md};
        background-color:${({ theme, toggle }) => toggle ? theme.colors.basePurple : theme.colors.white};
        cursor:pointer;
            &:hover{
                box-shadow: 0px 0px 16px 0px rgba(66, 68, 90, 1);
            }
            &:active{
                background: #8176c4;
            }
        i{
            vertical-align: middle;
            padding-left: 0.5rem;
            font-size: 1.2rem;
        }
    }
`

export const Overlay = styled.div`
    position:absolute;
    background: #705EDC;
    opacity: .65;
    width:100%;
    height:100%;
    z-index: 1;
    border-radius: 15px;
`

export const ContentContainer = styled.div`
    z-index:2;
    position:relative;
    padding: 3rem;
    `