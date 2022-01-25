import styled from 'styled-components';
import { device } from '../../assets/device';
import { FaGithub } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { Link } from 'react-scroll';

export const StyledFooter = styled.footer`
    background-color: ${({ theme, toggle }) => toggle ? "#0E0E1C" : theme.colors.basePurple};
    padding: 3rem 0;
`

export const FooterContainer = styled.div`
    margin: 0 1rem;
    

    @media ${device.tablet}{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media ${device.laptop}{
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;

    img{
        width:5rem;
    }
`

export const PagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    a{
        text-decoration  : none;
        color:white;
        margin-bottom: .8rem;
        align-self: flex-start;
        font-size: ${({ theme }) => theme.fontSize.s};

        &:hover{
            color: ${({ toggle, theme }) => toggle ? theme.colors.basePurple : "#0E0E1C"};
        }

    }

        @media ${device.tablet}{
        margin-top: 0;
    }
`

export const SocialsContainer = styled.div`
    display: flex;
    margin-top: 2rem;
    gap: 1rem;

        @media ${device.laptop}{
        margin-top: 0;
        }
`

export const GithubIcon = styled(FaGithub)`
    color: white;    
    cursor: pointer;
`

export const FacebookIcon = styled(GrFacebookOption)`
    color:white;
    cursor: pointer;    
`
export const StyledLink = styled(Link)`
    cursor: pointer;
`