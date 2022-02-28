import styled from 'styled-components';
import { device } from "../../assets/device";
import { FiPhone } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export const ContactSection = styled.section`
    padding: 5rem 0;
    background-color: ${({ theme, toggle }) => toggle ? theme.colors.darkMode : theme.colors.white};
`

export const ContactWrapper = styled.div`
    max-width: 1100px;
    margin:auto;
`


export const ContactContainer = styled.div`
display: flex;
margin: 0 auto;
align-items: center;
max-width:1100px;

@media ${device.laptop}{
    flex-direction: row;
    margin: auto;
    justify-content: center;
    width:80%;
    gap: 2rem;
}


flex-direction: column;

    form{
        display: flex;
        flex-direction: column;
        width:90%;

        @media ${device.tablet}{
            width:60%;
        }
    }

    input{
        background-color: ${({ theme, toggle }) => toggle ? "#211D33" : "#EFEFFD"};

        
        box-sizing: content-box; 
        flex-grow: 1;
        margin-bottom: 1rem;
        border-radius: 10px;
        outline: none;
        border: 2px solid transparent;
        padding: 1rem 0;
        padding-left: 1rem;

        &:focus{
            
            border-color: ${({ theme }) => theme.colors.basePurple};
            box-sizing: border-box;
        }

    }

    textarea{
        background-color: ${({ theme, toggle }) => toggle ? "#211D33" : "#EFEFFD"};
        border-radius: 10px;
        padding:1rem;
        margin-bottom: 1rem;
        outline: none;
        border: 2px solid transparent;

        &:focus{
        border-color: ${({ theme }) => theme.colors.basePurple};
        }

    }
    button{
        align-self:flex-start;
        padding: 0.8rem 1.3rem;

            &:hover{
                box-shadow: 0px 0px 16px 0px rgba(66, 68, 90, 1);
            }

            &:active{
                background: #8176c4;
            }

        i{
            vertical-align: middle;
            padding-left: 0.5rem;
            font-size: 1.2rem;
        }
    }

    input, textarea{
        caret-color: ${({ toggle }) => toggle ? "white" : "black"};
        color: ${({ toggle, theme }) => toggle ? theme.colors.white : theme.colors.black};
    }

`

export const FormRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 1;
    

    @media ${device.mobileL}{
        flex-direction: row;
        gap: 1rem;
        flex-grow: 0;
    }
`





export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap:1.2rem;
    margin-bottom: 2rem;

    @media ${device.tablet}{
        flex-direction: row;
        gap:1rem;
    }

    @media ${device.laptop}{
    flex-direction: column;
}
`

export const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.8rem;
    gap: 0.8rem;

    h3{
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: ${({ theme, toggle }) => toggle ? theme.colors.white : theme.colors.black};

        @media ${device.mobileM}{
            font-size: ${({ theme }) => theme.fontSize.m};
        }
        @media ${device.tablet}{
            font-size: ${({ theme }) => theme.fontSize.s};
        }

    }
    p{
        font-size: ${({ theme }) => theme.fontSize.xs};
        color: ${({ theme }) => theme.colors.grey};
    }
    
`

export const PhoneIcon = styled(FiPhone)`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.basePurple};
`
export const MailIcon = styled(FiMail)`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.basePurple};
`

export const LocationIcon = styled(HiOutlineLocationMarker)`
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.basePurple};
`

export const SubmitMessage = styled.div`
    margin-top: 1rem;
    color: ${({ toggle, theme }) => toggle ? theme.colors.white : theme.colors.grey};
`