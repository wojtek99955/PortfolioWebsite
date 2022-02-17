import React, { useContext } from 'react';
import { StyledFooter, FooterContainer, LogoContainer, PagesContainer, SocialsContainer, GithubIcon, LinkedInIcon, StyledLink, MessengerIcon } from "./FooterStyles";
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
                    <a href="https://github.com/wojtek99955" target="_blank" rel="noreferrer"><GithubIcon /></a>
                    <a href="https://m.me/wojtek.ksiazek.14" target="_blank" rel="noreferrer"><MessengerIcon /></a>
                    <a href="https://www.linkedin.com/in/wojtek-ksi%C4%85%C5%BCek-8732b41a9" target="_blank" rel="noreferrer"><LinkedInIcon /></a>

                </SocialsContainer>
            </FooterContainer>
        </StyledFooter>
    )
}

export default Footer
