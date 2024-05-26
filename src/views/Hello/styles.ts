import styled from 'styled-components';

export const LeftSection = styled.article`
    width: 100%;
    @media (max-width: 480px) {
        width: 80%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
`;
