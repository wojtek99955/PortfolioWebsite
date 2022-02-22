import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { SwitchContext } from '../../App';
import { Section, Wrapper, DownIcon, BracesIcon, DesignIcon, PercentageBarWrapper, PercentageBar, DevSkills, Skill, SkillName, SkillTittle, DesignSkills, SkillsContainer } from './SkillsStyle';
import { skills, designSkills } from './skillsData';
import { SectionTittle } from "../Atoms/SectionTittle";
import Aos from 'aos';
import "aos/dist/aos.css";


function Skills() {

    const [open, setOpen] = useState(false);

    const handleOpen = (e) => {
        setOpen(prev => !prev);
    }

    const [designOpen, setDesignOpen] = useState(false);

    const handleDesignOpen = (e) => {
        setDesignOpen(prev => !prev);
    }

    const context = useContext(SwitchContext);

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])


    return (
        <Section toggle={context.toggle} id="skills">
            <SectionTittle toggle={context.toggle}>
                <div data-aos="fade-down">
                    <h2>My Skills</h2>
                    <h3>Still improving</h3>
                </div>
            </SectionTittle>
            <Wrapper toggle={context.toggle}>
                <SkillsContainer data-aos="fade-up">

                    <DevSkills>
                        <SkillTittle toggle={context.toggle} onClick={handleOpen}>
                            <BracesIcon />
                            <h2> Development</h2>
                            <DownIcon open={open} />
                        </SkillTittle>
                        {skills.map((skills, id) => {
                            return (
                                <Skill key={id} open={open}>
                                    <SkillName toggle={context.toggle}>
                                        <h1>{skills.id}</h1>
                                        <span>{skills.perc}%</span>
                                    </SkillName>
                                    <PercentageBarWrapper>
                                        <PercentageBar perc={skills.perc} />
                                    </PercentageBarWrapper>
                                </Skill>
                            )
                        })
                        }
                    </DevSkills>

                    <DesignSkills>
                        <SkillTittle toggle={context.toggle} onClick={handleDesignOpen} designOpen={designOpen}>
                            <DesignIcon />
                            <h2>Design</h2>
                            <DownIcon open={designOpen} />
                        </SkillTittle>
                        {
                            designSkills.map((skills) => {
                                return (
                                    <Skill key={skills.id} open={designOpen}>
                                        <SkillName toggle={context.toggle}>
                                            <h1>{skills.id}</h1>
                                            <span>{skills.perc}%</span>
                                        </SkillName>
                                        <PercentageBarWrapper>
                                            <PercentageBar designperc={skills.perc} />
                                        </PercentageBarWrapper>
                                    </Skill>
                                )
                            })}
                    </DesignSkills>

                </SkillsContainer>
            </Wrapper>
        </Section>

    )
}

export default Skills
