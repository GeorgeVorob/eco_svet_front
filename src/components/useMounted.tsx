import { useEffect, useRef } from 'react';

const useMounted = (): any => {
    var mountedRef = useRef(false);
    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;
        };
    }, []);
    return mountedRef;
}

export default useMounted;