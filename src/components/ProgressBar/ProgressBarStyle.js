import styled from 'styled-components';

export const BarWrapper = styled.div`
    width:100%;
`;

export const Bar = styled.div`
    width: ${({ scrollTop }) => scrollTop}%;
    height: 4px;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 3%, rgba(112,94,220,1) 50%, rgba(199,192,241,1) 100%);
`;
