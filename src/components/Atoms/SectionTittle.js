import styled from 'styled-components';
import { device } from '../../assets/device';


export const SectionTittle = styled.div`
    padding: 4rem 0;

    h2{
        font-size: ${({ theme }) => theme.fontSize.l};
        text-align: center;
        margin-bottom: 0.6rem;
        font-weight: 400;
        color: ${({ toggle, theme }) => toggle ? theme.colors.white : theme.colors.black};

        @media ${device.tablet}{
        font-size: ${({ theme }) => theme.fontSize.l};
        }
    }

        h3{
        font-size: ${({ theme }) => theme.fontSize.s};
        color: ${({ theme }) => theme.colors.grey};
        text-align: center;
        font-weight: 400;
    }
`