import React, { useContext } from 'react';
import { SwitchContext } from '../../../App';
import SwitchMode from '../../SwitchMode/SwitchMode';
import { Link } from 'react-scroll';
import { Ul } from './NavMobileStyles';

const NavMobile = ({ open, setOpen, close }) => {

  const context = useContext(SwitchContext);


  return (
    <Ul onClick={close} open={open} toggle={context.toggle}>
      <li onClick={close} toggle={context.toggle}><Link onClick={close} to="home" smooth="true" duration={800}>Home</Link></li>
      <li><Link onClick={close} to="about" smooth={true} duration={300} offset={-70}>About</Link></li>
      <li><Link onClick={close} to="skills" smooth={true} duration={800}>Skills</Link></li>
      <li><Link onClick={close} to="projects" smooth={true} duration={800}>Portfolio</Link></li>
      <li><Link onClick={close} to="contact" smooth={true} duration={800}>Contact</Link></li>
      <SwitchMode />
    </Ul>
  )
}

export default NavMobile