import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
import { BsBraces } from 'react-icons/bs';
import { MdOutlineDesignServices } from 'react-icons/md';
import { device } from '../../assets/device';

export const Section = styled.section`
    padding-top: 4rem;
    background-color: ${({ toggle, theme }) => toggle ? theme.colors.darkMode : theme.colors.white};

`
export const Wrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    background-color: ${({ theme, toggle }) => toggle ? theme.colors.darkMode : theme.colors.white};
    padding-top: 4rem;
`

export const DownIcon = styled(FiChevronDown)`
    font-size: 40px;
    transform: ${({ open, designOpen }) => (open || designOpen) || (open && designOpen) ? "rotate(-180deg)" : null};
    transition: 250ms  ease-in;
    color: ${({ theme }) => theme.colors.basePurple};
    margin-left: auto;
    cursor: pointer;
`


export const BracesIcon = styled(BsBraces)`
    font-size: 40px;
    color: ${({ theme }) => theme.colors.basePurple};
    margin-right: .8rem;
`
export const DesignIcon = styled(MdOutlineDesignServices)`
    font-size: 40px;
    color: ${({ theme }) => theme.colors.basePurple};
    margin-right: 0.8rem;
`
export const PercentageBarWrapper = styled.div`
    width:100%;
    height:8px;
    background-color: #EFEFFD;
    margin-right: 15px;
    border-radius: 15px;
    margin-bottom: 1.5rem;
`
export const PercentageBar = styled.div`
    width:${({ perc, designperc }) => perc || designperc}%;

    height:8px;
    background-color: ${({ theme }) => theme.colors.basePurple};
    border-top-left-radius:15px;
    border-bottom-left-radius: 15px;

`;

export const DevSkills = styled.div`
    display: flex;
    flex-direction: column;
    margin:auto;
    width: 100%;

    @media ${device.tablet}{
        margin:0;
    }
`

export const Skill = styled.div`
max-height: ${({ open }) => open ? "12rem" : 0};
overflow : hidden;
height: ${({ open }) => open ? "auto" : null};
transition: 0.4s ease-in-out;

`

export const SkillName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    color: ${({ theme, toggle }) => toggle ? theme.colors.white : theme.colors.black};

    h1{
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSize.s};
    }

    span{
        color: ${({ theme }) => theme.colors.grey};
        font-size: ${({ theme }) => theme.fontSize.xs};
    }
`

export const SkillTittle = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 3rem;
    color: ${({ theme, toggle }) => toggle ? theme.colors.white : theme.colors.black};
    background-color: ${({ toggle, theme }) => toggle ? theme.colors.darkMode : theme.colors.white};
`

export const DesignSkills = styled.div`
    margin:auto;
    width:100%;
    
    @media ${device.tablet}{
        align-self: flex-start;
        margin: 0;
    }

`

export const SkillsContainer = styled.div`
    width:70%;
    margin:auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media ${device.tablet}{
        flex-direction: row;
        align-items: flex-start;
    }
`