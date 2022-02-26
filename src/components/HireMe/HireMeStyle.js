import styled from "styled-components";
import desk from '../../assets/img/desk.jpg';
import { Link } from 'react-scroll';

export const HireSection = styled.section`
    background: url(${desk});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;

`



export const HireContainer = styled.div`
    max-width: 1300px;
    margin: auto;
    padding: 3rem 0;
    h2{
        padding:2rem 0;
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-weight: 400;

    }
    p{

        margin-bottom: 2.5rem;
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
    }

    button{
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
`


export const ContentContainer = styled.div`
    z-index:2;
    position:relative;
    padding: 3rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    `

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
`