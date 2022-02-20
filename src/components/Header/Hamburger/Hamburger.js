import React from 'react';
import { useState, useContext } from 'react';
import NavMobile from '../NavMobile/NavMobile';
import { SwitchContext } from '../../../App';
import { StyledHamburger } from './HamburgerStyles';

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
