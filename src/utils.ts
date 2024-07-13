export function getDeviceType(width: number): string {
  if (width >= 1200) return 'desktop'
  if (width >= 768) return 'tablet'

  return 'mobile'
}

// export function attachSubjectParticle(name) {
//   const lastWord = hasFinalConsonant(name)
//   const result = name + (lastWord === 0 ? '가' : '이')
//   return result
// }

// export function attachObjectParticle(name) {
//   const lastWord = hasFinalConsonant(name)
//   const result = name + (lastWord === 0 ? '를' : '을')
//   return result
// }

// function hasFinalConsonant(name) {
//   const charCode = name.charCodeAt(name.length - 1)
//   const consonantCode = (charCode - 44032) % 28

//   return consonantCode
// }

export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
