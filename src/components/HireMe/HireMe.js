import React from 'react';
import { BiSend } from 'react-icons/bi';
import "aos/dist/aos.css";
import { useEffect, useContext } from 'react';
import Aos from 'aos';
import { SwitchContext } from '../../App';
import { HireContainer, HireWrapper, HireSection, Overlay, ContentContainer } from './HireMeStyle';
import { Link } from 'react-scroll';



function HireMe() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const context = useContext(SwitchContext);

    return (
        <HireSection toggle={context.toggle}>
            <HireWrapper data-aos="fade-right">
                <HireContainer toggle={context.toggle}>
                    <Overlay />
                    <ContentContainer>
                        <h2>Hire Me!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing<br /> elit. Perspiciatis, natus ea est rerum praesentium totam.</p>
                        <Link to="contact"><button>Contact Me<i><BiSend /></i></button></Link>
                    </ContentContainer>
                </HireContainer>
            </HireWrapper>
        </HireSection>
    )
}

export default HireMe