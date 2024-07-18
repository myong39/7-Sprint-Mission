export function isMobileDevice(): boolean {
  if (typeof window != 'undefined') {
    return /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent
    )
  }
  return false
}
