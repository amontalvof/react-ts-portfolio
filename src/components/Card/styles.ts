import styled from 'styled-components';
import { BLACK_BLUR, LIGHT_BLUE, WHITE } from '../../constants/colors';

export const CardContainer = styled.div`
    width: 500px;
    height: 246px;
    position: relative;
    border-radius: 10px;
    margin-bottom: 50px;

    &::before {
        content: '';
        z-index: -1;
        position: absolute;
        inset: 0;
        background: linear-gradient(
            -45deg,
            ${LIGHT_BLUE} 0%,
            ${LIGHT_BLUE} 100%
        );
        transform: translate3d(0, 0, 0) scale(0.95);
        filter: blur(20px);
    }

    @media (max-width: 600px) {
        width: 300px;
        height: 146px;
    }
`;

export const StyledImg = styled.img`
    width: 500px;
    height: 246px;

    @media (max-width: 600px) {
        width: 300px;
        height: 146px;
    }
`;

export const ImgContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(-45deg, ${LIGHT_BLUE} 0%, ${LIGHT_BLUE} 100%);
    transition: scale 0.6s, rotate 0.6s, filter 1s;
`;

export const StyledContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    color: ${WHITE};
    padding: 20px 24px;
    line-height: 1.5;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const StyledCard = styled.div`
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;

    &:hover {
        & > ${ImgContent} {
            scale: 2.5;
            rotate: 30deg;
            filter: blur(7px);
        }

        & > ${StyledContent} {
            opacity: 1;
            transform: translateY(0);
            background-color: ${BLACK_BLUR};
            pointer-events: auto; /* Add this line */
        }
    }
`;

export const Heading = styled.p`
    font-size: 32px;
    font-weight: 700;

    @media (max-width: 600px) {
        font-size: 22px;
        font-weight: 500;
    }
`;

export const Description = styled.p`
    @media (max-width: 600px) {
        display: none;
    }
`;

export const StyledFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    z-index: 1000 !important;
`;

export const StyledAnchor = styled.a`
    margin: 20px 10px 0;
`;
