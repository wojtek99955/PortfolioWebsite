import styled from 'styled-components';
import { device } from '../../assets/device';
import { FaGithub } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { Link } from 'react-scroll';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';

export const StyledFooter = styled.footer`
    background-color: ${({ theme, toggle }) => toggle ? "#0E0E1C" : theme.colors.basePurple};
    padding: 3rem 0;
`

export const FooterContainer = styled.div`
    padding: 0 1rem;
    max-width: 1300px;
    margin:auto;
    display: flex;
    flex-direction: column;
    align-items: center;


    @media ${device.tablet}{
        align-items: flex-start;
        flex-direction: row;
        justify-content: space-between;
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
    margin: 2rem 0;
    align-items: center; 

    @media ${device.tablet}{
        margin: 0;
    }

    a{
        text-decoration  : none;
        color:white;
        margin-bottom: 1.5rem;
        font-size: ${({ theme }) => theme.fontSize.s};

        &:hover{
            color: ${({ toggle, theme }) => toggle ? theme.colors.basePurple : "#0E0E1C"};
        }

        &:last-of-type{
            margin-bottom: 0;
        }

    }

        @media ${device.tablet}{
        margin-top: 0;
    }
`

export const SocialsContainer = styled.div`
    display: flex;
    gap: 1rem;

        @media ${device.laptop}{
        margin-top: 0;
        }
`

export const GithubIcon = styled(FaGithub)`
    color: white;    
    cursor: pointer;
    font-size:1.2rem;
`

export const FacebookIcon = styled(GrFacebookOption)`
    color:white;
    cursor: pointer;
    font-size:1.2rem;
`

export const MessengerIcon = styled(FaFacebookMessenger)`
    color: white;
    cursor: pointer;
    font-size:1.2rem;
`

export const LinkedInIcon = styled(FiLinkedin)`
    color: white;
    cursor: pointer;
    font-size:1.2rem;
`
export const StyledLink = styled(Link)`
    cursor: pointer;
`