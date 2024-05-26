type TMenuIconProps = {
    style?: React.CSSProperties;
    color?: string;
    width?: string;
    height?: string;
    onClick?: () => void;
};

const MenuIcon = (props: TMenuIconProps) => {
    const { style, color, width, height, onClick } = props;
    return (
        <svg
            width={width || '2.5rem'}
            height={height || '2.5rem'}
            viewBox="0 0 24 24"
            fill="none"
            style={{
                cursor: 'pointer',
                position: 'absolute',
                right: '5%',
                ...style,
            }}
            onClick={onClick}
        >
            <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke={color || '#fff'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default MenuIcon;
