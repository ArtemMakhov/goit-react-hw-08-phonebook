import styled from "styled-components";

export const Form = styled.form`
  width:320px ;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

export const Button = styled.button`
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