import styled from 'styled-components';
import { DARK_WHITE_RGBA, WHITE } from '../../constants/colors';

export const StyledContainer = styled.article`
    color: ${WHITE};
`;

export const StyledDescription = styled.p`
    font-size: 1.1em;
    line-height: 1.75em;
    border-top: 3px solid;
    -o-border-image: linear-gradient(to right, #743ad5 0%, #039dc5 100%);
    border-image: linear-gradient(to right, #743ad5 0%, #039dc5 100%);
    border-image-slice: 1;
    border-width: 3px;
    margin: 0;
    padding: 40px;
    counter-increment: section;
    position: relative;

    &:before {
        content: counter(section);
        position: absolute;
        border-radius: 50%;
        padding: 10px;
        height: 1.25em;
        width: 1.25em;
        background-color: #34435e;
        text-align: center;
        line-height: 1.25em;
        color: #ffffff;
        font-size: 1.1em;
    }

    &:nth-child(odd) {
        border-right: 3px solid;
        padding-left: 0;
    }

    &:nth-child(odd):before {
        left: 100%;
        margin-left: -20px;
    }

    &:nth-child(even) {
        border-left: 3px solid;
        padding-right: 0;
    }

    &:nth-child(even):before {
        right: 100%;
        margin-right: -20px;
    }

    &:first-child {
        border-top: 0;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }

    &:last-child {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

export const StyledTitle = styled.span`
    font-size: 1.5em;
    display: block;
`;

export const StyledCompany = styled.span`
    font-size: 1.1em;
    display: block;
`;

export const StyledDate = styled.span`
    font-size: 1.1em;
    display: block;
    color: ${DARK_WHITE_RGBA};
`;

export const StyledPlace = styled.span`
    font-size: 1.1em;
    display: block;
    color: ${DARK_WHITE_RGBA};
    margin-bottom: 20px;
`;
