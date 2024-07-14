import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState({
    isMobile: typeof window !== "undefined" && window.innerWidth <= 767,
    isTablet:
      typeof window !== "undefined" &&
      window.innerWidth >= 768 &&
      window.innerWidth <= 1199,
    isDesktop: typeof window !== "undefined" && window.innerWidth >= 1200,
  });

  useEffect(() => {
    const handleResize = () => {
      setDeviceType({
        isMobile: window.innerWidth <= 767,
        isTablet: window.innerWidth >= 768 && window.innerWidth <= 1199,
        isDesktop: window.innerWidth >= 1200,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
