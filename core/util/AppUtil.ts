export const formatUptime = (seconds: number) => {
  const rounded = Math.floor(seconds)
  return `${rounded}s`
}
