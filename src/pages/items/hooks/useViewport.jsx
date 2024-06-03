import { useState, useEffect } from 'react';

function useViewport() {
    const getDeviceType = (width) => {
        if (width < 768) {
            return 'mobile';
        }
        if (width < 1200) {
            return 'tablet';
        }
        if (width >= 1200) {
            return 'desktop';
        }
    };

    const [deviceType, setDeviceType] = useState(getDeviceType(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setDeviceType(getDeviceType(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { deviceType };
}

export default useViewport;
