import { ReactNode } from 'react';

interface IRenderIfProps {
    isTrue: boolean;
    children: ReactNode;
}

const RenderIf = ({ isTrue, children }: IRenderIfProps) => {
    if (isTrue) {
        return children;
    }
    return null;
};

export default RenderIf;
