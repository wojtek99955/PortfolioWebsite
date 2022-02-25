import React, { useState, useEffect, useContext } from 'react';
import { SwitchContext } from '../../App';
import { BarWrapper, Bar } from './ProgressBarStyle';

function ProgressBar() {

    const [scrollTop, setScrollTop] = useState(0);
    const [showBar, setShowBar] = useState(false);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    }

    const showProgress = () => {
        if (window.pageYOffset > 400) {
            setShowBar(true);
        } else {
            setShowBar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        window.addEventListener("scroll", showProgress)


        return () => window.addEventListener("scroll", onScroll);
    }, [])

    const context = useContext(SwitchContext);

    return (

        <BarWrapper>
            {showBar ? <Bar toggle={context.toggle} scrollTop={scrollTop}></Bar> : null}
        </BarWrapper>
    )
}

export default ProgressBar
