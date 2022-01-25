import React, {useContext} from 'react';
import styled from 'styled-components';
import { SwitchContext } from '../../App';
import SwitchMode from '../SwitchMode/SwitchMode';
import {Link} from 'react-scroll';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  li {
    padding: 0px 0px;
    color:${({toggle}) => toggle? "white" : "black"};

    &:hover{
      color: ${({theme}) => theme.colors.basePurple};
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: ${({toggle}) => toggle? "black" : "white"};
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    justify-content: center; 
    align-items: center; 
    transition: transform 0.3s ease-in;
    height: 100%;
    width:100vw;
    top:0;
    li {
      color: ${({theme, toggle}) => toggle? theme.colors.white : theme.colors.black};
      font-size: ${({theme}) => theme.fontSize.xl};
    }
  }
`;

const NavMobile = ({ open, setOpen, close}) => {

  const context = useContext(SwitchContext);


  return (
    <Ul onClick={close} open={open} toggle={context.toggle}>
      <li onClick={close} toggle={context.toggle}><Link onClick={close} to="home" smooth="true" duration={800}>Home</Link></li>
      <li><Link onClick={close} to="about" smooth={true} duration={300} offset={-70}>About</Link></li>
      <li><Link onCLick={close} to="skills" smooth={true} duration={800}>Skills</Link></li>
      <li><Link onClick={close} to="projects" smooth={true} duration={800}>Portfolio</Link></li>
      <li><Link onClick={close} to="contact" smooth={true} duration={800}>Contact</Link></li>
      <SwitchMode/>  
    </Ul>
  )
}

export default NavMobile