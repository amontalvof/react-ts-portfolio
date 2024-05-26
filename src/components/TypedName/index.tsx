import { Typewriter } from 'react-simple-typewriter';

const TypedName = () => {
    return (
        <Typewriter
            words={['Hello', 'My name is Andy Montalvo']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
        />
    );
};

export default TypedName;
