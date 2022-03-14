import React, { useContext, useEffect, useState, useRef } from "react";
import Hamburger from "../Hamburger/Hamburger";
import { SwitchContext } from "../../../App";
import { animateScroll as scroll } from 'react-scroll';
import ProgressBar from "../../ProgressBar/ProgressBar";
import logo from '../../../assets/img/logo.png';
import { StyledNav, StyledContainer, StyledLogo } from './NavStyles';


const Nav = () => {

    const context = useContext(SwitchContext);

    const scrollHome = () => {
        scroll.scrollToTop()
    }

    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > navRef.current.clientHeight) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false);
            }
        })
    }, []);


    return (
        <StyledContainer ref={navRef} toggle={context.toggle} scrolled={isScrolled} >
            <StyledNav>
                <StyledLogo onClick={scrollHome}>
                    <img src={logo} alt="logo" />
                </StyledLogo>
                <Hamburger />
            </StyledNav>
            <ProgressBar navRef={navRef} />
        </StyledContainer>


    )
}

export default Nav