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
    console.log("selected" + selectedTab);

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
                            {data.map(({ name }, index) => {
                                return (
                                    <StyledH3
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
                        <StyledButton>Download CV<i><FiDownload /></i></StyledButton>
                    </DescriptionContainer>
                </AboutContainer>
            </Container>
        </StyledSection >
    )
}
