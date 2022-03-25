import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { FacebookMessenger } from '@styled-icons/fa-brands/FacebookMessenger'
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'
import {Hand} from '@styled-icons/entypo/Hand';


const Container = styled.div`
    position: fixed;
    top:70%;
    left:1rem;
    display: flex;
    flex-direction: column;
    width:300px;
    height:220px;
    z-index: 10;
    background: white;
    align-items: center;
    gap: 0.5rem;
    border-radius: 5px;
    box-shadow: 0px 11px 53px 0px rgba(48, 49, 57, 0.31);


    h2{
        text-align: center ;
    }

    a{
        display: block;
        background-color: ${({theme}) => theme.colors.basePurple};
        padding: 0.5rem 1.2rem;
        text-decoration: none;
        color: white;
        border-radius: 5px ;
    }
`

const MessengerIcon = styled(FacebookMessenger)`
    color: white;
    width: 1.2rem;
    margin-left:0.5rem;
`

const CloseIcon = styled(CloseOutline)`
    cursor: pointer;
    width:1.5rem;
    align-self: flex-end ;
    color: ${({theme}) => theme.colors.grey};
`
const HandIcon = styled(Hand)`
    width:4rem;
    color: orange;
`

function TextMe() {

    const [showMess, setShowMess] = useState(true);
    const handleClose = () => setShowMess(false);

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
                    <CloseIcon onClick={handleClose}/>
                    <h2>Hi!</h2>
                    <HandIcon/>
                    <a href="https://m.me/wojtek.ksiazek.14" target="_blank" rel="noreferrer"> Text Me! <MessengerIcon /></a>
                </Container>)
                : null }
        </>
  )
}

export default TextMe