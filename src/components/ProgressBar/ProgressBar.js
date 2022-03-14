import React, { useState, useEffect, useContext } from 'react';
import { SwitchContext } from '../../App';
import { BarWrapper, Bar } from './ProgressBarStyle';

function ProgressBar({ navRef }) {

    const [scrollTop, setScrollTop] = useState(0);
    const [showBar, setShowBar] = useState(false);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    }



    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > navRef.current.clientHeight) {
                setShowBar(true)
            } else {
                setShowBar(false);
            }
        })


        return () => window.addEventListener("scroll", onScroll);
    }, [navRef])

    const context = useContext(SwitchContext);

    return (

        <BarWrapper>
            {showBar ? <Bar toggle={context.toggle} scrollTop={scrollTop}></Bar> : null}
        </BarWrapper>
    )
}

export default ProgressBar
