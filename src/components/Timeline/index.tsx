import {
    StyledCompany,
    StyledContainer,
    StyledDate,
    StyledDescription,
    StyledPlace,
    StyledTitle,
} from './styles';
import calculateExperienceDuration from '../../helpers/calculateExperienceDuration';

interface IExperience {
    id: string;
    title: string;
    place: string;
    date: string;
    description: string;
    company: string;
}

interface ITimeline {
    experience: IExperience[];
}

const Timeline = (props: ITimeline) => {
    const { experience } = props;
    return (
        <StyledContainer>
            {experience.map((item) => {
                const [startDateStr, endDateStr] = item.date.split(' - ');
                const experienceDuration = calculateExperienceDuration(
                    startDateStr,
                    endDateStr
                );
                return (
                    <StyledDescription key={item.id}>
                        <StyledTitle>{item.title}</StyledTitle>
                        <StyledCompany>{item.company}</StyledCompany>
                        <StyledDate>{`${item.date} · ${experienceDuration}`}</StyledDate>
                        <StyledPlace>{item.place}</StyledPlace>
                        {item.description}
                    </StyledDescription>
                );
            })}
        </StyledContainer>
    );
};

export default Timeline;
