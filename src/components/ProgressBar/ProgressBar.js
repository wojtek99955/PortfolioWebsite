import React, {useState, useEffect, useContext} from 'react';
import {SwitchContext} from '../../App';
import {BarWrapper, Bar} from './ProgressBarStyle';

function ProgressBar() {

    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () =>{
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll/height) * 100;

        setScrollTop(scrolled);
    }

    useEffect(()=>{
        window.addEventListener("scroll", onScroll);

        return () => window.addEventListener("scroll", onScroll);
    }, [])

    const context = useContext(SwitchContext);

    return (
        <BarWrapper>
            <Bar toggle={context.toggle} scrollTop={scrollTop}></Bar>
            
        </BarWrapper>
    )
}

export default ProgressBar
