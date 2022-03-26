import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { FacebookMessenger } from '@styled-icons/fa-brands/FacebookMessenger'
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'
import {Hand} from '@styled-icons/entypo/Hand';


const Container = styled.div`
    position: fixed;
    bottom: 5%;
    display: flex;
    flex-direction: column;
    z-index: 10;
    background: white;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 11px 53px 0px rgba(48, 49, 57, 0.61);
    animation: MoveIn 400ms cubic-bezier(.45,2.09,1,1) 0s;
    animation-fill-mode:both;


    @keyframes MoveIn{
        0%{
            opacity: 0;
            left: -6rem;

        }
        100%{
            opacity: 1;
            left: 1.5rem;
        }
    }


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
    width: 1rem;
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
    animation: handShake 300ms linear 600ms;
    animation-direction: alternate ;
    animation-iteration-count: 8;

    @keyframes handShake{
        0%{
            transform: rotate(20deg);
        }
        100%{
            transform: rotate(-20deg);
        }
    }
`
const Content = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
    padding: 2rem 3rem;
`

function TextMe() {

    const [showMess, setShowMess] = useState(false);
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