import useWindowSize from "./useWindowSize";

const PC_MIN_WIDTH = 1200;
const TABLET_MIN_WIDTH = 768;
const TABLET_MAX_WIDTH = 1199;
const MOBILE_MIN_WIDTH = 375;
const MOBILE_MAX_WIDTH = 767;

export default function useDevice() {
  const windowSize = useWindowSize();

  const isDesktop = windowSize.width >= PC_MIN_WIDTH;
  const isTablet =
    windowSize.width >= TABLET_MIN_WIDTH &&
    windowSize.width <= TABLET_MAX_WIDTH;
  const isMobile =
    windowSize.width >= MOBILE_MIN_WIDTH &&
    windowSize.width <= MOBILE_MAX_WIDTH;

  return {
    isDesktop,
    isTablet,
    isMobile,
  };
}
