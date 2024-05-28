import styled from 'styled-components';
import {
    BLACK_RGBA,
    WHITE,
    WHITE_RGBA,
    WHITE_TRANSPARENT,
} from '../../constants/colors';
import shouldForwardProp from '../../helpers/shouldForwardProp';

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    padding: 1.3rem 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background-color: ${BLACK_RGBA};
        backdrop-filter: blur(50px);
        z-index: -1;
    }
`;

interface INavProps {
    isOpen: boolean;
}

export const StyledNav = styled.nav.withConfig({
    shouldForwardProp,
})<INavProps>`
    a {
        font-size: 1.1rem;
        color: ${WHITE_RGBA};
        text-decoration: none;
        font-weight: 500;
        margin-left: 2.5rem;
        transition: 0.1s ease;
        &:hover {
            color: ${WHITE};
            opacity: 1;
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: ${(props) => (props.isOpen ? '17.7rem' : '0')};
        background-color: ${BLACK_RGBA};
        backdrop-filter: blur(50px);
        box-shadow: 0 0.5rem 1rem ${BLACK_RGBA};
        overflow: hidden;
        transition: 0.3s ease;

        a {
            display: block;
            margin: 1.5rem 0;
            text-align: center;
            opacity: ${(props) => (props.isOpen ? '1' : '0')};
            transform: ${(props) =>
                props.isOpen ? 'translateY(0)' : 'translateY(-50px)'};
        }
    }
`;

interface IStyledAnchorProps {
    index: number;
    isActive: boolean;
}

export const StyledAnchor = styled.a.withConfig({
    shouldForwardProp,
})<IStyledAnchorProps>`
    transition-delay: ${(props) => {
        return `calc(0.05s * ${props.index}) !important`;
    }};
    border-bottom: ${(props) =>
        props.isActive ? `2px solid ${WHITE}` : 'none'};
    &:hover {
        text-shadow: 0 0 0.5rem ${WHITE_TRANSPARENT};
    }
    @media (max-width: 768px) {
        border-bottom: none;
    }
`;
