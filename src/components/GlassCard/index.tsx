import calculateExperienceDuration from '../../helpers/calculateExperienceDuration';
import { Box, StyledDate, StyledPlace, StyledTitle } from './styles';

interface IGlassCardProps {
    data: {
        id: string;
        title: string;
        place: string;
        date: string;
        description: string;
    };
}

const GlassCard = ({ data }: IGlassCardProps) => {
    const [startDateStr, endDateStr] = data.date.split(' - ');
    const educationDuration = calculateExperienceDuration(
        startDateStr,
        endDateStr
    );
    return (
        <Box>
            <StyledTitle>{data.title}</StyledTitle>
            <StyledDate>{`${data.date} · ${educationDuration}`}</StyledDate>
            <StyledPlace>{data.place}</StyledPlace>
            <p>{data.description}</p>
        </Box>
    );
};

export default GlassCard;
