import React, { useEffect, useState, useContext } from 'react';
import { FiDownload } from 'react-icons/fi';
import Aos from 'aos';
import "aos/dist/aos.css";
import { SwitchContext } from '../../App';
import { StyledButton } from '../Opening/OpeningStyles';
import { StyledSection, Container, AboutContainer, Image, DescriptionContainer, StyledSectionTittle, LinksContainer, StyledH3 } from './AboutStyle';
import { data } from './data';

export default function About() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    const [Tab, setTab] = useState(data[0]);

    const handleChangeTab = (name) => {
        let tab = data.filter((t) => t.name === name)[0];
        setTab(tab);
    }

    const [selectedTab, setSelectedTab] = useState(0);

    const [isHovered, setIsHovered] = useState(false);
    console.log(isHovered);


    const context = useContext(SwitchContext);

    return (
        <StyledSection id="about" toggle={context.toggle}>
            <Container>
                <StyledSectionTittle toggle={context.toggle}>
                    <div data-aos="fade-down">
                        <h2>About Me</h2>
                        <h3>My introduction</h3>
                    </div>
                </StyledSectionTittle>
                <AboutContainer data-aos="fade-right">

                    <Image />

                    <DescriptionContainer hovered={isHovered} toggle={context.toggle}>
                        <LinksContainer >
                            {data.map(({ name }, index) => {
                                return (
                                    <StyledH3
                                        context={context.toggle}
                                        isSelected={selectedTab === index}
                                        key={index}
                                        onClick={() => {
                                            handleChangeTab(name);
                                            setSelectedTab(index)
                                        }}>{name}
                                    </StyledH3>
                                )
                            })}
                        </LinksContainer>
                        <p>{Tab.text}</p>
                        <a href="/CV.pdf" download="/CV.pdf" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <StyledButton> Download CV<i ><FiDownload /></i></StyledButton>
                        </a>
                    </DescriptionContainer>
                </AboutContainer>
            </Container>
        </StyledSection >
    )
}
