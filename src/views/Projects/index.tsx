import { Element } from 'react-scroll';
import Card from '../../components/Card';
import {
    SectionDivider,
    StyledSection,
    StyledSectionTitle,
} from '../../components/GlobalStyledComponents';
import { StyledContainer } from './styles';
import { projects } from '../../constants/projects';

const Projects = () => {
    return (
        <Element name="projects">
            <StyledSection>
                <SectionDivider />
                <StyledSectionTitle>Projects</StyledSectionTitle>
                <StyledContainer>
                    {projects.map((item) => (
                        <Card
                            key={item.id}
                            image={item.img}
                            alt={item.alt}
                            tech={item.tech}
                            url={item.url}
                            github={item.github}
                        />
                    ))}
                </StyledContainer>
            </StyledSection>
        </Element>
    );
};

export default Projects;
