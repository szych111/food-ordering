export function isEmail(value) {
  return value.includes('@')
}

export function isNotEmpty(value) {
  return value.trim() !== ''
}

export function hasReqLength(value, minLength, maxLength) {
  return minLength <= value.length <= maxLength
}
