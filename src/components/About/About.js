import React, {useEffect, useContext} from 'react';
import {FiDownload} from 'react-icons/fi';
import Aos from 'aos';
import "aos/dist/aos.css";
import { SwitchContext } from '../../App';
import { StyledButton } from '../Opening/OpeningStyles';
import { StyledSection, Container, AboutContainer, Image, DescriptionContainer, StyledSectionTittle, Button} from './AboutStyle';



export default function About() {

    useEffect(()=>{
        Aos.init({duration:1000})
    }, [])

    const context = useContext(SwitchContext);
    return (
        <StyledSection id="about" toggle={context.toggle}>
            <Container>
            <StyledSectionTittle data-aos="fade-right">
                <h2>About Me</h2>
                <h3>My introduction</h3>
            </StyledSectionTittle>

            <AboutContainer data-aos="fade-right">
                <Image/>
                <DescriptionContainer toggle={context.toggle}>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, saepe reiciendis et consequatur sapiente possimus itaque, aspernatur, molestiae magnam totam eaque. Quisquam, deleniti.</p>
                    <StyledButton>Download CV<i><FiDownload/></i></StyledButton>
                </DescriptionContainer>


            </AboutContainer> 
            </Container>

        </StyledSection>
    )
}
