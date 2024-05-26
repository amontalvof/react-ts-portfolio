interface ICrossIconProps {
    style?: React.CSSProperties;
    color?: string;
    width?: string;
    height?: string;
    onClick?: () => void;
}

const CrossIcon = (props: ICrossIconProps) => {
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
                d="M19 5L4.99998 19M5.00001 5L19 19"
                stroke={color || '#fff'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default CrossIcon;
