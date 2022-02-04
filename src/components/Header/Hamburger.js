import React from 'react';
import { useState, useContext } from 'react';
import styled from 'styled-components';
import NavMobile from './NavMobile';
import { SwitchContext } from '../../App';

const StyledHamburger = styled.div`

    display: none;
    /* position: fixed; */

    z-index: 3;
      width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  margin-top: 7px;
  /* margin:1rem; */



    @media (max-width: 768px){
    display: block;
     display: flex;
    justify-content: space-around;
    flex-direction: column;
    cursor: pointer;

div{
    
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ toggle }) => toggle ? "white" : "black"};
    margin-bottom:7px;
    transform-origin: 1px;
    transition: all 0.3s linear;

        &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  
}

}
`;

export default function Hamburger({ navBar }) {

  const [open, setOpen] = useState(false)
  const context = useContext(SwitchContext);

  const close = (e) => {
    setOpen(false);
    e.stopPropagation()
  };

  return (
    <>
      <StyledHamburger toggle={context.toggle} open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledHamburger>
      <NavMobile open={open} setOpen={setOpen} close={close} />
    </>

  )
}
