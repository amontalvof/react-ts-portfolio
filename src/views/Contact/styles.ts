import styled from 'styled-components';
import { BLACK_RGBA, WHITE_RGBA } from '../../constants/colors';

export const Footer = styled.footer`
    position: relative;
    width: 100%;
    background: ${BLACK_RGBA};
    backdrop-filter: blur(50px);
    min-height: 200px;
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SocialIconList = styled.ul`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`;

export const StyledListItem = styled.li`
    list-style: none;
`;

export const StyledAnchor = styled.a`
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
    &:hover {
        transform: translateY(-10px);
    }
`;

export const StyledEmail = styled.p`
    color: ${WHITE_RGBA};
    font-size: 1.5rem;
    text-align: center;
`;
export const StyledEmailLink = styled.a`
    color: ${WHITE_RGBA};
    font-size: 1.5rem;
    text-align: center;
`;

export const StyledCopyRight = styled.p`
    color: ${WHITE_RGBA};
    font-size: 1rem;
    margin-top: 15px;
    margin-bottom: 10px;
    text-align: center;
`;
