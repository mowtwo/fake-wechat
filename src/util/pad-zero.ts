export default function padZero(target: number | string, count: number) {
  const str = String(target)
  if (str.length >= count) {
    return str
  }
  return `${Array(count - str.length).fill(0).join('')}${str}`
}