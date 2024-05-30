import { Cloud, ICloud } from 'react-icon-cloud';
import resolveIcons from '../../helpers/resolveIcons';
import {
    SectionDivider,
    StyledSection,
    StyledSectionTitle,
} from '../../components/GlobalStyledComponents';
import { Element } from 'react-scroll';

const IconCloud = () => {
    const icons = resolveIcons();
    const cloudProps: Omit<ICloud, 'children'> = {
        containerProps: {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                paddingTop: 40,
            },
        },
        // https://www.goat1000.com/tagcanvas-options.php
        options: {
            clickToFront: 500,
            depth: 1,
            imageScale: 2,
            initial: [0.01, -0.01],
            outlineColour: '#0000',
            reverse: true,
            tooltip: 'native',
            tooltipDelay: 0,
            wheelZoom: false,
        },
    };
    return (
        <Element name="skills">
            <StyledSection>
                <SectionDivider />
                <StyledSectionTitle>Skills</StyledSectionTitle>
                <Cloud {...cloudProps}>{icons}</Cloud>
            </StyledSection>
        </Element>
    );
};

export default IconCloud;
