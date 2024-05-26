import { Element } from 'react-scroll';
import {
    StyledSection,
    StyledSectionText,
    StyledSectionTitle,
} from '../../components/GlobalStyledComponents';
import TypedName from '../../components/TypedName';
import { LeftSection } from './styles';

const Hello = () => {
    return (
        <StyledSection
            row
            breakpoints={{
                md: '768px',
                sm: '480px',
            }}
        >
            <Element name="hello">
                <LeftSection>
                    <StyledSectionTitle
                        main
                        breakpoints={{
                            md: '768px',
                            sm: '480px',
                        }}
                    >
                        <TypedName />
                    </StyledSectionTitle>
                    <StyledSectionText>
                        I am a Full-Stack Developer skilled at writing
                        well-designed and efficient code using current best
                        practices. Fast learner, hard worker, and team player
                        proficient in various languages such as JavaScript,
                        TypeScript, and Java.
                    </StyledSectionText>
                </LeftSection>
            </Element>
        </StyledSection>
    );
};

export default Hello;
