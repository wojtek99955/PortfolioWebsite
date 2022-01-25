import styled from "styled-components";
import { device } from '../../assets/device';

export const HireSection = styled.section`
    background-color: ${({ theme, toggle }) => toggle ? theme.colors.darkMode : theme.colors.basePurple};
    @media ${device.tablet}{
        background-color: ${({ theme, toggle }) => toggle ? theme.colors.darkMode : theme.colors.white};
    }

`

export const HireWrapper = styled.div`
    max-width: 1100px;
    margin:auto;
`

export const HireContainer = styled.div`
    background-color: ${({ theme, toggle }) => toggle ? theme.colors.darkMode : theme.colors.basePurple};
    width:85%;
    border-radius: 15px;
    margin: auto;

    @media ${device.tablet}{
        background-color: ${({ theme, toggle }) => toggle ? "#0E0E1C" : theme.colors.basePurple};
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