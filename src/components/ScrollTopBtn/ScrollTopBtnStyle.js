import styled from 'styled-components';
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';

export const ScrollUpIcon = styled(ArrowIosUpwardOutline)`
    width: 2.5rem;
    color: white;
    position: relative;
`

export const ScrollUpContainer = styled.div`
    width:2.8rem;
    height:2.8rem;
    border-radius: 50%;
    background-color: #4836B4;
    bottom: 5%;
    right:1rem;
    position:fixed;
    cursor: pointer;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    transition: background-color 300ms;
    overflow:hidden;

    &:hover{
        background-color: ${({ theme }) => theme.colors.basePurple};
        animation: scaleAnimation 500ms;

        @keyframes scaleAnimation{
            from{
                transform: scale(1);
            }
            to{
                transform: scale(1.02) ;
            }
        }
    }
    &:hover ${ScrollUpIcon}{
        animation: arrowAnimationUp 500ms;
        animation-timing-function: ease ;

        @keyframes arrowAnimationUp{
        0%{
            transform: translateY(0);
        }
        50%{
            transform: translateY(-100%);
            opacity:0;
        }
        65%{
            opacity:0;
        }
        66%{
            transform: translateY(100%);
        }
        67%{
            opacity: 1;
        }
        80%{
            transform: translateY(0);
        }

    }
    }
`