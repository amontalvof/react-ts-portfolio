import styled from 'styled-components';
import { BLUR_TRANSPARENT, LIGHT_TRANSPARENT, WHITE } from '../../constants';

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
        background-color: ${BLUR_TRANSPARENT};
        backdrop-filter: blur(50px);
        z-index: -1;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 70px;
        background: linear-gradient(90deg, transparent, ${LIGHT_TRANSPARENT});
        transition: 0.5s ease;
    }
    &:hover::after {
        left: 100%;
    }
`;

type TNavProps = {
    isOpen: boolean;
};

const shouldForwardNavProp = (prop: string) => prop !== 'isOpen';

export const StyledNav = styled.nav.withConfig({
    shouldForwardProp: shouldForwardNavProp,
})<TNavProps>`
    a {
        font-size: 1.15rem;
        color: ${WHITE};
        text-decoration: none;
        font-weight: 500;
        margin-left: 2.5rem;
    }
    @media (max-width: 768px) {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: ${(props) => (props.isOpen ? '17.7rem' : '0')};
        background-color: ${BLUR_TRANSPARENT};
        backdrop-filter: blur(50px);
        box-shadow: 0 0.5rem 1rem ${BLUR_TRANSPARENT};
        overflow: hidden;
        transition: 0.3s ease;

        a {
            display: block;
            font-size: 1.1rem;
            margin: 1.5rem 0;
            text-align: center;
            transition: 0.3s ease;
            opacity: ${(props) => (props.isOpen ? '1' : '0')};
            transform: ${(props) =>
                props.isOpen ? 'translateY(0)' : 'translateY(-50px)'};
        }
    }
`;

type TStyledAnchorProps = {
    index: number;
};

const shouldForwardAnchorProp = (prop: string) => prop !== 'index';

export const StyledAnchor = styled.a.withConfig({
    shouldForwardProp: shouldForwardAnchorProp,
})<TStyledAnchorProps>`
    transition-delay: ${(props) => {
        return `calc(0.05s * ${props.index}) !important`;
    }};
`;
