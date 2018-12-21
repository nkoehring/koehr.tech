const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const oneDayInMs = 24 * 60 * 60 * 1000

function dateFilter (value) {
  if (!value) return

  const d = new Date(value)
  return d.toLocaleDateString()
}

function humanReadableDateFilter (value) {
  if (!value) return

  const diff = new Date().getTime() - value

  if (diff < oneDayInMs) return 'today'
  if (diff < 2 * oneDayInMs) return 'yesterday'

  const d = new Date(value)
  const month = monthName[d.getMonth()]
  const day = d.getDate()
  return `${month} ${day}`
}

export default {
  date: dateFilter,
  humanReadableDate: humanReadableDateFilter
}
