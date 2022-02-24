import styled from 'styled-components';
import { ChevronUpCircle } from '@styled-icons/boxicons-solid/ChevronUpCircle';
import { useState, useEffect, useContext } from 'react';
import { SwitchContext } from '../../App';
import { animateScroll as scroll } from 'react-scroll';

const ScrollUpIcon = styled(ChevronUpCircle)`
    width: 2.5rem;
    color: ${({ darkmode, theme }) => darkmode ? theme.colors.basePurple : "#1A1525"};
    top:90%;
    right:1rem;
    position:fixed;
    cursor: pointer;
    z-index: 10;
`

function ScrollTopBtn() {

    const ctx = useContext(SwitchContext);

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowBtn(true)
            } else {
                setShowBtn(false);
            }
        })
    }, []);

    const scrollTop = () => {
        scroll.scrollToTop()
    };

    return (
        <>
            {showBtn ? <ScrollUpIcon darkmode={ctx.toggle} onClick={scrollTop} /> : null}
        </>
    )
}

export default ScrollTopBtn