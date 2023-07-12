
export function convertTimeStampToDate(timestamp) {
    const date = new Date(timestamp)
    return date
}

export function convertDateToTimeStamp(date) {
    return date.getTime()
}

export function convertPlanningDates(planning) {
    const convertedPlanning = planning.map((event) => {
        const convertedEvent = { ...event }
        convertedEvent.start = convertTimeStampToDate(event.start)
        convertedEvent.end = convertTimeStampToDate(event.end)

        const hallName = event.hall && event.hall.name ? event.hall.name : ''
        const teacherName = event.teacher && event.teacher.name ? event.teacher.name : ''
        const ueCode = event.ue && event.ue.code ? event.ue.code : ''
        convertedEvent.title = `${ueCode} - ${hallName} - ${teacherName}`

        return convertedEvent
    })
  
    return convertedPlanning
}