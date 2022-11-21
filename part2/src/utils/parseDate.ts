export const parseDate = (date: string) => {
  const dateArr = date.split('.')
  return new Date(Date.parse(dateArr.reverse().join('-')))
}
