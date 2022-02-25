import styled from 'styled-components';
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';

export const ScrollUpIcon = styled(ArrowIosUpwardOutline)`
    width: 2.5rem;
    color: white; 

`

export const ScrollUpContainer = styled.div`
    width:2.8rem;
    height:2.8rem;
    border-radius: 50%;
    background-color: #4836B4;
    top:90%;
    right:1rem;
    position:fixed;
    cursor: pointer;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    transition: background-color 300ms;

    &:hover{
        background-color: ${({ theme }) => theme.colors.basePurple};
    }
`