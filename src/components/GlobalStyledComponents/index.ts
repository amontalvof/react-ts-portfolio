import styled from 'styled-components';
import shouldForwardProp from '../../helpers/shouldForwardProp';
import { DARK_BLUE, LIGHT_BLUE, WHITE, WHITE_RGBA } from '../../constants';

interface IBreakpoints {
    md?: string;
    sm?: string;
}

interface IStyledSectionProps {
    grid?: boolean;
    row?: boolean;
    breakpoints?: IBreakpoints;
}

export const StyledSection = styled.section.withConfig({
    shouldForwardProp,
})<IStyledSectionProps>`
    display: ${(props) => (props.grid ? 'grid' : 'flex')};
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
    padding: 50px;
    margin: 0 auto;
    max-width: 1200px;
    box-sizing: content-box;
    position: relative;
    overflow: hidden;
    grid-template-columns: 1fr 1fr;
    @media ${(props) => `(max-width: ${props.breakpoints?.md})`} {
        padding: 40px;
        flex-direction: column;
    }

    @media ${(props) => `(max-width: ${props.breakpoints?.sm})`} {
        padding: 30px;
        flex-direction: column;
    }
`;

interface IStyledSectionTitleProps {
    main?: boolean;
    breakpoints?: IBreakpoints;
}

export const StyledSectionTitle = styled.h2.withConfig({
    shouldForwardProp,
})<IStyledSectionTitleProps>`
    font-weight: 800;
    font-size: ${(props) => (props.main ? '60px' : '40px')};
    line-height: ${(props) => (props.main ? '60px' : '40px')};
    width: calc(100vw - 180px);
    max-width: 100%;
    background: linear-gradient(
        121.57deg,
        ${WHITE} 18.77%,
        ${WHITE_RGBA} 60.15%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: ${WHITE};
    margin-bottom: 16px;
    padding: ${(props) => (props.main ? '100px 0 20px' : '0')};

    @media ${(props) => `(max-width: ${props.breakpoints?.md})`} {
        font-size: ${(props) => (props.main ? '50px' : '30px')};
        margin-bottom: 12px;
        padding: ${(props) => (props.main ? '100px 0 16px' : '0')};
    }

    @media ${(props) => `(max-width: ${props.breakpoints?.sm})`} {
        line-height: 40px;
        font-size: ${(props) => (props.main ? '40px' : '20px')};
        margin-bottom: 8px;
        padding: ${(props) => (props.main ? '100px 0 8px' : '0')};
    }
`;

interface IStyledSectionTextProps {
    breakpoints?: IBreakpoints;
}

export const StyledSectionText = styled.p.withConfig({
    shouldForwardProp,
})<IStyledSectionTextProps>`
    max-width: 800px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    padding-bottom: 3.6rem;
    color: ${WHITE_RGBA};
    width: calc(100vw - 180px);
    @media ${(props) => `(max-width: ${props.breakpoints?.md})`} {
        max-width: 670px;
        font-size: 20px;
        line-height: 32px;
        padding-bottom: 24px;
    }

    @media ${(props) => `(max-width: ${props.breakpoints?.sm})`} {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 16px;
    }
`;

interface IStyledSectionDividerProps {
    divider?: boolean;
    breakpoints?: IBreakpoints;
}

export const SectionDivider = styled.div.withConfig({
    shouldForwardProp,
})<IStyledSectionDividerProps>`
    width: 64px;
    height: 6px;
    border-radius: 10px;
    background-color: ${WHITE};
    background: linear-gradient(270deg, ${LIGHT_BLUE} 0%, ${DARK_BLUE} 100%);

    margin: ${(props) => (props.divider ? '4rem 0' : '')};

    @media ${(props) => `(max-width: ${props.breakpoints?.md})`} {
        width: 48px;
        height: 4px;
    }

    @media ${(props) => `(max-width: ${props.breakpoints?.sm})`} {
        width: 32px;
        height: 2px;
    }
`;
