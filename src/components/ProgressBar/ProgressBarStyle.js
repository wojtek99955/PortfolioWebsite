import styled from 'styled-components';

export const BarWrapper = styled.div`
    width:100%;
`;

export const Bar = styled.div`
    width: ${({scrollTop}) => scrollTop}%;
    height: 4px;
    background-color: ${({theme, toggle}) =>toggle? theme.colors.basePurple : "#0E0E1C"};
`;
