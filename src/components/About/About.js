import React, { useEffect, useContext } from 'react';
import { FiDownload } from 'react-icons/fi';
import Aos from 'aos';
import "aos/dist/aos.css";
import { SwitchContext } from '../../App';
import { StyledButton } from '../Opening/OpeningStyles';
import { StyledSection, Container, AboutContainer, Image, DescriptionContainer, StyledSectionTittle, Button, LinksContainer, StyledNavLink } from './AboutStyle';
import { Routes, Route } from "react-router-dom";
import Life from './Routes/Life';
import Education from './Routes/Education';

export default function About() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const context = useContext(SwitchContext);
    return (
        <StyledSection id="about" toggle={context.toggle}>
            <Container>
                <StyledSectionTittle toggle={context.toggle} data-aos="fade-right">
                    <h2>About Me</h2>
                    <h3>My introduction</h3>
                </StyledSectionTittle>
                <AboutContainer data-aos="fade-right">
                    <Image />
                    <DescriptionContainer toggle={context.toggle}>
                        <LinksContainer >
                            <StyledNavLink toggle={context.toggle} to="/about/life"> Life</StyledNavLink>
                            <StyledNavLink toggle={context.toggle} to="/about/education"> Education </StyledNavLink>
                        </LinksContainer>
                        <Routes>
                            <Route path="/about/life" element={<Life />} />
                            <Route path="/about/education" element={<Education />} />
                        </Routes>
                        <StyledButton>Download CV<i><FiDownload /></i></StyledButton>
                    </DescriptionContainer>
                </AboutContainer>
            </Container>
        </StyledSection>
    )
}
