import { useEffect, useRef, RefObject } from 'react';

const useEventOutside = (elementRef: RefObject<HTMLDivElement>, handle: () => void, eventName: string = 'click') => {
    const handleRef = useRef(handle);

    useEffect(() => {
        handleRef.current = handle;
    }, [handle]);

    useEffect(() => {
        const handleClickOutside = (e: Event) => {
            if (elementRef.current && !elementRef.current.contains(e.target as Node)) {
                handleRef.current();
            }
        };

        document.addEventListener(eventName, handleClickOutside);

        return () => {
            document.removeEventListener(eventName, handleClickOutside);
        };
    }, [elementRef, eventName]);
};

export { useEventOutside };
