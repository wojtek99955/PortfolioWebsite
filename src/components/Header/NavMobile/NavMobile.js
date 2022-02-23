import React, { useContext } from 'react';
import { SwitchContext } from '../../../App';
import SwitchMode from '../../SwitchMode/SwitchMode';
import { Ul, StyledLink } from './NavMobileStyles';

const NavMobile = ({ open, close }) => {

  const context = useContext(SwitchContext);


  return (
    <Ul onClick={close} open={open} toggle={context.toggle}>
      <li><StyledLink activeClass="active" onClick={close} spy={true} to="home" smooth="true" duration={800}>Home</StyledLink></li>
      <li><StyledLink activeClass="active" spy={true} onClick={close} to="about" smooth={true} duration={300} toggle={context.toggle} >About</StyledLink></li>
      <li><StyledLink activeClass="active" spy={true} onClick={close} to="skills" smooth={true} duration={800} toggle={context.toggle}>Skills</StyledLink></li>
      <li><StyledLink activeClass="active" spy={true} onClick={close} to="projects" smooth={true} duration={800} toggle={context.toggle}>Portfolio</StyledLink></li>
      <li><StyledLink activeClass="active" spy={true} onClick={close} to="contact" smooth={true} duration={800} toggle={context.toggle}>Contact</StyledLink></li>
      <SwitchMode />
    </Ul>
  )
}

export default NavMobile