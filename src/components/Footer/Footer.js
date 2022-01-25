import React, { useContext } from 'react';
import { StyledFooter, FooterContainer, LogoContainer, PagesContainer, SocialsContainer, GithubIcon, FacebookIcon, StyledLink } from "./FooterStyles";
import { SwitchContext } from "../../App";
import { animateScroll as scroll } from 'react-scroll';
import logo2 from '../../assets/img/logowhite.png';

function Footer() {

    const context = useContext(SwitchContext);

    const scrollHome = () => {
        scroll.scrollToTop()
    };

    return (
        <StyledFooter toggle={context.toggle}>
            <FooterContainer>
                <LogoContainer onClick={scrollHome}>
                    <img src={logo2} alt="logo" />
                </LogoContainer>
                <PagesContainer toggle={context.toggle}>
                    <StyledLink to="home">Home</StyledLink>
                    <StyledLink to="about" offset={-70}>About</StyledLink>
                    <StyledLink to="skills">Skills</StyledLink>
                    <StyledLink to="projects">Portfolio</StyledLink>
                    <StyledLink to="contact">Contact Me</StyledLink>
                </PagesContainer>
                <SocialsContainer>
                    <GithubIcon />
                    <FacebookIcon />
                </SocialsContainer>
            </FooterContainer>
        </StyledFooter>
    )
}

export default Footer
