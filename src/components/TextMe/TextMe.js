import {useEffect, useState} from 'react'
import {Container, MessengerIcon, CloseIcon, Content, HandIcon} from './TextMeStyles'

function TextMe() {

    const [showMess, setShowMess] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const handleClose = () => {
        setIsMounted(false);
        if (!showMess) setShowMess(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMess(true);
            setIsMounted(true);
        }, 3000);
        return () => clearTimeout(timer);
    },[]);

    return (
        <>
            {showMess ? (
                <Container isMounted={isMounted}>
                    <CloseIcon onClick={handleClose}/>
                    <Content>
                    <h2>Hi!</h2>
                    <HandIcon/>
                    <a href="https://m.me/wojtek.ksiazek.14" target="_blank" rel="noreferrer"> Text Me! <MessengerIcon /></a>
                    </Content>
                </Container>)
                : null }
        </>
  )
}

export default TextMe