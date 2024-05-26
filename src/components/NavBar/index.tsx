import { useState } from 'react';
import { scroller } from 'react-scroll';
import useMediaQuery from '../../hooks/useMediaQuery';
import { StyledAnchor, StyledHeader, StyledNav } from './styles';
import MenuIcon from '../../assets/icons/Menu';
import CrossIcon from '../../assets/icons/Cross';
import RenderIf from '../RenderIf';
import { menuLinks } from '../../constants';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isLarge = useMediaQuery('(min-width: 768px)');
    const iconStyle = !isLarge
        ? { display: 'inline-flex' }
        : { display: 'none' };

    const handleIconClick = () => {
        setIsOpen(!isOpen);
    };

    const onClickToElement = (element: string) => {
        const scrollType = {
            duration: 1000,
            delay: 50,
            smooth: true,
            offset: -10,
        };
        setIsOpen(false);
        scroller.scrollTo(element, scrollType);
    };

    return (
        <StyledHeader>
            <RenderIf isTrue={!isOpen}>
                <MenuIcon style={iconStyle} onClick={handleIconClick} />
            </RenderIf>
            <RenderIf isTrue={isOpen}>
                <CrossIcon style={iconStyle} onClick={handleIconClick} />
            </RenderIf>
            <StyledNav isOpen={isOpen}>
                {menuLinks.map((link, index) => (
                    <StyledAnchor
                        key={link}
                        href={`#${link}`}
                        index={index}
                        onClick={() => {
                            onClickToElement(link);
                        }}
                    >
                        {link.toUpperCase()}
                    </StyledAnchor>
                ))}
            </StyledNav>
        </StyledHeader>
    );
};

export default NavBar;
