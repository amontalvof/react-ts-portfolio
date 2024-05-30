import { Element } from 'react-scroll';
import { experience } from '../../constants/experience';
import {
    SectionDivider,
    StyledSection,
    StyledSectionTitle,
} from '../../components/GlobalStyledComponents';
import Timeline from '../../components/Timeline';

const Experience = () => {
    return (
        <Element name="experience">
            <StyledSection>
                <SectionDivider />
                <StyledSectionTitle>Experience</StyledSectionTitle>
                <Timeline experience={experience} />
            </StyledSection>
        </Element>
    );
};

export default Experience;
