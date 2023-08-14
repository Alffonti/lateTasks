export const loadScript = src => {
  new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.addEventListener('load', () => resolve(script))
    script.addEventListener('error', () =>
      reject(new Error(`Failed to load script: "${src}"`))
    )
    script.async = true
    script.defer = true
    script.src = src
    document.head.appendChild(script)
  })
}
