const DAYS = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

const MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export const getDayTime = (ts) => {
    const date = new Date(ts)
    return `${DAYS[date.getDay()]} ${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}

export const getDate = (ts) => {
    const date = new Date(ts)
    return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}

export const getTime = (ts) => {
    const date = new Date(ts)
    return `${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
    // return `${DAYS[date.getDay()]} ${date.getHours()}:${date.getMinutes()} ${date.g}`
}