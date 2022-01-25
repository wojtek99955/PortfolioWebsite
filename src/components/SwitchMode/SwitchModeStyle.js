import styled from "styled-components";

export const Switch = styled.div`
    width: 40px;
    height:20px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    background-color: ${({ toggle, theme }) => toggle ? theme.colors.basePurple : "#ebe8fa"};
    margin-right: 1rem;
    cursor:pointer;
`
export const Notch = styled.div`
    height: 16px;
    width: 16px;
    border-radius: 50%;
    transition: transform 0.2s ease-out;
    transform: ${({ toggle }) => toggle ? "translateX(20px)" : null};
    margin: 0 2px;
    background-color: ${({ toggle, theme }) => toggle ? theme.colors.white : theme.colors.basePurple};
`