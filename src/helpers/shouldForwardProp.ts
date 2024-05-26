const exclusions = [
    'isOpen',
    'index',
    'grid',
    'row',
    'noPadding',
    'breakpoints',
    'main',
];

const shouldForwardProp = (prop: string) => !exclusions.includes(prop);

export default shouldForwardProp;
