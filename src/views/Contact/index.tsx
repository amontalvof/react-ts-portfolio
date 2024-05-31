import { Element } from 'react-scroll';
import GitHub from '../../assets/icons/GitHub';
import LinkedIn from '../../assets/icons/Linkedin';
import {
    Footer,
    SocialIconList,
    StyledAnchor,
    StyledCopyRight,
    StyledEmail,
    StyledEmailLink,
    StyledListItem,
} from './styles';

const Contact = () => {
    return (
        <Element name="contact">
            <Footer>
                <SocialIconList>
                    <StyledListItem>
                        <StyledAnchor
                            href="https://www.linkedin.com/in/andy-montalvo-6a9a37148"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <LinkedIn height="37px" width="37px" />
                        </StyledAnchor>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledAnchor
                            href="https://github.com/amontalvof"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <GitHub height="40px" width="40px" />
                        </StyledAnchor>
                    </StyledListItem>
                </SocialIconList>
                <StyledEmail>
                    Email:{' '}
                    <StyledEmailLink
                        href="mailto:andy.montalvowd@gmail.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        andy.montalvowd@gmail.com
                    </StyledEmailLink>
                </StyledEmail>
                <StyledCopyRight>
                    © {new Date().getFullYear()} Andy Montalvo. All rights
                    reserved.
                </StyledCopyRight>
            </Footer>
        </Element>
    );
};

export default Contact;
