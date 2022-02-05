import styled from 'styled-components';
import { BsMouse } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { device } from '../../assets/device';
import { BiSend } from 'react-icons/bi';
import { Link } from "react-scroll";
import bgr from '../../assets/img/bgr.svg';


export const StyledH1 = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-bottom:1rem;
    color: black;
    color: ${({ toggle, theme }) => toggle ? "white" : theme.colors.black};

    @media ${device.tablet}{
        font-size: ${({ theme }) => theme.fontSize.l};
    }
    @media ${device.laptop}{
        font-size: ${({ theme }) => theme.fontSize.xl};
    }

    span{
        color: ${({ theme }) => theme.colors.basePurple};
    }
`

export const StyledH2 = styled.h2`
    color: ${({ toggle, theme }) => toggle ? "white" : theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-bottom: 1rem;

    @media ${device.laptop}{
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`

export const StyledPar = styled.p`
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.grey};
    margin-bottom: 2rem;

    @media ${device.laptop}{
        font-size: ${({ theme }) => theme.fontSize.s};

    }
`

export const Img = styled.div`

    display: flex;
    align-items: center;
    width:350px;
    height: 350px;
    justify-self: center;
    position:relative;
    padding-left: 2rem;

    &::before{
        content:"";
        width:200px;
        height:200px;
        bottom:-5rem;
        background-image: url(${bgr});
        background-repeat: no-repeat;
        position:absolute;
        display: none;
    }

    @media ${device.tablet}{
        grid-column: 3/4;
        height: 320px;
        width:400px;

    }
    @media ${device.laptop}{
        height: 350px;
        width: 550px;
    }

    img{
        width:100%;
        -webkit-mask-image: url(data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CiAgICAgICAgICAgICAgPHN2ZyBpZD0ic3ctanMtYmxvYi1zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSI+CiAgICAgICAgICAgICAgICAgICAgPGRlZnM+IAogICAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InN3LWdyYWRpZW50IiB4MT0iMCIgeDI9IjEiIHkxPSIxIiB5Mj0iMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBpZD0ic3RvcDEiIHN0b3AtY29sb3I9InJnYmEoMjQ4LCAxMTcsIDU1LCAxKSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3AgaWQ9InN0b3AyIiBzdG9wLWNvbG9yPSJyZ2JhKDI1MSwgMTY4LCAzMSwgMSkiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgICAgICAgICAgICAgIDwvZGVmcz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9InVybCgjc3ctZ3JhZGllbnQpIiBkPSJNMzEuMiwtMjQuMkMzOC41LC0xNS45LDQwLjksLTMsMzcuNyw3LjZDMzQuNSwxOC4yLDI1LjYsMjYuNSwxNS42LDMwLjVDNS43LDM0LjUsLTUuNCwzNC4zLC0xMy42LDI5LjdDLTIxLjgsMjUuMiwtMjcuMiwxNi4zLC0zMC44LDUuNkMtMzQuMywtNS4xLC0zNiwtMTcuNiwtMzAuNiwtMjUuNkMtMjUuMiwtMzMuNSwtMTIuNiwtMzYuOSwtMC4zLC0zNi43QzEyLC0zNi41LDI0LC0zMi42LDMxLjIsLTI0LjJaIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiIHN0cm9rZS13aWR0aD0iMCIgc3R5bGU9InRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7Ij48L3BhdGg+CiAgICAgICAgICAgICAgPC9zdmc+);
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: center;
        -webkit-mask-size: 90%;
        mask-size: 90%;
    }
`


export const StyledButton = styled.button`
    padding: 0.6rem 1.2rem;
    background-color: #705EDC;
    border: none;
    border-radius: 8px;
    color:white;
    cursor: pointer;
    margin-top: 1rem;
    right:0;

`

export const StyledSendIcon = styled(BiSend)`
    font-size: 1.3rem;
  color:white;
  margin-left: .6rem;
  vertical-align: middle;
          align-items: flex-start;


`

export const StyledContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:100vh;
max-width: 1300px;
margin:auto;

   @media ${device.mobileS}{
        padding:0 1rem;
    }
`

export const Mouse = styled(BsMouse)`
    color: ${({ theme }) => theme.colors.basePurple};
    font-size: 1.2rem;
    `

export const Scroll = styled.div`
    position: relative;
    top:3rem; 
    display: flex;
    align-items: center;
    justify-items: center;
    animation-name: infinite-box;
    animation-timing-function: linear;
    animation-iteration-count:infinite;
    animation-direction:alternate;
    animation-duration: 1500ms;
    grid-column: 1/2;

    @media ${device.tablet}{
        grid-column:2/3;
    }

    @keyframes infinite-box{
        from{
            transform: translateY(0px);
            
        }
        to{
            transform: translateY(20px);
        }
    }

    p{
        font-size:${({ theme }) => theme.fontSize.xs};
        color: ${({ theme }) => theme.colors.basePurple};
    }
`


export const Section = styled.section`
    background-color: ${({ toggle, theme }) => toggle ? theme.colors.darkMode : theme.colors.white};
`

export const LinkInIcon = styled(FiLinkedin)`
    width: 20px;
    color: ${({ theme }) => theme.colors.basePurple};
    cursor: pointer;
`

export const GitHubIcon = styled(FiGithub)`
    width:20px;
    color: ${({ theme }) => theme.colors.basePurple};
    cursor: pointer;
`

export const Socials = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    gap:.8rem;
`


export const MainSection = styled.div`
    grid-column: 1/4;

@media ${device.tablet}{
    grid-column: 2/3;
    grid-row: 1/2;
    align-self: center;
}

`

export const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media ${device.tablet}{
        grid-template-columns: 50px 1fr 1fr;
        width:90%;
        
    }
`

export const ButtonContainer = styled.div`
position:relative;
display: inline-block;

`
export const SendButton = styled(Link)`
    padding: 1rem 1rem;
    color: white;
    background-color: ${({ theme }) => theme.colors.basePurple};
    border: none;
    border-radius: 15px;
    cursor:pointer;
    display: flex;
    width:11rem;
    justify-content: center;

    &:hover{
        box-shadow: 0px 0px 16px 0px rgba(66, 68, 90, 1);
    }

    &:active{
        background: #8176c4;
    }

`