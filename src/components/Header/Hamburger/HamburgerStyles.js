import styled from 'styled-components';

export const StyledHamburger = styled.div`
    display: none;
    z-index: 3;
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    margin-top: 7px;

    @media (max-width: 768px){
        display: block;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        cursor: pointer;
        
    div{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ toggle }) => toggle ? "white" : "black"};
        margin-bottom:7px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
}
`;