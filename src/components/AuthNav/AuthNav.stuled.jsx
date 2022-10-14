import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Link = styled(NavLink)`
        display: inline-block;
    text-decoration: none;
    padding: ${p => p.theme.space[3]}px;
    font-weight: 700;
    color: #2a363b;
    
    &.active {
     color: #e84a5f;   
    }
border-radius: ${p => p.theme.radii.sm};
cursor: pointer;
:hover  {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
}
`;

