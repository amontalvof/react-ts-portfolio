import GitHub from '../../assets/icons/GitHub';
import LinkIcon from '../../assets/icons/Link';
import RenderIf from '../RenderIf';
import {
    CardContainer,
    Description,
    Heading,
    ImgContent,
    StyledAnchor,
    StyledCard,
    StyledContent,
    StyledFooter,
    StyledImg,
} from './styles';

interface CardProps {
    image: string;
    alt: string;
    tech: string;
    url: string;
    github?: string;
}

const Card = (props: CardProps) => {
    const { image, alt, tech, url, github } = props;
    return (
        <CardContainer>
            <StyledCard>
                <ImgContent>
                    <StyledImg src={image} alt={alt} />
                </ImgContent>
                <StyledContent>
                    <Heading>{alt}</Heading>
                    <Description>{tech}</Description>
                    <StyledFooter>
                        <StyledAnchor
                            href={url}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <LinkIcon height="30px" width="30px" />
                        </StyledAnchor>
                        <RenderIf isTrue={!!github}>
                            <StyledAnchor
                                href={github}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <GitHub height="30px" width="30px" />
                            </StyledAnchor>
                        </RenderIf>
                    </StyledFooter>
                </StyledContent>
            </StyledCard>
        </CardContainer>
    );
};

export default Card;
