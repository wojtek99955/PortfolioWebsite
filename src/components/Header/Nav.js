import React, { useContext } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import { SwitchContext } from "../../App";
import { animateScroll as scroll } from 'react-scroll';
import ProgressBar from "../ProgressBar/ProgressBar";
import logo from '../../assets/img/logo.png';


const StyledNav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1300px;
margin:auto;
align-items: center;
padding: 0.6rem 0; // zobacz tu 

`

const StyledLogo = styled.div`

display: flex;
align-items: center;
margin-left:1rem;
cursor:pointer;

    img{
        width:3rem;
    }

 `

const StyledContainer = styled.div`
box-shadow: 0px 11px 53px 0px rgba(48, 49, 57, 0.21);
position: fixed;
width:100%;
z-index: 3;
background-color: ${({ toggle }) => toggle ? "black" : "white"};
`


const Nav = () => {

    const context = useContext(SwitchContext);

    const scrollHome = () => {
        scroll.scrollToTop()
    }

    return (
        <StyledContainer toggle={context.toggle} >
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