
export function convertTimeStampToDate(timestamp) {
    const date = new Date(timestamp)
    return date
}

export function convertDateToTimeStamp(date) {
    return date.getTime()
}