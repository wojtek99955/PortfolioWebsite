import React, { useContext, useEffect, useState } from "react";
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

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false);
            }
        })
    }, []);

    return (
        <StyledContainer toggle={context.toggle} scrolled={isScrolled} >
            <StyledNav>
                <StyledLogo onClick={scrollHome}>
                    <img src={logo} alt="logo" />
                </StyledLogo>
                <Hamburger />
            </StyledNav>
            <ProgressBar />
        </StyledContainer>


    )
}

export default Nav