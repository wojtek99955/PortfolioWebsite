import React, { useEffect, useContext } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import {
    StyledH1, StyledH2, StyledPar, Img, StyledWrapper, StyledContainer, Mouse, Scroll, Section,
    GitHubIcon, LinkInIcon, Socials, MainSection, StyledSendIcon, SendButton, ImgWrapper
} from './OpeningStyles';
import { SwitchContext } from '../../App';
import Typewriter from 'typewriter-effect';
import img from '../../assets/img/ja.jpg';
import img2 from '../../assets/img/jablack.jpg'
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
                        <GitHubIcon />
                        <LinkInIcon />
                    </Socials>
                    <Img src={img}>
                        <img src={img3} alt="" srcset="" />
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
                            High Level experience in web development knowledge,
                            producing quality work
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
