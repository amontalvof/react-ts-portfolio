import { Element } from 'react-scroll';
import { education } from '../../constants/education';
import {
    SectionDivider,
    StyledSection,
    StyledSectionTitle,
} from '../../components/GlobalStyledComponents/index';
import GlassCard from '../../components/GlassCard';
import { StyledContainer } from './styles';

const Education = () => {
    return (
        <Element name="education">
            <StyledSection>
                <SectionDivider />
                <StyledSectionTitle>Education</StyledSectionTitle>
                <StyledContainer>
                    {education.map((item) => {
                        return <GlassCard key={item.id} data={item} />;
                    })}
                </StyledContainer>
            </StyledSection>
        </Element>
    );
};

export default Education;
