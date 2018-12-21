const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const oneDayInMs = 24 * 60 * 60 * 1000

export function dateFilter (value) {
  if (!value) return

  const d = new Date(value)
  return d.toLocaleDateString()
}

export function humanReadableDateFilter (value) {
  if (!value) return

  const now = new Date()
  const diff = now.getTime() - value

  if (diff < oneDayInMs) return 'today'
  if (diff < 2 * oneDayInMs) return 'yesterday'

  const d = new Date(value)
  const month = monthName[d.getMonth()]
  const day = d.getDate()
  const year = d.getFullYear()
  const yearString = year !== now.getFullYear() ? year : ''
  return `${month} ${day} ${yearString}`
}

export default {
  date: dateFilter,
  humanReadableDate: humanReadableDateFilter
}
