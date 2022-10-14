import styled from "styled-components";


export const Title = styled.p`
 font-size:${p => p.theme.fontSizes.l};
font-weight:${p => p.theme.fontWeights.bold};
line-height: ${p => p.theme.lineHeights.heading}; 
margin-right: ${p => p.theme.space[3]}px; 
`

export const Btn = styled.button`
 width: 120px;
padding: ${p => p.theme.space[3]}px;
border: ${p => p.theme.borders.normal};
border-radius: ${p => p.theme.radii.sm};
cursor: pointer;
:hover, 
:focus  {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
}    
`;
