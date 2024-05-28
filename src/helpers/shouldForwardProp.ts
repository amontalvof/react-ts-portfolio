const exclusions = [
    'isOpen',
    'index',
    'grid',
    'row',
    'noPadding',
    'breakpoints',
    'main',
    'isActive',
];

const shouldForwardProp = (prop: string) => !exclusions.includes(prop);

export default shouldForwardProp;
