export enum DeviceSizes {
  TABLET_MIN_WIDTH = 768,
  MOBILE_MAX_WIDTH = DeviceSizes.TABLET_MIN_WIDTH - 1,
  DESKTOP_MIN_WIDTH = 1200,
  TABLET_MAX_WIDTH = DeviceSizes.DESKTOP_MIN_WIDTH - 1,
}

export enum DeviceTypePageSize {
  MOBILE_PAGE_SIZE = 1,
  TABLET_PAGE_SIZE,
  DESKTOP_PAGE_SIZE,
}
