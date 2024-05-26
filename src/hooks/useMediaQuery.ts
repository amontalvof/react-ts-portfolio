import { useEffect, useState } from 'react';
import useEventListener from './useEventListener';

const useMediaQuery = (mediaQuery: string) => {
    const [isMatch, setIsMatch] = useState(false);
    const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(
        null
    );

    useEffect(() => {
        const list = window.matchMedia(mediaQuery);
        setMediaQueryList(list);
        setIsMatch(list.matches);
    }, [mediaQuery]);

    useEventListener(
        'change',
        (event: any) => setIsMatch(event.matches),
        mediaQueryList
    );

    return isMatch;
};

export default useMediaQuery;
