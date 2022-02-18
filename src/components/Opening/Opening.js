import React, { useEffect, useContext } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import {
    StyledH1, StyledH2, StyledPar, Img, StyledWrapper, StyledContainer, Mouse, Scroll, Section,
    GitHubIcon, LinkedInIcon, MessengerIcon, Socials, MainSection, StyledSendIcon, SendButton,
} from './OpeningStyles';
import { SwitchContext } from '../../App';
import Typewriter from 'typewriter-effect';
import img3 from '../../assets/img/ja3.jpg';

export default function Opening() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const context = useContext(SwitchContext);

    return (
        <Section id="home" toggle={context.toggle}>
            <StyledContainer >
                <StyledWrapper data-aos="fade-up" data-aos-delay="600">
                    <Socials>
                        <a href="https://github.com/wojtek99955" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                        <a href="https://m.me/wojtek.ksiazek.14" target="_blank" rel="noreferrer"><MessengerIcon /></a>
                        <a href="https://www.linkedin.com/in/wojtek-ksi%C4%85%C5%BCek-8732b41a9" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                    </Socials>
                    <Img>
                        <img src={img3} alt="Wojtek" />
                    </Img>
                    <MainSection>
                        <StyledH1 big toggle={context.toggle}><span>Hi,</span> I'm Wojtek</StyledH1>
                        <StyledH2 toggle={context.toggle}>
                            <Typewriter
                                cursorClassName={{ "background-color": "green" }}
                                options={{
                                    delay: 220,
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString("Frontend Developer ")
                                        .start()
                                }}
                            />
                        </StyledH2>
                        <StyledPar toggle={context.toggle}>
                            A passionate frontend developer <br /> from Poland, producing quality work
                        </StyledPar>
                        <SendButton to="contact">
                            Contact Me
                            <StyledSendIcon />
                        </SendButton>
                    </MainSection>
                    <Scroll>
                        <Mouse />
                        <p>Scroll down </p>
                    </Scroll>
                </StyledWrapper>
            </StyledContainer>
        </Section>
    )
}
