import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import {
    DARK_WHITE_RGBA,
    WHITE,
    WHITE_TRANSPARENT,
} from '../../constants/colors';

export const Box = styled(Tilt)`
    width: 400px;
    height: 400px;
    border-radius: 10px;
    color: ${WHITE};
    padding: 3.5%;
    text-align: center;
    line-height: 1.75em;
    background: ${WHITE_TRANSPARENT};
    backdrop-filter: blur(1px);
    border: 2px solid ${WHITE_TRANSPARENT};
    margin-bottom: 30px;
`;

export const StyledTitle = styled.h2`
    font-size: 1.5em;
    display: block;
`;

export const StyledDate = styled.h4`
    font-size: 1em;
    display: block;
    color: ${DARK_WHITE_RGBA};
`;

export const StyledPlace = styled.h4`
    font-size: 1em;
    display: block;
    color: ${DARK_WHITE_RGBA};
    margin-bottom: 20px;
`;

export const Description = styled.p`
    font-size: 1.1em;
`;
