import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { FacebookMessenger } from '@styled-icons/fa-brands/FacebookMessenger'


const Container = styled.div`
    position: fixed;
    top:90%;
    left:1rem;
`

const MessengerIcon = styled(FacebookMessenger)`
    color: blue;
    width: 3rem;
`

function TextMe() {

    const [showMess, setShowMess] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMess(true);
        }, 3000);
        return () => clearTimeout(timer);
    },[]);

    return (
        <>
            {showMess ? (
                <Container>
                    <MessengerIcon/>
                </Container>)
                : null }
        </>
  )
}

export default TextMe