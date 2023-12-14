export const formatVal = (value: number) => {
  return value.toLocaleString('en-GB', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
}
