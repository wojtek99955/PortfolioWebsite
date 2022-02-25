import { useState, useEffect, useContext } from 'react';
import { ScrollUpContainer, ScrollUpIcon } from './ScrollTopBtnStyle';
import { SwitchContext } from '../../App';
import { animateScroll as scroll } from 'react-scroll';

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
            {showBtn ? (
                <ScrollUpContainer>
                    <ScrollUpIcon
                        darkmode={ctx.toggle}
                        onClick={scrollTop}
                    />
                </ScrollUpContainer>)
                : null}
        </>
    )
}

export default ScrollTopBtn