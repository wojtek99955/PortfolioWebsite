import React from 'react';
import { useState, useContext } from 'react';
import {SwitchContext} from '../../App';
import {Section, Wrapper, DownIcon, BracesIcon, DesignIcon, PercentageBarWrapper, PercentageBar, DevSkills, Skill, SkillName, SkillTittle, DesignSkills, SkillsContainer} from './SkillsStyle';
import {skills, designSkills} from './skillsData';
import {SectionTittle} from "../Atoms/SectionTittle";


function Skills() {

    const [open, setOpen] = useState(false);

    const handleOpen = (e) =>{
        setOpen(prev => !prev);
    }

    const [designOpen, setDesignOpen] = useState(false);

    const handleDesignOpen = (e) =>{
        setDesignOpen(prev => !prev);
    }

    const context = useContext(SwitchContext);


    return (
        <Section toggle={context.toggle} id="skills">

            <SectionTittle toggle={context.toggle}>
                <h2>My Skills</h2>
                <h3>Still improving</h3>
            </SectionTittle>    
            <Wrapper toggle={context.toggle}>
                <SkillsContainer>
                <DevSkills>
                    <SkillTittle toggle={context.toggle} onClick={handleOpen}>
                        <BracesIcon/>
                        <h2> Development</h2> 
                        <DownIcon open={open}/>
                    </SkillTittle>    
                { skills.map((skills) =>{
                    return(
                        <Skill open={open}>
                            <SkillName toggle={context.toggle}>
                             <h1>{skills.id}</h1>
                             <span>{skills.perc}%</span>
                             </SkillName>
                             <PercentageBarWrapper>
                                <PercentageBar perc={skills.perc}/>
                             </PercentageBarWrapper>
                        </Skill>
                    )})
    } 
      
                </DevSkills>

                <DesignSkills>
                    <SkillTittle toggle={context.toggle} onClick={handleDesignOpen} designOpen={designOpen}>
                        <DesignIcon/>
                        <h2>Design</h2>
                        <DownIcon open={designOpen}/>
                    </SkillTittle>
                    { 
                        designSkills.map((skills) =>{
                        return(
                            <Skill open={designOpen}>
                                <SkillName toggle={context.toggle}>
                                    <h1>{skills.id}</h1>
                                    <span>{skills.perc}%</span>
                                </SkillName>
                                    <PercentageBarWrapper>
                                        <PercentageBar designperc={skills.perc}/>
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
