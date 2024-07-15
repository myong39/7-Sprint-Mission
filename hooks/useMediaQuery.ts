import { useState, useEffect } from 'react';

const useMediaQuery = () => {
  const [deviceType, setDeviceType] = useState<'Mobile' | 'Tablet' | 'Desktop'>('Mobile');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.matchMedia('screen and (max-width: 767px)').matches) {
        setDeviceType('Mobile');
      } else if (
        window.matchMedia('screen and (min-width: 768px) and (max-width: 1199px)').matches
      ) {
        setDeviceType('Tablet');
      } else if (window.matchMedia('screen and (min-width: 1200px)').matches) {
        setDeviceType('Desktop');
      }
    };

    const mediaQueries = [
      window.matchMedia('screen and (max-width: 767px)'),
      window.matchMedia('screen and (min-width: 768px) and (max-width: 1199px)'),
      window.matchMedia('screen and (min-width: 1200px)'),
    ];

    mediaQueries.forEach((mq) => mq.addEventListener('change', updateDeviceType));

    updateDeviceType(); // 초기 설정
    setIsInitialized(true);

    return () => {
      mediaQueries.forEach((mq) => mq.removeEventListener('change', updateDeviceType));
    };
  }, []);

  return [deviceType, isInitialized];
};

export default useMediaQuery;
