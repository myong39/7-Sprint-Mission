import useWindowSize from "./useWindowSize";
import { SCREEN_SIZE } from "@/constants/constants";

export default function useDevice() {
  const windowSize = useWindowSize();

  const isDesktop = windowSize.width >= SCREEN_SIZE.PC_MIN_WIDTH;
  const isTablet =
    windowSize.width >= SCREEN_SIZE.TABLET_MIN_WIDTH &&
    windowSize.width <= SCREEN_SIZE.TABLET_MAX_WIDTH;
  const isMobile =
    windowSize.width >= SCREEN_SIZE.MOBILE_MIN_WIDTH &&
    windowSize.width <= SCREEN_SIZE.MOBILE_MAX_WIDTH;

  return {
    isDesktop,
    isTablet,
    isMobile,
  };
}
