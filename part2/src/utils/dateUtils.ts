import moment from 'moment'

export const parseDate = (date: string) => {
  if (!date.length) return
  const dateArr = date.split('.')
  return new Date(Date.parse(dateArr.reverse().join('-')))
}

export const getFirstDate = (firstDate?: Date) => {
  let newDate = firstDate
  if (newDate) {
    // if (newDate.getDay() === 1) return newDate

    while (newDate.getDay() !== 1) {
      newDate = new Date(newDate?.getTime() - 86400000)
    }
    return newDate
  }
}

export const getEveryMondayAndSunday = (period: string[]) => {
  console.log(period)
  const everyMondayAndSunday = []
  const start = moment('2022-08-29'),
    end = moment('2022-12-31')

  let sun = start.clone().day(0)
  let mon = start.clone().day(0 - 6)

  if (mon.isAfter(start, 'd') && sun.isAfter(start, 'd')) {
    everyMondayAndSunday.push({
      monday: mon.format('YYYY-MM-DD'),
      sunday: sun.format('YYYY-MM-DD'),
    })
  }

  if (sun.add(7, 'days').isBefore(end)) {
    while (mon.add(7, 'days').isBefore(end)) {
      everyMondayAndSunday.push({
        monday: mon.format('DD MMM'),
        sunday: sun.format('DD MMM'),
      })
      sun.add(7, 'days')
    }
  }
  return everyMondayAndSunday
}
